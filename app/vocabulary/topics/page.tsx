"use client";
import Link from "next/link";


export default function TopicVocabPage() {
  // Danh sách các chủ đề mẫu dựa trên ảnh mày gửi
  const topics = [
    { id: 1, title: "Nghề nghiệp", sub: "Chinese vocabulary about professions", lessons: 16, words: 265, color: "border-t-blue-500", icon: "💼", bgColor: "bg-blue-50" },
    { id: 2, title: "Quần áo", sub: "Chinese vocabulary about clothes", lessons: 10, words: 161, color: "border-t-green-500", icon: "👕", bgColor: "bg-green-50" },
    { id: 3, title: "Con vật", sub: "Chinese vocabulary about animals", lessons: 7, words: 111, color: "border-t-orange-500", icon: "🦁", bgColor: "bg-orange-50" },
    { id: 4, title: "Rau củ quả", sub: "Chinese vocabulary about vegetables and fruits", lessons: 5, words: 107, color: "border-t-red-500", icon: "🍎", bgColor: "bg-red-50" },
    { id: 5, title: "Cơ thể người", sub: "Chinese vocabulary about the human body", lessons: 7, words: 104, color: "border-t-indigo-500", icon: "🧠", bgColor: "bg-indigo-50" },
    { id: 6, title: "Giao thông", sub: "Chinese vocabulary about traffic", lessons: 7, words: 164, color: "border-t-pink-500", icon: "🚌", bgColor: "bg-pink-50" },
    { id: 7, title: "Đồ ăn", sub: "Chinese vocabulary about food", lessons: 3, words: 40, color: "border-t-cyan-500", icon: "🍲", bgColor: "bg-cyan-50" },
    { id: 8, title: "Tết", sub: "Chinese vocabulary about Tet", lessons: 4, words: 50, color: "border-t-orange-600", icon: "🧨", bgColor: "bg-orange-100" },
    { id: 9, title: "Trường học", sub: "Chinese vocabulary about school", lessons: 5, words: 72, color: "border-t-blue-700", icon: "🏫", bgColor: "bg-blue-100" },
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f6] pb-20">
    
      
      {/* Banner Tiêu đề */}
      <div className="bg-[#1e3a8a] py-12 text-center text-white px-4">
        <h1 className="text-3xl font-bold mb-3">Từ vựng tiếng Trung theo chủ đề</h1>
        <p className="text-blue-100 max-w-2xl mx-auto">Hàng ngàn từ vựng phân loại khoa học — học nhanh, nhớ lâu, áp dụng ngay.</p>
        <div className="flex justify-center gap-8 mt-6 text-sm font-medium">
          <div><span className="text-orange-400">62</span> Chủ đề</div>
          <div><span className="text-orange-400">1080</span> Từ vựng</div>
          <div><span className="text-orange-400">64</span> Bài học</div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 -mt-8">
        {/* Grid danh sách chủ đề */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <div key={topic.id} className={`bg-white rounded-xl shadow-sm border-t-4 ${topic.color} p-6 hover:shadow-lg transition-all group relative overflow-hidden`}>
              <div className="flex items-start justify-between mb-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">Từ vựng {topic.title}</h3>
                  <p className="text-xs text-gray-400 italic leading-tight">{topic.sub}</p>
                </div>
                <div className={`w-12 h-12 ${topic.bgColor} rounded-full flex items-center justify-center text-2xl`}>
                  {topic.icon}
                </div>
              </div>

              <div className="flex gap-4 text-[11px] text-gray-500 font-medium mb-6">
                <span className="flex items-center gap-1">📚 {topic.lessons} bài học</span>
                <span className="flex items-center gap-1">📄 {topic.words} từ</span>
              </div>

              <Link href={`/vocabulary/topics/${topic.id}`} className="block w-full text-center py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-bold hover:bg-[#ff5722] hover:text-white transition-all shadow-sm">
                Khám phá →
              </Link>
            </div>
          ))}
        </div>

        {/* Phân trang (Pagination) đơn giản giống ảnh mẫu */}
        <div className="flex justify-center items-center gap-2 mt-12">
           <button className="w-8 h-8 flex items-center justify-center rounded border bg-white text-gray-400">{"<"}</button>
           <button className="w-8 h-8 flex items-center justify-center rounded border bg-blue-500 text-white font-bold">1</button>
           <button className="w-8 h-8 flex items-center justify-center rounded border bg-white text-gray-600">2</button>
           <button className="w-8 h-8 flex items-center justify-center rounded border bg-white text-gray-600">3</button>
           <span className="px-2">...</span>
           <button className="w-8 h-8 flex items-center justify-center rounded border bg-white text-gray-600">7</button>
           <button className="w-8 h-8 flex items-center justify-center rounded border bg-white text-gray-400">{">"}</button>
        </div>

        {/* Banner kêu gọi hành động phía dưới */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl p-10 text-center text-white shadow-xl">
          <h2 className="text-2xl font-black mb-2">Bắt đầu hành trình của bạn</h2>
          <p className="text-blue-50 text-sm mb-8 opacity-90">Mỗi ngày học 5 từ mới, sau 1 năm bạn sẽ biết hơn 1800 từ!</p>
          <div className="flex justify-center gap-12">
            <div>
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-[10px] uppercase opacity-75">Học viên</div>
            </div>
            <div>
              <div className="text-2xl font-bold">98%</div>
              <div className="text-[10px] uppercase opacity-75">Hài lòng</div>
            </div>
            <div>
              <div className="text-2xl font-bold">62+</div>
              <div className="text-[10px] uppercase opacity-75">Chủ đề</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}