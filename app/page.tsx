"use client";

import Link from "next/link";

const learningModules = [
  { icon: "📚", title: "Giáo trình HSK", desc: "Học theo chuẩn HSK quốc tế từ cấp độ 1 đến 6.", count: "150 bài", href: "/hsk" },
  { icon: "📙", title: "Từ vựng chủ đề", desc: "Hệ thống từ vựng phân loại theo chủ đề.", count: "80 bài", href: "/vocabulary" },
  { icon: "💬", title: "Hội thoại", desc: "Luyện tập hội thoại thực tế hàng ngày.", count: "120 bài", href: "/conversation" },
  { icon: "📑", title: "Đọc hiểu", desc: "Nâng cao khả năng đọc hiểu từ cơ bản đến nâng cao.", count: "90 bài", href: "/reading" },
  { icon: "📝", title: "Luyện thi", desc: "Đề thi thử HSK với hệ thống chấm điểm.", count: "60 bài", href: "/practice/exam" },
  { icon: "✍️", title: "Bộ thủ", desc: "Học 214 bộ thủ để viết chữ Hán chuẩn.", count: "30 bài", href: "/radicals" },
  { icon: "🌐", title: "Dịch AI", desc: "Công cụ dịch thông minh tích hợp từ điển.", count: "AI", href: "/translate" },
  { icon: "🗣️", title: "Mẫu câu", desc: "Học mẫu câu tiếng trung qua các chủ đề.", count: "70 bài", href: "/sentence-patterns" },
  { icon: "🖋️", title: "Luyện viết", desc: "Luyện viết chữ Hán chuẩn nét, có hướng dẫn.", count: "50 bài", href: "/writing" },
  { icon: "🔢", title: "Lượng từ", desc: "Học các loại lượng từ phổ biến.", count: "45 bài", href: "/measure-words" },
  { icon: "🏫", title: "Luyện đề THPT", desc: "Luyện đề thi thử THPT có giải thích.", count: "10 bài", href: "/exam-thpt" },
];

export default function Home() {
  // --- CHỖ NÀY ĐỂ CHECK LOG TRÊN VERCEL ---
  console.log("[TàuEZ Status] - Trang chủ đang render...");

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO SECTION (2 CỘT ĐỐI XỨNG HOÀN HẢO) */}
      <section className="max-w-[1400px] mx-auto px-6 py-16 md:py-32 grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* CỘT TRÁI: TIÊU ĐỀ ĐÃ SỬA CẤU TRÚC CHỮ */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#ff5722] text-[13px] font-bold">
            ✨ Nền tảng học tiếng Trung #1 Việt Nam
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter text-gray-900">
              Chinh phục <br />
              <span className="text-[#ff5722] relative inline-block">
                Tiếng Trung
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 10" fill="none" preserveAspectRatio="none">
                  <path d="M1 9C50 1 150 1 299 9" stroke="#ff5722" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            <p className="text-3xl md:text-4xl font-extrabold text-gray-400 tracking-tight">
              dễ dàng hơn bao giờ hết
            </p>
          </div>
          <p className="text-base md:text-lg text-gray-500 max-w-lg font-medium leading-relaxed">
            Hệ thống học tiếng Trung toàn diện theo chuẩn HSK quốc tế — tích hợp AI giúp bạn tiến bộ vượt bậc mỗi ngày.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/hsk" className="px-10 py-4 bg-[#ff5722] text-white rounded-2xl text-lg font-bold hover:bg-orange-600 shadow-xl shadow-orange-100 transition-all active:scale-95">
              🚀 Bắt đầu ngay
            </Link>
            <Link href="/courses" className="px-10 py-4 bg-white text-gray-900 border-2 border-gray-100 rounded-2xl text-lg font-bold hover:bg-orange-50 transition-all">
              Khám phá
            </Link>
          </div>
        </div>

        {/* CỘT PHẢI: KHỐI NIHAO ĐỐI XỨNG CÙNG HÀNG */}
        <div className="relative isolate flex justify-center items-center w-full">
          <div className="bg-white p-10 md:p-14 rounded-[50px] shadow-[0_50px_100px_-20px_rgba(255,87,34,0.18)] border border-orange-50 transform rotate-2 hover:rotate-0 transition-all duration-500 w-full max-w-lg">
            <div className="text-center space-y-6">
              <div className="text-9xl font-black text-gray-900 tracking-tighter leading-none">你好</div>
              <div className="text-2xl text-gray-400 font-bold tracking-[0.3em] uppercase">nǐ hǎo</div>
              <div className="text-5xl font-black text-[#ff5722]">Xin chào</div>
            </div>
            <div className="mt-14 grid grid-cols-2 gap-6">
              <div className="bg-orange-50/60 p-6 rounded-[32px] text-center border border-orange-100">
                <div className="text-4xl font-black text-gray-900">11k+</div>
                <div className="text-[11px] font-black text-gray-400 uppercase tracking-wider pt-1">Từ vựng</div>
              </div>
              <div className="bg-orange-50/60 p-6 rounded-[32px] text-center border border-orange-100 relative">
                <div className="text-4xl font-black text-gray-900">7</div>
                <div className="text-[11px] font-black text-gray-400 uppercase tracking-wider pt-1">Ngày học</div>
                <div className="absolute -top-3 -right-2 text-orange-500 animate-bounce text-2xl">🔥</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NỘI DUNG GRID (GIỮ NGUYÊN) */}
      <section className="bg-gray-50/50 py-24 px-6 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center space-y-4 mb-16">
            <p className="text-[#ff5722] font-black uppercase tracking-[0.2em] text-xs">Danh mục bài học</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">Lộ trình học bài bản</h2>
            <div className="w-20 h-2 bg-[#ff5722] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningModules.map((item, idx) => (
              <Link href={item.href} key={idx} className="bg-white p-7 rounded-[30px] shadow-sm border border-gray-100 hover:shadow-2xl hover:border-orange-200 transition-all group relative overflow-hidden">
                <div className="flex justify-between items-start mb-5">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <span className="text-[11px] font-black px-3 py-1 bg-orange-50 text-[#ff5722] rounded-full">{item.count}</span>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-[#ff5722] transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed mb-4">{item.desc}</p>
                <div className="text-xs font-black text-[#ff5722] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  KHÁM PHÁ NGAY <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}