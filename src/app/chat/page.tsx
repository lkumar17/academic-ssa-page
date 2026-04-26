'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        'Hi! I am the SSA Academy chatbot. Ask me anything about admissions, timings, fees, facilities, or contact details, and I will answer using the school FAQ data.',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const addMessage = (message: Message) => {
    setMessages((current) => [...current, message]);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = input.trim();
    if (!text) {
      return;
    }

    setError('');
    setLoading(true);
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
    };
    addMessage(userMessage);
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: text }),
      });

      const data = await response.json();
      if (!response.ok || !data.answer) {
        throw new Error(data?.error || 'Unable to get a response from the chatbot.');
      }

      addMessage({
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.answer,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900">
      <div className="mx-auto max-w-4xl rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">SSA Academy Chatbot</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900">Ask a question about the school</h1>
          </div>
          <div className="rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
            Powered by Groq AI + Sanity FAQ
          </div>
        </div>

        <div className="mb-6 rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-inner shadow-slate-100/80">
          <div className="space-y-4 max-h-[58vh] overflow-y-auto px-1 pb-1">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`rounded-3xl p-4 shadow-sm ${
                  message.role === 'assistant'
                    ? 'bg-white text-slate-900 shadow-slate-200'
                    : 'bg-slate-950 text-white shadow-slate-900/10 self-end'
                } ${message.role === 'assistant' ? 'self-start' : 'self-end'} w-fit max-w-[90%]`}
              >
                <p className="whitespace-pre-wrap text-sm leading-6">{message.content}</p>
              </div>
            ))}
            <div ref={endRef} />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
          <label htmlFor="question" className="sr-only">
            Enter your question
          </label>
          <input
            id="question"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            disabled={loading}
            placeholder="Type your question here..."
            className="min-h-[56px] flex-1 rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="inline-flex h-14 items-center justify-center rounded-3xl bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? 'Thinking...' : 'Send'}
          </button>
        </form>

        {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}
      </div>
    </main>
  );
}
