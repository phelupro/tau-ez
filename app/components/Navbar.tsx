"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Danh sách các phần luyện tập để đổ ra menu
  const practiceItems = [
    { name: "Luyện dịch", href: "/practice/translation", icon: "📙", desc: "Dịch câu Trung - Việt" },
    { name: "Sắp xếp câu", href: "/practice/reorder", icon: "⇌", desc: "Sắp xếp từ thành câu đúng" },
    { name: "Sửa câu sai", href: "/practice/fix-error", icon: "ⓧ", desc: "Tìm và sửa lỗi ngữ pháp" },
    { name: "Điền từ", href: "/practice/fill-blank", icon: "Aa", desc: "Điền từ còn thiếu vào câu" },
  ];

  return (
    <nav className="bg-white border-b px-6 py-4 flex items-center gap-8 sticky top-0 z-[100] shadow-sm">
      <Link href="/" className="text-2xl font-bold text-[#ff5722]">TàuEZ</Link>

      <div className="flex items-center gap-6 text-[15px] font-medium text-gray-700">
        <Link href="/" className="hover:text-[#ff5722]">Trang chủ</Link>
        <Link href="/hsk" className="hover:text-[#ff5722]">GT hán ngữ</Link>

        {/* Dropdown Luyện tập */}
        <div
          className="relative py-2 cursor-pointer"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className={`flex items-center gap-1 hover:text-[#ff5722] ${isOpen ? 'text-[#ff5722]' : ''}`}>
            Luyện tập <span className="text-[10px] transition-transform duration-200" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
          </div>

          {/* Bảng hiện ra khi di chuột vào */}
          {isOpen && (
            <div className="absolute top-full left-0 w-72 bg-white shadow-2xl rounded-2xl border border-gray-100 p-2 mt-1 animate-in fade-in slide-in-from-top-2 duration-200">
              {practiceItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-4 p-3 hover:bg-orange-50 rounded-xl transition-all group"
                  onClick={() => setIsOpen(false)} // Đóng menu khi click
                >
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-xl group-hover:bg-white shadow-sm transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 group-hover:text-[#ff5722]">{item.name}</div>
                    <div className="text-[11px] text-gray-500">{item.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Dropdown Từ vựng */}
        <div className="relative group py-2">
          <button className="flex items-center gap-1 hover:text-[#ff5722] transition font-medium">
            Từ vựng <span className="text-[10px]">▼</span>
          </button>

          <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl border border-gray-100 p-2 hidden group-hover:block z-50 animate-in fade-in slide-in-from-top-1">
            <Link href="/vocabulary/hsk" className="flex items-center gap-4 p-3 hover:bg-orange-50 rounded-xl transition group">
              <div className="text-xl bg-red-50 w-10 h-10 flex items-center justify-center rounded-lg">📔</div>
              <div>
                <div className="text-sm font-bold">Từ vựng HSK</div>
                <div className="text-[10px] text-gray-500">Học theo bài và cấp độ</div>
              </div>
            </Link>

            <Link href="/vocabulary/topics" className="flex items-center gap-4 p-3 hover:bg-blue-50 rounded-xl transition group">
              <div className="text-xl bg-blue-100 w-10 h-10 flex items-center justify-center rounded-lg">📚</div>
              <div>
                <div className="text-sm font-bold">Từ vựng chủ đề</div>
                <div className="text-[10px] text-gray-500">Học từ vựng theo chủ đề giao tiếp</div>
              </div>
            </Link>
          </div>
        </div>
        <Link href="/conversation" className="hover:text-[#ff5722] flex items-center gap-1 transition">
          <span>💬</span> Hội thoại
        </Link>
        <Link href="/reading" className="hover:text-[#ff5722] flex items-center gap-1 transition">
          <span>📖</span> Đọc hiểu
        </Link>
        <Link href="/radicals" className="hover:text-[#ff5722] flex items-center gap-1 transition">
          <span>✍️</span> Bộ thủ
        </Link>
        <Link href="/translate" className="hover:text-[#ff5722] flex items-center gap-1 transition">
          <span>🌐</span> Dịch thuật
        </Link>
      </div>
    </nav>
  );
}