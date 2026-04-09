"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  // Dữ liệu các chức năng chính
  const features = [
    {
      title: "Giáo trình Hán ngữ",
      desc: "Học bài bản từ HSK 1 đến HSK 6",
      icon: "📚",
      href: "/hsk",
      color: "bg-blue-500"
    },
    {
      title: "Từ vựng HSK",
      desc: "Hệ thống từ vựng chuẩn hóa",
      icon: "📔",
      href: "/vocabulary/hsk",
      color: "bg-red-500"
    },
    {
      title: "Luyện tập",
      desc: "Dịch câu, sắp xếp, điền từ",
      icon: "✍️",
      href: "/practice/translation",
      color: "bg-orange-500"
    },
    {
      title: "Hội thoại",
      desc: "Giao tiếp thực tế đời sống",
      icon: "💬",
      href: "/conversation",
      color: "bg-green-500"
    },
    {
      title: "Đọc hiểu",
      desc: "Nâng cao kỹ năng đọc văn bản",
      icon: "📖",
      href: "/reading",
      color: "bg-teal-500"
    },
    {
      title: "Bộ thủ",
      desc: "214 bộ thủ cốt lõi",
      icon: "🖌️",
      href: "/radicals",
      color: "bg-red-700"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
      {/* Navbar Component */}
      <Navbar />

      {/* 2. PHẦN GIỚI THIỆU CHÍNH (HERO SECTION) */}
      <main className="max-w-[1400px] mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-[#ff5722] text-sm font-medium">
            <span>✨</span> Nền tảng học tiếng Trung #1 cho người Việt
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-950">
            Chinh phục <br />
            <span className="text-[#ff5722] relative">
              Tiếng Trung
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 10" fill="none"><path d="M1 9C50 1 150 1 299 9" stroke="#ff5722" strokeWidth="3" strokeLinecap="round"/></svg>
            </span> dễ dàng
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            Hệ thống học tiếng Trung toàn diện theo chuẩn HSK quốc tế — từ từ vựng, ngữ pháp, hội thoại đến luyện thi. Tất cả trong một nền tảng duy nhất.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <button className="px-8 py-4 bg-[#ff5722] text-white rounded-xl text-lg font-bold hover:bg-[#f44336] transition shadow-lg shadow-orange-200">
              Bắt đầu học ngay
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 rounded-xl text-lg font-semibold border border-gray-200 hover:bg-gray-50 transition">
              Khám phá khóa học
            </button>
          </div>
          {/* Thêm phần học viên đang học */}
          <div className="pt-8 flex items-center gap-3 text-sm text-gray-500 border-t border-gray-100">
             <div className="flex -space-x-3">
                {[1,2,3,4].map(i => <div key={i} className={`w-9 h-9 rounded-full bg-gray-${i+1}00 border-2 border-white`} />)}
             </div>
             Hơn 50,000+ học viên đang học hàng ngày
          </div>
        </div>

        {/* Thẻ từ vựng bên phải (你好) */}
        <div className="bg-white p-8 rounded-3xl shadow-2xl shadow-gray-100 border border-gray-100 space-y-8 transform md:rotate-2 relative">
           <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl">💡</div>
           <div className="text-center space-y-3 pt-4">
               <div className="text-8xl font-black text-gray-950 tracking-widest">你好</div>
               <div className="text-2xl text-gray-500 font-mono">nǐ hǎo</div>
               <div className="text-3xl font-bold text-[#ff5722]">Xin chào</div>
           </div>
           
           <div className="grid grid-cols-3 gap-3 pt-6 border-t border-gray-100 text-center">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="text-3xl font-bold text-gray-950">11,000+</div>
                <div className="text-sm text-gray-500">Từ vựng</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="text-3xl font-bold text-gray-950">7</div>
                <div className="text-sm text-gray-500">Ngày liên tiếp</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 relative">
                <div className="text-xs absolute top-1 right-2 px-1.5 py-0.5 bg-orange-100 text-[#ff5722] rounded-full font-bold">HSK</div>
                <div className="text-3xl font-bold text-gray-950">3</div>
                <div className="text-sm text-gray-500">Cấp độ</div>
              </div>
           </div>
        </div>
      </main>

      {/* 3. PHẦN CÁC DỊCH VỤ (SERVICES SECTION) */}
      <section className="bg-gray-50/50 py-24">
        <div className="max-w-[1400px] mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-4xl font-extrabold text-gray-950">
              Tất cả những gì bạn cần để <span className="text-[#ff5722]">thành thạo</span> tiếng Trung
            </h2>
            <p className="text-lg text-gray-600">
              11 chuyên mục học tập được thiết kế khoa học, phù hợp từ người mới bắt đầu đến nâng cao.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, index) => (
              <Link href={feat.href} key={index} className="group">
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className={`w-14 h-14 ${feat.color} text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg group-hover:rotate-12 transition-transform`}>
                    {feat.icon}
                  </div>
                  <h3 className="text-xl font-black text-gray-800 mb-2">{feat.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feat.desc}</p>
                  <div className="mt-6 flex items-center text-[#ff5722] font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Học ngay <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CHÂN TRANG (FOOTER TẠM) */}
      <footer className="bg-gray-950 text-gray-300 py-16 mt-16">
        <div className="max-w-[1400px] mx-auto px-6 text-center text-sm">
          <p className="text-2xl font-bold text-white mb-4">Tàu<span className="text-[#ff5722]">EZ</span></p>
          <p>© 2024 TauEZ.com. Mọi quyền được bảo lưu.</p>
          <p className="mt-2 text-gray-500">Nền tảng học tiếng Trung lầy lội nhất Việt Nam.</p>
        </div>
      </footer>
    </div>
  );
}