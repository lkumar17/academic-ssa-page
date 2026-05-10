import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Missing GROQ_API_KEY environment variable.' }, { status: 500 });
  }

  const formData = await request.formData();
  const file = formData.get('file');
  if (!file || !(file instanceof Blob)) {
    return NextResponse.json({ error: 'Audio file is required.' }, { status: 400 });
  }

  const groqForm = new FormData();
  groqForm.append('file', file, 'voice.webm');
  groqForm.append('model', 'whisper-large-v3');

  const response = await fetch('https://api.groq.com/openai/v1/audio/transcriptions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    body: groqForm,
  });

  const result = await response.json();

  if (!response.ok) {
    return NextResponse.json({ error: result?.error?.message || 'Transcription failed.' }, { status: 502 });
  }

  return NextResponse.json({ transcript: result.text || result.transcript || '' });
}
