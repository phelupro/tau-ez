"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [localInput, setLocalInput] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const messageContent = localInput.trim();
    if (!messageContent || isLoading) return;

    const userMessage = { role: 'user', content: messageContent };
    setMessages((prev) => [...prev, userMessage]);
    setLocalInput("");
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.text();
      setMessages((prev) => [...prev, { role: 'assistant', content: data }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'assistant', content: "**Lỗi rồi!** Gấu trúc bị nghẹn tre rồi! 🎋" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end font-sans text-black">
      {isOpen && (
        <div className="w-[350px] md:w-[420px] h-[550px] bg-white rounded-[2rem] shadow-2xl border-4 border-black flex flex-col overflow-hidden mb-4 animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="bg-black p-4 text-white flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2">
              <span className="text-2xl bg-white rounded-full p-1">🐼</span>
              <div className="flex flex-col">
                <span className="font-bold text-sm">Panda Helper</span>
                <span className="text-[10px] text-green-400">Online 24/7</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-lg hover:rotate-90 transition-transform">✕</button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f8f9fa]">
            {messages.length === 0 && (
              <div className="text-center mt-16 opacity-50">
                <div className="text-5xl mb-2">🎋</div>
                <p className="text-sm font-bold">Học tiếng Trung khó, có Gấu lo!</p>
              </div>
            )}
            
            {messages.map((m: any, index: number) => (
              <div key={index} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 px-4 rounded-2xl shadow-sm text-[14px] leading-relaxed ${
                  m.role === 'user' 
                    ? "bg-black text-white rounded-tr-none" 
                    : "bg-white text-black border-2 border-gray-200 rounded-tl-none"
                }`}>
                  {m.role === 'assistant' ? (
                    <div className="prose prose-sm max-w-none prose-p:my-1 prose-headings:my-2 prose-li:my-0 text-black">
                      <ReactMarkdown>{m.content}</ReactMarkdown>
                    </div>
                  ) : (
                    m.content
                  )}
                </div>
              </div>
            ))}
            {isLoading && <div className="text-[10px] font-bold px-4 animate-pulse">🐼 Gấu đang viết...</div>}
          </div>

          {/* Form */}
          <form onSubmit={handleFormSubmit} className="p-4 bg-white border-t-2 border-black flex gap-2">
            <input
              type="text"
              value={localInput} 
              onChange={(e) => setLocalInput(e.target.value)} 
              placeholder="Nhắn gì đó cho Gấu..."
              className="flex-1 px-4 py-2 bg-gray-100 rounded-full text-sm outline-none focus:ring-2 focus:ring-black text-black"
            />
            <button 
              type="submit" 
              disabled={isLoading || !localInput.trim()}
              className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md disabled:opacity-20"
            >
              🎋
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-black rounded-full shadow-2xl flex items-center justify-center text-3xl border-4 border-white hover:scale-110 transition-all"
      >
        {isOpen ? "❌" : "🐼"}
      </button>
    </div>
  );
}