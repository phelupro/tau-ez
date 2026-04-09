"use client";
import { useState } from "react";
import Navbar from "@/app/components/Navbar";

export default function TranslationPractice() {
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
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-10">
        {/* Tiêu đề chính */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 flex justify-center items-center gap-2">
            <span className="text-2xl">文</span> Luyện dịch tiếng Trung
          </h1>
          <p className="text-gray-500 mt-2">Chọn cấp độ HSK và bài để bắt đầu luyện dịch</p>
        </div>

        {/* Bộ chọn HSK */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {levels.map((lvl) => (
            <button key={lvl.id} className={`bg-white border-2 ${lvl.color} px-6 py-2 rounded-xl hover:scale-105 transition shadow-sm`}>
              <div className="font-bold">{lvl.name}</div>
              <div className="text-[10px] uppercase opacity-70">{lvl.sub}</div>
            </button>
          ))}
        </div>

        {/* Các nút chức năng phụ */}
        <div className="flex justify-center gap-4 mb-12">
          <button className="flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-lg border border-orange-100 text-sm font-medium">
            📋 Danh sách bài
          </button>
          <button className="flex items-center gap-2 bg-gray-50 text-gray-600 px-4 py-2 rounded-lg border border-gray-100 text-sm font-medium">
            🔖 Câu đã lưu <span className="bg-gray-200 px-1.5 rounded text-xs">0</span>
          </button>
          <button className="flex items-center gap-2 bg-gray-50 text-gray-600 px-4 py-2 rounded-lg border border-gray-100 text-sm font-medium">
            ❌ Câu sai cần ôn <span className="bg-gray-200 px-1.5 rounded text-xs">0</span>
          </button>
        </div>

        {/* Dashboard chỉ số */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-xs font-bold text-gray-400 uppercase">Số bài đã làm</div>
            <div className="text-3xl font-black mt-1">0</div>
            <div className="text-xs text-gray-400 mt-1 italic">10 bài trong level</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-xs font-bold text-gray-400 uppercase">Tổng câu đã luyện</div>
            <div className="text-3xl font-black mt-1">0</div>
            <div className="text-xs text-gray-400 mt-1 italic">200 câu khả dụng</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-xs font-bold text-gray-400 uppercase">Độ chính xác trung bình</div>
            <div className="text-3xl font-black mt-1 text-green-500">0%</div>
            <div className="text-xs text-gray-400 mt-1 italic">0 câu đúng</div>
          </div>
        </div>

        {/* Danh sách bài cụ thể */}
        <div className="space-y-4">
          <div className="flex gap-2 mb-6">
            {["Tất cả", "Đã làm", "Chưa làm", "Điểm thấp"].map((tab, i) => (
              <button key={i} className={`px-4 py-1.5 rounded-full text-xs font-bold ${i===0 ? 'bg-orange-500 text-white':'bg-white text-gray-500 border border-gray-100'}`}>
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((bai) => (
              <div key={bai} className="bg-white p-5 rounded-2xl border border-gray-100 flex justify-between items-center group hover:border-green-400 transition cursor-pointer">
                <div>
                  <div className="text-green-600 font-bold">Bài {bai}</div>
                  <div className="text-xs text-gray-400">Câu {(bai-1)*20 + 1} - {bai*20}</div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-[10px] text-gray-300">20 câu</span>
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:text-green-500">→</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}