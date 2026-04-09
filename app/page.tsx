"use client";

import Link from "next/link";

// 1. Dữ liệu các chuyên mục học tập (COPY TỪ VIDEO)
const learningModules = [
  {
    icon: "📚", title: "Giáo trình HSK", desc: "Học theo chuẩn HSK quốc tế từ cấp độ 1 đến 6, phù hợp với mọi trình độ",
    lessonCount: 150, href: "/courses/hsk"
  },
  {
    icon: "📙", title: "Từ vựng chủ đề", desc: "Hệ thống từ vựng được phân loại theo chủ đề, dễ học và ghi nhớ",
    lessonCount: 80, href: "/vocabulary"
  },
  {
    icon: "💬", title: "Hội thoại", desc: "Luyện tập hội thoại thực tế với các tình huống giao tiếp hàng ngày",
    lessonCount: 120, href: "/conversation"
  },
  {
    icon: "📑", title: "Đọc hiểu", desc: "Nâng cao khả năng đọc hiểu với các bài văn từ cơ bản đến nâng cao",
    lessonCount: 90, href: "/reading"
  },
  {
    icon: "📝", title: "Luyện thi", desc: "Đề thi thử HSK với hệ thống chấm điểm tự động và phân tích chi tiết",
    lessonCount: 60, href: "/practice/exam"
  },
  {
    icon: "✍️", title: "Bộ thủ", desc: "Học 214 bộ thủ cơ bản giúp nhận biết và viết chữ Hán chính xác",
    lessonCount: 30, href: "/practice/writing"
  },
  {
    icon: "🌐", title: "Dịch", desc: "Công cụ dịch thông minh với từ điển tích hợp và ví dụ minh họa",
    lessonCount: 40, href: "/practice/translation"
  },
  {
    icon: "🗣️", title: "Mẫu câu", desc: "Học mẫu câu tiếng trung qua các chủ đề",
    lessonCount: 70, href: "/practice/sentence-patterns"
  },
  {
    icon: "🖋️", title: "Luyện viết", desc: "Luyện viết chữ Hán chuẩn nét, có hướng dẫn và đếm số nét sai",
    lessonCount: 50, href: "/practice/stroke-order"
  },
  {
    icon: "🔢", title: "Lượng từ", desc: "Học các loại lượng từ phổ biến trong tiếng Trung kèm ví dụ cụ thể",
    lessonCount: 45, href: "/practice/measure-words"
  },
  {
    icon: "🏫", title: "Luyện đề THPT", desc: "Luyện đề thi thử THPT online với hệ thống chấm điểm tự động và giải thích chi tiết",
    lessonCount: 10, href: "/practice/exam-thpt"
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 2. HERO SECTION - COPY HIHSK DESIGN, TEXT THU NHỎ */}
      <section className="max-w-[1400px] mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-[#ff5722] text-sm font-semibold">
            <span>✨</span> Nền tảng học tiếng Trung #1 Việt Nam
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tighter text-gray-950">
              Chinh phục <br />
              <span className="text-[#ff5722] relative inline-block">
                Tiếng Trung
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 10" fill="none">
                  <path d="M1 9C50 1 150 1 299 9" stroke="#ff5722" strokeWidth="6" strokeLinecap="round"/>
                </svg>
              </span> dễ dàng
            </h1>
            <p className="text-lg text-gray-500 max-w-xl font-medium leading-relaxed">
              Hệ thống học tiếng Trung toàn diện theo chuẩn HSK quốc tế — từ vựng, ngữ pháp, hội thoại, luyện thi — tất cả trong một nền tảng duy nhất.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link href="/courses/hsk" className="px-9 py-4 bg-[#ff5722] text-white rounded-2xl text-lg font-bold hover:bg-orange-600 transition shadow-lg shadow-orange-100 flex items-center gap-2 group">
              🚀 Bắt đầu học ngay
            </Link>
            <Link href="/intro" className="px-9 py-4 bg-white text-gray-900 rounded-2xl text-lg font-bold border-2 border-gray-100 hover:border-orange-200 hover:bg-orange-50 transition-all">
              📖 Khám phá khóa học
            </Link>
          </div>

          <div className="pt-10 flex items-center gap-4 border-t border-gray-50">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-9 h-9 rounded-full border-2 border-white bg-orange-${i}00 flex items-center justify-center text-[10px] font-bold text-white shadow-sm`}>U{i}</div>
              ))}
            </div>
            <p className="text-sm font-semibold text-gray-500">Hơn <span className="text-gray-950 font-bold text-base">50,000+</span> học viên đang học hàng ngày</p>
          </div>
        </div>

        {/* BÊN PHẢI: DESIGN THẺ FLOATING (CARD THU NHỎ TEXT) */}
        <div className="relative isolate">
          <div className="bg-white p-10 rounded-[40px] shadow-[0_32px_64px_-16px_rgba(255,87,34,0.1)] border border-gray-50 space-y-10 transform md:rotate-2 hover:rotate-0 transition-all duration-500">
             <div className="text-center space-y-4">
                <div className="text-8xl font-black text-gray-950 tracking-tighter">你好</div>
                <div className="text-xl text-gray-400 font-medium tracking-wide">nǐ hǎo</div>
                <div className="text-4xl font-extrabold text-[#ff5722]">Xin chào</div>
             </div>
             
             <div className="flex justify-center gap-1.5 pt-2">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className={`w-1.5 rounded-full bg-gray-100 ${i === 3 ? 'h-10 bg-[#ff5722]' : 'h-6'}`} />
                ))}
             </div>

             <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100 text-center space-y-1 hover:bg-orange-50 transition">
                  <div className="text-4xl font-black text-gray-950 tracking-tighter">11,000+</div>
                  <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">Từ vựng</div>
                </div>
                <div className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100 text-center relative hover:bg-orange-50 transition">
                  <div className="text-4xl font-black text-gray-950 tracking-tighter">HSK6</div>
                  <div className="text-xs text-gray-400 font-bold uppercase tracking-widest leading-tight">Đầu ra</div>
                  <div className="absolute top-3 right-4 text-orange-400 animate-pulse">🎯</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. NỘI DUNG ĐA DẠNG SECTION - COPY Y CHANG NỘI DUNG & TEXT VỪA VẶN */}
      <section className="bg-gray-50/50 py-24 px-6 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-sm font-bold text-[#ff5722] uppercase tracking-[0.2em]">Nội dung đa dạng</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-950 leading-tight">
              Tất cả những gì bạn cần <br />
              để <span className="text-[#ff5722]">thành thạo</span> tiếng Trung
            </h2>
            <p className="text-lg text-gray-600 pt-3 font-medium">11 chuyên mục học tập được thiết kế khoa học, phù hợp từ người mới bắt đầu đến nâng cao.</p>
          </div>
          
          {/* GRID CÁC CHUYÊN MỤC HỌC TẬP (CÓ ĐỦ 11 MỤC, ICON, MÔ TẢ) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {learningModules.map((item, idx) => (
              <Link href={item.href} key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-100 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-5 relative">
                  <div className="text-5xl group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div className="absolute -bottom-1 -right-1.5 text-[10px] font-bold text-gray-400 group-hover:text-[#ff5722] transition-colors">{item.lessonCount} bài</div>
                </div>
                <h3 className="text-xl font-bold text-gray-950 mb-2 group-hover:text-[#ff5722] transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed font-medium">{item.desc}</p>
                <div className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-[#ff5722] group-hover:gap-3 transition-all">Học ngay <span>→</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}