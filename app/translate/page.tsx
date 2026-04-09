"use client";
import { useState } from "react";
import Link from "next/link";

export default function TranslatePage() {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isChineseToViet, setIsChineseToViet] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Hàm Dịch Thuật
  const handleTranslate = async () => {
    if (!sourceText.trim()) return;
    setIsLoading(true);

    try {
      const from = isChineseToViet ? "zh-CN" : "vi";
      const to = isChineseToViet ? "vi" : "zh-CN";
      
      const res = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(sourceText)}`
      );

      if (!res.ok) throw new Error("Lỗi kết nối máy chủ dịch");

      const data = await res.json();
      if (data && data[0]) {
        const result = data[0].map((item: any) => item[0]).join("");
        setTranslatedText(result);
      }
    } catch (error: any) {
      setTranslatedText("Có lỗi xảy ra: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Hàm Phát Âm (Giọng nói)
  const speak = (text: string, mode: "source" | "target") => {
    if (!text) return;
    
    // Logic xác định ngôn ngữ để đọc
    let langCode = "";
    if (mode === "source") {
      langCode = isChineseToViet ? "zh-CN" : "vi-VN";
    } else {
      langCode = isChineseToViet ? "vi-VN" : "zh-CN";
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langCode;
    utterance.rate = 0.9;
    window.speechSynthesis.cancel(); // Dừng các giọng đang nói dở
    window.speechSynthesis.speak(utterance);
  };

  // Đổi chiều ngôn ngữ
  const toggleLanguage = () => {
    setIsChineseToViet(!isChineseToViet);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-20 font-sans">
      {/* Thanh điều hướng */}
      <nav className="max-w-5xl mx-auto p-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-orange-600 transition-all">
          <span>←</span> Quay lại TàuEZ
        </Link>
      </nav>

      <main className="max-w-5xl mx-auto px-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-black text-gray-900 tracking-tight mb-2">TàuEZ Translate</h1>
          <p className="text-gray-500 font-medium">Dịch thuật Trung - Việt siêu tốc & phát âm chuẩn</p>
        </header>

        {/* Bộ chuyển đổi ngôn ngữ */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <div className={`px-10 py-4 rounded-2xl font-black text-lg shadow-sm border-b-4 transition-all ${isChineseToViet ? 'bg-white border-orange-500 text-orange-600' : 'bg-gray-100 border-transparent text-gray-400'}`}>
            {isChineseToViet ? "TIẾNG TRUNG" : "TIẾNG VIỆT"}
          </div>
          
          <button 
            onClick={toggleLanguage}
            className="w-14 h-14 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-orange-600 hover:rotate-180 transition-all duration-500 shadow-xl active:scale-90"
          >
            <span className="text-2xl">⇄</span>
          </button>

          <div className={`px-10 py-4 rounded-2xl font-black text-lg shadow-sm border-b-4 transition-all ${!isChineseToViet ? 'bg-white border-orange-500 text-orange-600' : 'bg-gray-100 border-transparent text-gray-400'}`}>
            {!isChineseToViet ? "TIẾNG TRUNG" : "TIẾNG VIỆT"}
          </div>
        </div>

        {/* Khu vực nhập liệu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Ô Nhập (Source) */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col">
            <textarea
              className="w-full h-64 resize-none outline-none text-2xl text-gray-800 placeholder:text-gray-200 font-medium"
              placeholder="Nhập nội dung..."
              value={sourceText}
              onChange={(e) => setSourceText(e.target.value)}
            />
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-50">
              <button 
                onClick={() => speak(sourceText, "source")}
                className="flex items-center gap-2 text-xs font-black text-gray-400 hover:text-blue-500 uppercase tracking-wider"
              >
                🔊 Nghe
              </button>
              <button 
                onClick={() => setSourceText("")} 
                className="text-xs font-black text-gray-300 hover:text-red-400 uppercase tracking-wider"
              >
                Xóa sạch
              </button>
            </div>
          </div>

          {/* Ô Kết quả (Target) */}
          <div className="bg-[#1e293b] rounded-[2rem] p-8 shadow-2xl flex flex-col relative overflow-hidden text-white">
            {isLoading && (
              <div className="absolute inset-0 bg-[#1e293b]/80 backdrop-blur-sm flex items-center justify-center z-10">
                <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <div className="h-64 overflow-y-auto text-2xl font-semibold leading-relaxed">
              {translatedText || <span className="text-gray-600 italic font-normal">Bản dịch sẽ hiện ở đây...</span>}
            </div>
            <div className="flex justify-end gap-6 mt-6 pt-4 border-t border-white/5">
              <button 
                onClick={() => speak(translatedText, "target")}
                className="text-xs font-black text-orange-400 hover:text-orange-300 uppercase tracking-wider"
              >
                🔊 Phát âm
              </button>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(translatedText);
                  alert("Đã sao chép!");
                }}
                className="text-xs font-black text-orange-400 hover:text-orange-300 uppercase tracking-wider"
              >
                Sao chép
              </button>
            </div>
          </div>
        </div>

        {/* Nút hành động */}
        <div className="flex justify-center mt-12">
          <button 
            onClick={handleTranslate}
            disabled={!sourceText || isLoading}
            className="px-20 py-5 bg-orange-600 text-white rounded-2xl font-black text-xl shadow-2xl shadow-orange-200 hover:bg-orange-700 hover:-translate-y-1 active:translate-y-0 transition-all disabled:grayscale disabled:opacity-50"
          >
            {isLoading ? "ĐANG DỊCH..." : "DỊCH NGAY 🔥"}
          </button>
        </div>
      </main>
    </div>
  );
}