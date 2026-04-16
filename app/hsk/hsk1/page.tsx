"use client";
import { useEffect, useRef, useState } from "react";
import hskData from "../../data/hsk1-vocab.json";
import HanziWriter from "hanzi-writer";

// --- COMPONENT BẢNG TẬP VIẾT ---
function WritingBoard({ word }: { word: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current || !word) return;
    containerRef.current.innerHTML = ""; 
    writerRef.current = HanziWriter.create(containerRef.current, word[0], {
      width: 160,
      height: 160,
      showCharacter: false, 
      padding: 5,
      strokeColor: "#ff5722",
      outlineColor: "#ddd",   
      drawingColor: "#1e293b", 
      drawingWidth: 4,        
      showHintAfterMisses: 1,  
      highlightColor: "#fbbf24", 
    });
    writerRef.current.quiz(); 
    return () => { if (containerRef.current) containerRef.current.innerHTML = ""; };
  }, [word]);

  return (
    <div className="flex flex-col items-center gap-3">
      <div 
        ref={containerRef} 
        className="bg-white rounded-xl shadow-md border-2 border-orange-200 cursor-crosshair touch-none"
        style={{ 
            backgroundImage: 'linear-gradient(to right, #fee2e2 1px, transparent 1px), linear-gradient(to bottom, #fee2e2 1px, transparent 1px)', 
            backgroundSize: '100% 100%' 
        }}
      ></div>
      <div className="flex gap-2">
        <button onClick={() => writerRef.current?.animateCharacter()} className="text-[10px] bg-gray-800 text-white px-3 py-1.5 rounded-lg font-bold hover:bg-black transition-colors">XEM MẪU</button>
        <button onClick={() => writerRef.current?.quiz()} className="text-[10px] bg-orange-500 text-white px-3 py-1.5 rounded-lg font-bold hover:bg-orange-600 transition-colors">VIẾT LẠI</button>
      </div>
    </div>
  );
}

// --- TRANG CHÍNH ---
export default function HSK1VocabPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const wordsPerPage = 20;

  // Logic phân trang
  const indexOfLastWord = currentPage * wordsPerPage;
  const indexOfFirstWord = indexOfLastWord - wordsPerPage;
  const currentWords = hskData.slice(indexOfFirstWord, indexOfLastWord);
  const totalPages = Math.ceil(hskData.length / wordsPerPage);

  // Hàm đọc (Chỉ đọc tiếng Trung)
  const handleSpeak = (text: string) => {
    if (typeof window !== "undefined") {
      window.speechSynthesis.cancel();
      const chineseOnly = text.match(/[\u4e00-\u9fa5]/g)?.join("") || "";
      if (chineseOnly) {
        const utterance = new SpeechSynthesisUtterance(chineseOnly);
        utterance.lang = "zh-CN";
        utterance.rate = 0.8;
        window.speechSynthesis.speak(utterance);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-slate-50 min-h-screen pb-20">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-2">Luyện viết HSK 1</h1>
        <p className="text-slate-500 font-medium">
          Đang xem từ {indexOfFirstWord + 1} đến {Math.min(indexOfLastWord, hskData.length)} ({hskData.length} từ)
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {currentWords.map((item: any, index: number) => (
          <div key={index} className="bg-white p-6 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all border border-slate-100">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-slate-800">{item.word}</span>
                <button 
                  onClick={() => handleSpeak(item.word)} 
                  className="w-10 h-10 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all shadow-sm"
                >🔊</button>
              </div>
              <div className="text-right">
                <span className="text-sm font-black text-slate-300 uppercase tracking-widest">{item.pinyin}</span>
                <p className="text-xs font-bold text-slate-600 mt-1">{item.meaning}</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-5 mb-6 border border-slate-100">
              <WritingBoard word={item.word} />
            </div>

            <div className="space-y-2 border-t border-slate-50 pt-4">
              <p className="text-sm text-slate-600 italic font-medium">"{item.example}"</p>
              <button 
                onClick={() => handleSpeak(item.example)} 
                className="text-[10px] text-orange-500 font-bold hover:text-orange-700 transition-colors"
              >NGHE VÍ DỤ 🔊</button>
            </div>
          </div>
        ))}
      </div>

      {/* THANH ĐIỀU HƯỚNG PHÂN TRANG */}
      <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-6">
        <button 
          disabled={currentPage === 1}
          onClick={() => { setCurrentPage(currentPage - 1); scrollToTop(); }}
          className="px-6 py-2 bg-white border-2 border-orange-100 rounded-xl font-bold text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-orange-50 transition-colors shadow-sm"
        >
          ← Trang trước
        </button>

        <div className="flex gap-2 overflow-x-auto p-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => { setCurrentPage(num); scrollToTop(); }}
              className={`w-10 h-10 min-w-[40px] rounded-xl font-black transition-all ${
                currentPage === num 
                ? "bg-[#ff5722] text-white shadow-lg shadow-orange-200 scale-110" 
                : "bg-white text-gray-400 hover:bg-orange-50 border border-slate-100"
              }`}
            >
              {num}
            </button>
          ))}
        </div>

        <button 
          disabled={currentPage === totalPages}
          onClick={() => { setCurrentPage(currentPage + 1); scrollToTop(); }}
          className="px-6 py-2 bg-white border-2 border-orange-100 rounded-xl font-bold text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-orange-50 transition-colors shadow-sm"
        >
          Trang sau →
        </button>
      </div>
    </div>
  );
}