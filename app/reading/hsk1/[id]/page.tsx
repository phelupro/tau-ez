"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import readingData from "../../../data/hsk1-reading.json";

export default function ReadingDetailPage() {
  const params = useParams();
  const id = params?.id as string; // Ép kiểu ID về string để so sánh chuẩn
  const router = useRouter();
  
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  // FIX LỖI .find: Ép kiểu readingData về mảng bất kỳ để TypeScript không báo lỗi
  const lesson = (readingData as any[]).find((item) => item.id === id);

  // Load giọng đọc
  useEffect(() => {
    const loadVoices = () => {
      setVoices(window.speechSynthesis.getVoices());
    };
    loadVoices();
    if (typeof window !== "undefined") {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  // Xử lý khi không tìm thấy bài học
  if (!lesson) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8fafc]">
        <h1 className="text-2xl font-bold mb-4 text-slate-800">Không tìm thấy bài học này!</h1>
        <button 
          onClick={() => router.push('/reading/hsk1')} 
          className="px-6 py-2 bg-[#ff5722] text-white rounded-full font-bold shadow-lg hover:bg-orange-600 transition"
        >
          Quay lại danh sách
        </button>
      </div>
    );
  }

  const handleSpeak = (text: string, index: number) => {
    if (typeof window !== "undefined") {
      window.speechSynthesis.cancel();
      
      const chineseOnly = text.match(/[\u4e00-\u9fa5，。？！]/g)?.join("") || "";
      const utterance = new SpeechSynthesisUtterance(chineseOnly);
      
      const chineseVoice = voices.find(v => 
        (v.lang.startsWith("zh") || v.name.includes("Chinese")) && 
        (v.name.includes("Female") || v.name.includes("Xiaoxiao") || v.name.includes("Google"))
      );

      if (chineseVoice) utterance.voice = chineseVoice;
      else utterance.lang = "zh-CN";

      utterance.rate = 0.8; 
      setPlayingIndex(index);
      
      utterance.onend = () => setPlayingIndex(null);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-20 font-['Lexend']">
      <main className="max-w-4xl mx-auto mt-12 px-6">
        {/* Nút quay lại */}
        <Link href="/reading/hsk1" className="inline-flex items-center gap-2 text-slate-400 font-bold hover:text-[#ff5722] transition-colors mb-8 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Danh sách bài đọc
        </Link>

        {/* Tiêu đề bài học */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-slate-900">{lesson.title}</h1>
          <p className="text-slate-500 mt-3">{lesson.desc}</p>
          <div className="w-20 h-1.5 bg-[#ff5722] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Danh sách các câu trong bài */}
        <div className="space-y-10">
          {lesson.content.map((item: any, idx: number) => (
            <div 
              key={idx}
              onClick={() => handleSpeak(item.hz, idx)}
              className={`p-10 rounded-[3rem] transition-all duration-500 cursor-pointer border-2 group bg-white shadow-sm ${
                playingIndex === idx 
                ? "border-[#ff5722] shadow-2xl shadow-orange-100 -translate-y-1" 
                : "border-slate-100 hover:border-orange-200"
              }`}
            >
              {/* Hiển thị Pinyin trên - Chữ Hán dưới */}
              <div className="flex flex-wrap gap-x-10 gap-y-14 mb-10 items-end">
                {item.words.map((word: any, wIdx: number) => (
                  <div key={wIdx} className="flex flex-col items-center">
                    <span className="text-[13px] font-bold text-orange-400 mb-4 uppercase tracking-[0.15em]">
                      {word.p}
                    </span>
                    <span className="text-4xl font-medium text-slate-800 tracking-tight">
                      {word.h}
                    </span>
                  </div>
                ))}
              </div>

              {/* Dịch nghĩa & Icon Loa */}
              <div className="flex justify-between items-center border-t border-slate-50 pt-8">
                <p className="text-lg text-slate-400 font-medium italic">
                  {item.vi}
                </p>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  playingIndex === idx ? "bg-[#ff5722] text-white animate-pulse shadow-lg shadow-orange-200" : "bg-slate-50 text-slate-300"
                }`}>
                  <span className="text-xl">🔊</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}