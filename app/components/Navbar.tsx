"use client";

import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { isSignedIn } = useAuth();
  const pathname = usePathname(); 
  const [isLuyenTapOpen, setIsLuyenTapOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const practiceItems = [
    { name: "Luyện dịch", href: "/practice/translation", icon: "📙", desc: "Dịch câu Trung - Việt" },
    { name: "Sắp xếp câu", href: "/practice/reorder", icon: "⇌", desc: "Sắp xếp từ thành câu đúng" },
    { name: "Sửa câu sai", href: "/practice/fix-error", icon: "ⓧ", desc: "Tìm và sửa lỗi ngữ pháp" },
    { name: "Điền từ", href: "/practice/fill-blank", icon: "Aa", desc: "Điền từ còn thiếu vào câu" },
  ];

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b px-6 py-3 sticky top-0 z-[100] shadow-sm">
      <div className="flex items-center justify-between max-w-[1400px] mx-auto">
        <div className="flex items-center gap-10">
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-9 h-9 bg-[#ff5722] rounded-xl flex items-center justify-center shadow-lg rotate-3 group-hover:rotate-0 transition-transform">
              <span className="text-white font-black text-xl">Z</span>
            </div>
            <span className="text-2xl font-black text-[#ff5722] tracking-tighter">TàuEZ</span>
          </Link>

          <div className="hidden lg:flex items-center gap-6 text-[14px] font-bold text-gray-600">
            <Link href="/" className={`hover:text-[#ff5722] transition ${pathname === '/' ? 'text-[#ff5722]' : ''}`}>Trang chủ</Link>
            <Link href="/hsk" className={`hover:text-[#ff5722] transition ${isActive('/hsk') ? 'text-[#ff5722]' : ''}`}>GT hán ngữ</Link>

            <div
              className="relative py-2 cursor-pointer"
              onMouseEnter={() => setIsLuyenTapOpen(true)}
              onMouseLeave={() => setIsLuyenTapOpen(false)}
              onClick={() => setIsLuyenTapOpen(!isLuyenTapOpen)}
            >
              <div className={`flex items-center gap-1 transition-colors ${isLuyenTapOpen || pathname.startsWith('/practice') ? 'text-[#ff5722]' : 'hover:text-[#ff5722]'}`}>
                Luyện tập <span className="text-[10px] transition-transform duration-300" style={{ transform: isLuyenTapOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
              </div>
              
              {isLuyenTapOpen && (
                <div 
                  className="absolute top-full left-0 w-72 bg-white shadow-2xl rounded-2xl border border-orange-50 p-2 mt-1 animate-in fade-in slide-in-from-top-2 duration-200 z-[110]"
                  onClick={(e) => e.stopPropagation()}
                >
                  {practiceItems.map((item) => (
                    <Link 
                      key={item.href} 
                      href={item.href} 
                      onClick={() => setIsLuyenTapOpen(false)}
                      className="flex items-center gap-4 p-3 hover:bg-orange-50 rounded-xl transition-all group"
                    >
                      <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-xl group-hover:bg-white shadow-sm">{item.icon}</div>
                      <div>
                        <div className="text-sm font-bold text-gray-900 group-hover:text-[#ff5722]">{item.name}</div>
                        <div className="text-[11px] text-gray-400">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative group py-2">
              <button className={`flex items-center gap-1 hover:text-[#ff5722] transition group-hover:text-[#ff5722] ${isActive('/vocabulary') ? 'text-[#ff5722]' : ''}`}>
                Từ vựng <span className="text-[10px]">▼</span>
              </button>
              <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl border border-orange-50 p-2 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-1">
                <Link href="/vocabulary/hsk" className="flex items-center gap-4 p-3 hover:bg-orange-50 rounded-xl transition group">
                  <div className="text-xl bg-orange-50 w-10 h-10 flex items-center justify-center rounded-lg">📔</div>
                  <div><div className="text-sm font-bold text-gray-900 group-hover:text-[#ff5722]">Từ vựng HSK</div><div className="text-[10px] text-gray-400">Học theo cấp độ</div></div>
                </Link>
                <Link href="/vocabulary/topics" className="flex items-center gap-4 p-3 hover:bg-orange-50 rounded-xl transition group">
                  <div className="text-xl bg-orange-50 w-10 h-10 flex items-center justify-center rounded-lg">📚</div>
                  <div><div className="text-sm font-bold text-gray-900 group-hover:text-[#ff5722]">Từ vựng chủ đề</div><div className="text-[10px] text-gray-400">Giao tiếp hằng ngày</div></div>
                </Link>
              </div>
            </div>

            <Link href="/conversation" className={`hover:text-[#ff5722] transition ${isActive('/conversation') ? 'text-[#ff5722]' : ''}`}>Hội thoại</Link>
            <Link href="/radicals" className={`hover:text-[#ff5722] transition ${isActive('/radicals') ? 'text-[#ff5722]' : ''}`}>✍️ Bộ thủ</Link>
            <Link href="/reading" className={`hover:text-[#ff5722] transition ${isActive('/reading') ? 'text-[#ff5722]' : ''}`}>Đọc hiểu</Link>
            <Link href="/translate" className={`hover:text-[#ff5722] transition ${isActive('/translate') ? 'text-[#ff5722]' : ''}`}>Dịch thuật</Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {!isSignedIn ? (
            <SignInButton mode="modal">
              <button className="px-5 py-2.5 bg-[#ff5722] text-white rounded-full text-sm font-bold hover:bg-orange-600 transition active:scale-95 shadow-lg shadow-orange-100">
                Đăng nhập
              </button>
            </SignInButton>
          ) : (
            <UserButton />
          )}

          <button 
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 text-gray-600 active:bg-orange-50 active:text-[#ff5722] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <span className="text-xl font-bold">✕</span> : <span className="text-xl">☰</span>}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b shadow-xl p-6 flex flex-col gap-4 font-bold text-gray-600 animate-in slide-in-from-top duration-300">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-gray-50">Trang chủ</Link>
          <Link href="/reading" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-gray-50">Đọc hiểu</Link>
          <Link href="/translate" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-gray-50">Dịch thuật</Link>
          <Link href="/vocabulary/hsk" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-gray-50">Từ vựng HSK</Link>
          <Link href="/radicals" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-gray-50">✍️ Bộ thủ</Link>
          
          <div className="pt-2 text-[#ff5722] text-sm uppercase">Luyện tập</div>
          {practiceItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="pl-4 py-1 text-sm text-gray-500">
              {item.icon} {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
} 