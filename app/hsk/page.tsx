"use client";
import Link from "next/link";

export default function HskPage() {
  const hskLevels = [
    { level: "HSK 1", type: "CƠ BẢN", color: "bg-blue-500", desc: "Cấp độ cơ bản nhất, học 150 từ vựng thiết yếu.", time: "1-2 tháng", lessons: "15 bài" },
    { level: "HSK 2", type: "CƠ BẢN", color: "bg-cyan-500", desc: "Mở rộng từ vựng lên 300 từ, học ngữ pháp cơ bản.", time: "2-3 tháng", lessons: "15 bài" },
    { level: "HSK 3", type: "TRUNG BÌNH", color: "bg-orange-500", desc: "Nắm vững 600 từ vựng và ngữ pháp phức tạp hơn.", time: "3-4 tháng", lessons: "20 bài" },
    { level: "HSK 4", type: "TRUNG BÌNH", color: "bg-pink-500", desc: "Thành thạo 1200 từ vựng, có thể giao tiếp tự nhiên.", time: "4-6 tháng", lessons: "20 bài" },
    { level: "HSK 5", type: "NÂNG CAO", color: "bg-red-500", desc: "Trình độ cao với 2500 từ vựng và văn bản phức tạp.", time: "6-12 tháng", lessons: "36 bài" },
    { level: "HSK 6", type: "CHUYÊN GIA", color: "bg-purple-600", desc: "Cấp độ cao nhất với 5000+ từ vựng và văn chương.", time: "12+ tháng", lessons: "40 bài" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Menu nhỏ gọn cho trang con */}
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="text-2xl font-bold text-[#ff5722]">TàuEZ</Link>
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-[#ff5722]">Trang chủ</Link>
          <Link href="/hsk" className="text-[#ff5722]">GT Hán Ngữ</Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">汉语 Giáo trình Hán Ngữ</h1>
          <p className="text-gray-500">76 bài học - HSK 1-6 - Lộ trình hoàn chỉnh</p>
        </div>

        {/* Lưới 6 cấp độ HSK */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hskLevels.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
              <div className={`${item.color} p-6 text-white`}>
                <div className="flex justify-between items-start">
                  <h2 className="text-4xl font-black">{item.level}</h2>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold">{item.type}</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-gray-600 text-sm h-10">{item.desc}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                  <span>📚 {item.lessons}</span>
                  <span>⏱️ {item.time}</span>
                </div>
                <Link href="/hsk/hsk1" className="w-full py-3 rounded-xl border border-gray-200 font-bold text-gray-700 hover:bg-gray-50 transition">
                  Vào học
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}