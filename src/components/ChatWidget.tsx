'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        'Hi there! I am the SSA Academy chatbot. Ask about admissions, timings, fees, facilities, or contact details.',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const addMessage = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    setError('');
    addMessage({ id: `user-${Date.now()}`, role: 'user', content: trimmed });
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: trimmed }),
      });

      const data = await response.json();
      if (!response.ok || !data.answer) {
        throw new Error(data?.error || 'Unable to get a response from the chatbot.');
      }

      addMessage({ id: `assistant-${Date.now()}`, role: 'assistant', content: data.answer });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      addMessage({
        id: `assistant-error-${Date.now()}`,
        role: 'assistant',
        content: 'I could not get an answer right now. Please try again later or contact the school office.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[360px] max-h-[540px] rounded-[36px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.18)] ring-1 ring-slate-200">
          <div className="flex items-center justify-between rounded-t-[36px] bg-gradient-to-r from-slate-950 via-slate-800 to-slate-900 px-5 py-4 text-white shadow-inner shadow-slate-950/20">
            <div>
              <p className="text-sm font-semibold tracking-[0.08em] uppercase">SSA Academy Chat</p>
              <p className="text-xs text-slate-300">Quick answers from school FAQs</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex h-[380px] flex-col overflow-hidden border-b border-slate-200 bg-slate-50">
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-3xl p-3 text-sm leading-6 shadow-sm ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-br-none'
                        : 'bg-white text-slate-900 rounded-bl-none border border-slate-200'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>
            <form onSubmit={handleSubmit} className="bg-white p-4">
              <div className="flex items-center gap-2 rounded-3xl border border-slate-200 bg-slate-100 px-3 py-2 shadow-inner shadow-slate-200/40">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="inline-flex h-12 min-w-[52px] items-center justify-center rounded-2xl bg-slate-950 px-4 text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
              {error ? <p className="mt-3 text-xs text-red-600">{error}</p> : null}
            </form>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#d4a960] via-[#c8982a] to-[#b8872a] shadow-[0_8px_32px_rgba(200,152,42,0.4)] transition duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgba(200,152,42,0.6)]"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <MessageCircle size={22} className="text-white" strokeWidth={1.5} />
      </button>
    </div>
  );
}
