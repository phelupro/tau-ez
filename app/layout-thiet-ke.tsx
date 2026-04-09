"use client";
import Link from "next/link";

interface PracticeLayoutProps {
  title: string;
  icon: string;
  description: string;
  totalQuestions: number;
}

export default function PracticeBase({ title, icon, description, totalQuestions }: PracticeLayoutProps) {
  const levels = [
    { id: 1, name: "HSK 1", sub: "Sơ cấp 1", color: "border-green-500 text-green-600" },
    { id: 2, name: "HSK 2", sub: "Sơ cấp 2", color: "border-blue-500 text-blue-600" },
    { id: 3, name: "HSK 3", sub: "Trung cấp 1", color: "border-red-400 text-red-500" },
    { id: 4, name: "HSK 4", sub: "Trung cấp 2", color: "border-orange-400 text-orange-500" },
    { id: 5, name: "HSK 5", sub: "Cao cấp 1", color: "border-blue-800 text-blue-900" },
    { id: 6, name: "HSK 6", sub: "Cao cấp 2", color: "border-red-800 text-red-900" },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-20">

      <main className="max-w-5xl mx-auto px-6 pt-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 flex justify-center items-center gap-2">
            <span className="text-2xl">{icon}</span> {title}
          </h1>
          <p className="text-gray-500 mt-2">{description}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {levels.map((lvl) => (
            <button key={lvl.id} className={`bg-white border-2 ${lvl.color} px-6 py-2 rounded-xl hover:scale-105 transition shadow-sm`}>
              <div className="font-bold">{lvl.name}</div>
              <div className="text-[10px] uppercase opacity-70">{lvl.sub}</div>
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button className="flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-lg border border-orange-100 text-sm font-medium">📋 Danh sách bài</button>
          <button className="flex items-center gap-2 bg-gray-50 text-gray-600 px-4 py-2 rounded-lg border border-gray-100 text-sm font-medium">🔖 Câu đã lưu 0</button>
          <button className="flex items-center gap-2 bg-gray-50 text-gray-600 px-4 py-2 rounded-lg border border-gray-100 text-sm font-medium">❌ Câu sai cần ôn 0</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-xs font-bold text-gray-400">SỐ BÀI ĐÃ LÀM</div>
            <div className="text-3xl font-black mt-1">0</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-xs font-bold text-gray-400">TỔNG CÂU ĐÃ LUYỆN</div>
            <div className="text-3xl font-black mt-1">0</div>
            <div className="text-xs text-gray-400 mt-1 italic">{totalQuestions} câu khả dụng</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-xs font-bold text-gray-400">ĐỘ CHÍNH XÁC TRUNG BÌNH</div>
            <div className="text-3xl font-black mt-1 text-green-500">0%</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((bai) => (
            <div key={bai} className="bg-white p-5 rounded-2xl border border-gray-100 flex justify-between items-center group hover:border-orange-400 transition cursor-pointer">
              <div>
                <div className="font-bold text-gray-800">Bài {bai}</div>
                <div className="text-xs text-gray-400">Câu {(bai-1)*10 + 1} - {bai*10}</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:text-orange-500">→</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}