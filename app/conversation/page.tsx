"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function ConversationPage() {
  const levels = [
    { id: 1, title: "Giao tiếp cơ bản", level: "HSK 1", diff: "Dễ", color: "border-t-green-500", btnColor: "bg-green-500", tags: ["Chào hỏi", "Giới thiệu", "Gia đình", "Thời gian"], desc: "Học các câu hội thoại đơn giản trong đời sống hằng ngày." },
    { id: 2, title: "Hội thoại thông dụng", level: "HSK 2", diff: "Dễ - TB", color: "border-t-blue-500", btnColor: "bg-blue-500", tags: ["Mua sắm", "Nhà hàng", "Giao thông", "Thời tiết"], desc: "Nâng cao khả năng giao tiếp trong các tình huống phổ biến." },
    { id: 3, title: "Giao tiếp nâng cao", level: "HSK 3", diff: "Trung bình", color: "border-t-orange-500", btnColor: "bg-orange-500", tags: ["Công việc", "Sở thích", "Du lịch", "Sức khỏe"], desc: "Thảo luận về các chủ đề phức tạp hơn trong cuộc sống." },
    { id: 4, title: "Hội thoại chuyên sâu", level: "HSK 4", diff: "Khó", color: "border-t-red-500", btnColor: "bg-red-500", tags: ["Giáo dục", "Văn hóa", "Công nghệ", "Môi trường"], desc: "Thể hiện ý kiến cá nhân về các vấn đề xã hội, văn hóa." },
    { id: 5, title: "Thảo luận chuyên nghiệp", level: "HSK 5", diff: "Rất khó", color: "border-t-red-700", btnColor: "bg-red-700", tags: ["Kinh tế", "Chính trị", "Khoa học", "Lịch sử"], desc: "Tham gia các cuộc thảo luận chuyên môn và học thuật." },
    { id: 6, title: "Giao tiếp thành thạo", level: "HSK 6", diff: "Chuyên gia", color: "border-t-indigo-700", btnColor: "bg-indigo-700", tags: ["Văn học", "Triết học", "Nghệ thuật", "Thành ngữ"], desc: "Sử dụng tiếng Trung một cách tự nhiên như người bản ngữ." },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-20">
      <Navbar />
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-blue-100 rounded-2xl text-2xl flex items-center justify-center">💬</div>
          <div>
            <h1 className="text-2xl font-black text-gray-800">Luyện tập hội thoại</h1>
            <p className="text-sm text-gray-500">Nâng cao kỹ năng giao tiếp tiếng Trung qua các bài hội thoại thực tế theo từng cấp độ HSK.</p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="flex gap-6 mb-10 overflow-x-auto pb-2">
          <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 text-xs font-bold text-gray-600 flex items-center gap-2 whitespace-nowrap">
            📚 <span className="text-blue-600">678</span> bài học
          </div>
          <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 text-xs font-bold text-gray-600 flex items-center gap-2 whitespace-nowrap">
            📈 <span className="text-green-600">6</span> cấp độ
          </div>
          <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 text-xs font-bold text-gray-600 flex items-center gap-2 whitespace-nowrap">
            🗣️ <span className="text-orange-600">5000+</span> từ vựng
          </div>
        </div>

        {/* Grid Levels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {levels.map((item) => (
            <div key={item.id} className={`bg-white rounded-2xl p-6 shadow-sm border-t-4 ${item.color} flex flex-col justify-between hover:shadow-md transition-shadow`}>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.level} • {item.diff}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">{item.desc}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-50 text-[10px] font-medium text-gray-500 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button className={`w-full py-3 ${item.btnColor} text-white rounded-xl text-sm font-bold shadow-lg shadow-gray-200 hover:opacity-90 transition-opacity`}>
                Bắt đầu học →
              </button>
            </div>
          ))}
        </div>

        {/* Lộ trình học tập Section */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-50">
          <h2 className="text-lg font-bold text-gray-800 mb-8 flex items-center gap-2">
            🚀 Lộ trình học tập
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map(step => (
              <div key={step} className="flex items-center gap-4 p-4 rounded-2xl border border-gray-50 bg-gray-50/50">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-blue-600 border border-blue-100">
                  {step}
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-700">HSK {step}</div>
                  <div className="text-[10px] text-gray-400">{step < 3 ? '1-2 tháng' : '4-6 tháng'}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}