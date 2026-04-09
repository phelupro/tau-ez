"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function ReadingPage() {
  const readingLevels = [
    { id: 1, title: "HSK 1", type: "CƠ BẢN", color: "bg-emerald-500", icon: "📱", desc: "Đọc hiểu các câu đơn giản và đoạn văn ngắn về cuộc sống hằng ngày.", lessons: 15, completed: 12, tags: ["Đọc câu đơn", "Từ vựng cơ bản", "Thông tin cá nhân"] },
    { id: 2, title: "HSK 2", type: "CƠ BẢN", color: "bg-teal-500", icon: "📖", desc: "Đọc hiểu các đoạn văn ngắn về gia đình, bạn bè và hoạt động thường ngày.", lessons: 13, completed: 8, tags: ["Đọc đoạn văn", "Thời gian địa điểm", "Hoạt động hàng ngày"] },
    { id: 3, title: "HSK 3", type: "TRUNG BÌNH", color: "bg-blue-500", icon: "🎓", desc: "Đọc hiểu các bài văn về công việc, học tập và các chủ đề xã hội cơ bản.", lessons: 35, completed: 15, tags: ["Bài văn dài", "Ngữ pháp phức tạp", "Chủ đề xã hội"] },
    { id: 4, title: "HSK 4", type: "TRUNG BÌNH", color: "bg-sky-500", icon: "💡", desc: "Đọc hiểu các bài báo, thông tin đa dạng và nắm bắt được ý chính nhanh chóng.", lessons: 40, completed: 0, tags: ["Nghị luận", "Tin tức", "Logic đoạn văn"] },
    { id: 5, title: "HSK 5", type: "NÂNG CAO", color: "bg-rose-500", icon: "👑", desc: "Đọc hiểu các tác phẩm văn học, bài phê bình và các văn bản chuyên ngành.", lessons: 50, completed: 0, tags: ["Văn học", "Ẩn dụ", "Từ vựng chuyên sâu"] },
    { id: 6, title: "HSK 6", type: "CHUYÊN GIA", color: "bg-indigo-600", icon: "🏆", desc: "Thành thạo đọc hiểu mọi loại văn bản, hiểu rõ các sắc thái biểu đạt tinh tế.", lessons: 60, completed: 0, tags: ["Bác học", "Thành ngữ", "Phân tích phê bình"] },
  ];

  return (
    <div className="min-h-screen bg-[#f1f5f9]">
      <Navbar />
      
      {/* Top Banner - Dark Greenish Theme as per image */}
      <div className="bg-[#3d5a40] py-12 px-6 text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="text-4xl">阅读</div>
            <div>
              <h1 className="text-2xl font-black">Đọc Hiểu HSK</h1>
              <p className="text-sm opacity-80">69 bài đọc - HSK 1-6 - Luyện kỹ năng đọc hiểu</p>
            </div>
          </div>
          <div className="flex gap-10 text-center">
            <div>
              <div className="text-3xl font-black text-orange-400">69</div>
              <div className="text-[10px] uppercase font-bold opacity-70">Bài đọc</div>
            </div>
            <div>
              <div className="text-3xl font-black text-orange-400">35</div>
              <div className="text-[10px] uppercase font-bold opacity-70">Hoàn thành</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {readingLevels.map((lvl) => (
            <div key={lvl.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100 flex flex-col">
              {/* Card Header with Level Color */}
              <div className={`${lvl.color} p-5 text-white flex justify-between items-start`}>
                <div>
                  <h2 className="text-2xl font-black leading-none">{lvl.title}</h2>
                  <span className="text-[10px] font-bold opacity-80 tracking-widest">{lvl.type}</span>
                </div>
                <span className="text-2xl opacity-40 group-hover:scale-125 transition-transform">{lvl.icon}</span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow">
                <p className="text-sm text-gray-600 leading-relaxed mb-6 h-12 overflow-hidden">
                  {lvl.desc}
                </p>

                <div className="flex items-center gap-3 text-xs text-gray-400 mb-6 font-medium">
                  <span className="flex items-center gap-1">📑 {lvl.lessons} bài</span>
                  <span className="flex items-center gap-1 text-emerald-600">✅ {lvl.completed} xong</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {lvl.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-50 border border-gray-100 text-[9px] font-bold text-gray-500 rounded-lg group-hover:bg-white transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6">
                <button className="w-full py-3 bg-gray-50 text-gray-700 rounded-xl text-xs font-bold hover:bg-[#ff5722] hover:text-white transition-all flex items-center justify-center gap-2">
                  {lvl.completed > 0 ? "Tiếp tục" : "Bắt đầu học"} 
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}