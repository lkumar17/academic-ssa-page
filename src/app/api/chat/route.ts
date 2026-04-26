import { NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-04-01',
  useCdn: false,
});

const GROQ_API_KEY = process.env.GROQ_API_KEY;
const GROQ_MODEL = 'llama-3.1-8b-instant';

export async function POST(request: Request) {
  if (!GROQ_API_KEY) {
    return NextResponse.json({ error: 'Missing GROQ_API_KEY environment variable.' }, { status: 500 });
  }

  const body = await request.json().catch(() => null);
  const question = typeof body?.question === 'string' ? body.question.trim() : '';

  if (!question) {
    return NextResponse.json({ error: 'Question is required.' }, { status: 400 });
  }

  const faqData = await sanityClient.fetch(
    '*[_type == "chatbotFaq" && isActive == true] | order(order asc) { question, answer, category, keywords }'
  );

  if (!Array.isArray(faqData) || faqData.length === 0) {
    return NextResponse.json({
      answer:
        'No active chatbot FAQ entries were found. Please add FAQs in the Sanity Studio under Chatbot FAQ.',
    });
  }

  const faqContext = faqData
    .map(
      (faq: { category?: string; question: string; answer: string }, index: number) =>
        `FAQ ${index + 1}${faq.category ? ` [${faq.category}]` : ''}\nQ: ${faq.question}\nA: ${faq.answer}`
    )
    .join('\n\n');

  const systemPrompt = `You are a helpful assistant for Sree Saraswathy Academy. Answer only using the FAQ information below. Do not hallucinate or invent details that are not present in the provided FAQ data. If the user's question cannot be answered from the data, say you could not find the information and suggest contacting the school office or checking the website.`;

  const userPrompt = `User question: ${question}\n\nFAQ data:\n${faqContext}`;

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      temperature: 0.3,
      max_tokens: 350,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    return NextResponse.json({ error: `Groq API error: ${response.status} ${errorBody}` }, { status: 502 });
  }

  const result = await response.json();
  const answer = result?.choices?.[0]?.message?.content?.trim();

  if (!answer) {
    return NextResponse.json({ error: 'Failed to generate a response from Groq AI.' }, { status: 502 });
  }

  return NextResponse.json({ answer });
}
