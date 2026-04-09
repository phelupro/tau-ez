"use client";

import { ClerkProvider, SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
import "./globals.css";

// ĐÂY LÀ MENU MỚI CỦA MÀY ĐÃ ĐƯỢC TÍCH HỢP CLERK
function Navbar() {
  const { isSignedIn } = useAuth();
  const [isLuyenTapOpen, setIsLuyenTapOpen] = useState(false);

  const practiceItems = [
    { name: "Luyện dịch", href: "/practice/translation", icon: "📙", desc: "Dịch câu Trung - Việt" },
    { name: "Sắp xếp câu", href: "/practice/reorder", icon: "⇌", desc: "Sắp xếp từ thành câu đúng" },
    { name: "Sửa câu sai", href: "/practice/fix-error", icon: "ⓧ", desc: "Tìm và sửa lỗi ngữ pháp" },
    { name: "Điền từ", href: "/practice/fill-blank", icon: "Aa", desc: "Điền từ còn thiếu vào câu" },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b px-6 py-3 flex items-center justify-between sticky top-0 z-[100] shadow-sm">
      {/* LEFT: LOGO & LINKS */}
      <div className="flex items-center gap-10">
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-9 h-9 bg-[#ff5722] rounded-xl flex items-center justify-center shadow-lg shadow-orange-100 rotate-3 group-hover:rotate-0 transition-transform">
            <span className="text-white font-black text-xl">Z</span>
          </div>
          <span className="text-2xl font-black text-[#ff5722] tracking-tighter">TàuEZ</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6 text-[14px] font-bold text-gray-600">
          <Link href="/" className="hover:text-[#ff5722] transition font-bold">Trang chủ</Link>
          <Link href="/hsk" className="hover:text-[#ff5722] transition font-bold">GT hán ngữ</Link>

          {/* Dropdown Luyện tập - Dùng logic di chuột của mày */}
          <div
            className="relative py-2 cursor-pointer"
            onMouseEnter={() => setIsLuyenTapOpen(true)}
            onMouseLeave={() => setIsLuyenTapOpen(false)}
          >
            <div className={`flex items-center gap-1 transition-colors ${isLuyenTapOpen ? 'text-[#ff5722]' : 'hover:text-[#ff5722]'}`}>
              Luyện tập <span className="text-[10px] transition-transform duration-300" style={{ transform: isLuyenTapOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
            </div>

            {isLuyenTapOpen && (
              <div className="absolute top-full left-0 w-72 bg-white shadow-2xl rounded-2xl border border-orange-50 p-2 mt-1 animate-in fade-in slide-in-from-top-2 duration-200">
                {practiceItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-4 p-3 hover:bg-orange-50 rounded-xl transition-all group"
                  >
                    <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-xl group-hover:bg-white shadow-sm transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900 group-hover:text-[#ff5722]">{item.name}</div>
                      <div className="text-[11px] text-gray-400 font-medium">{item.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Dropdown Từ vựng - Mày thích kiểu Group hover đúng không? Có luôn */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1 hover:text-[#ff5722] transition font-bold group-hover:text-[#ff5722]">
              Từ vựng <span className="text-[10px]">▼</span>
            </button>
            <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl border border-orange-50 p-2 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-1">
              <Link href="/vocabulary/hsk" className="flex items-center gap-4 p-3 hover:bg-orange-50 rounded-xl transition group">
                <div className="text-xl bg-orange-50 w-10 h-10 flex items-center justify-center rounded-lg">📔</div>
                <div>
                  <div className="text-sm font-bold text-gray-900 group-hover:text-[#ff5722]">Từ vựng HSK</div>
                  <div className="text-[10px] text-gray-400">Học theo bài và cấp độ</div>
                </div>
              </Link>
              <Link href="/vocabulary/topics" className="flex items-center gap-4 p-3 hover:bg-orange-50 rounded-xl transition group">
                <div className="text-xl bg-orange-50 w-10 h-10 flex items-center justify-center rounded-lg">📚</div>
                <div>
                  <div className="text-sm font-bold text-gray-900 group-hover:text-[#ff5722]">Từ vựng chủ đề</div>
                  <div className="text-[10px] text-gray-400">Học theo chủ đề giao tiếp</div>
                </div>
              </Link>
            </div>
          </div>

          <Link href="/conversation" className="hover:text-[#ff5722] transition font-bold">Hội thoại</Link>
          <Link href="/reading" className="hover:text-[#ff5722] transition font-bold">Đọc hiểu</Link>
          
          {/* LINK BỘ THỦ VỀ /RADICALS NHƯ MÀY MUỐN */}
          <Link href="/radicals" className="hover:text-[#ff5722] transition font-bold">
            ✍️ Bộ thủ
          </Link>
          
          <Link href="/translate" className="hover:text-[#ff5722] transition font-bold">Dịch thuật</Link>
        </div>
      </div>

      {/* RIGHT: AUTH BUTTONS */}
      <div className="flex items-center gap-4">
        {!isSignedIn ? (
          <SignInButton mode="modal">
            <button className="px-5 py-2.5 bg-[#ff5722] text-white rounded-full text-sm font-bold hover:bg-orange-600 transition shadow-lg shadow-orange-100 active:scale-95">
              Đăng nhập
            </button>
          </SignInButton>
        ) : (
          <UserButton />
        )}
      </div>
    </nav>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="vi">
        <head>
          <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        </head>
        <body className="antialiased bg-white" style={{ fontFamily: "'Lexend', sans-serif" }}>
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}