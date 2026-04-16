"use client";
import Link from "next/link";
// Fix lại đường dẫn Navbar vì file này nằm ở app/reading/hsk1/page.tsx (đi lên 3 cấp)
// Fix lại đường dẫn data (đi lên 3 cấp)
import readingData from "../../data/hsk1-reading.json";

export default function Hsk1ReadingList() {
  return (
    <div className="min-h-screen bg-slate-50">

      <main className="max-w-5xl mx-auto py-12 px-6">
        <div className="flex items-center gap-3 mb-8">
            <Link href="/reading" className="text-slate-400 hover:text-[#ff5722] transition-colors font-bold">← Quay lại</Link>
            <h1 className="text-3xl font-black text-slate-800">Danh sách bài đọc HSK 1</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {readingData.map((lesson) => (
            /* Đảm bảo href dẫn thẳng vào thư mục [id] */
            <Link key={lesson.id} href={`/reading/hsk1/${lesson.id}`}>
              <div className="bg-white p-8 rounded-[2rem] border-2 border-transparent hover:border-[#ff5722] transition-all shadow-sm hover:shadow-xl cursor-pointer group h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-bold text-slate-800 group-hover:text-[#ff5722] transition-colors">
                        {lesson.title}
                    </h2>
                    <span className="bg-orange-50 text-[#ff5722] text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-widest">
                        HSK 1
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                    {lesson.desc}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                    <div className="text-[#ff5722] font-bold text-sm flex items-center gap-2">
                        Bắt đầu học 
                        <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                    {/* Hiển thị số câu cho người học biết độ dài */}
                    <span className="text-[10px] text-slate-300 font-bold uppercase">
                        {lesson.content.length} CÂU ĐỌC
                    </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}