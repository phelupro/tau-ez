    "use client";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function HskVocabPage() {
  const hskLevels = [
    { id: 1, name: "HSK 1", type: "CƠ BẢN", color: "bg-green-600", desc: "Từ thiết yếu cho giao tiếp cơ bản hằng ngày", words: "150 từ", lessons: "15 bài" },
    { id: 2, name: "HSK 2", type: "CƠ BẢN", color: "bg-blue-600", desc: "Mở rộng vốn từ thông dụng trong cuộc sống", words: "300 từ", lessons: "15 bài" },
    { id: 3, name: "HSK 3", type: "TRUNG BÌNH", color: "bg-orange-600", desc: "Từ trung cấp giúp giao tiếp đa dạng hơn", words: "600 từ", lessons: "20 bài" },
    { id: 4, name: "HSK 4", type: "NÂNG CAO", color: "bg-red-500", desc: "Nâng cao từ vựng, giao tiếp tự nhiên hơn", words: "1200 từ", lessons: "25 bài" },
    { id: 5, name: "HSK 5", type: "CAO CẤP", color: "bg-red-600", desc: "Từ vựng văn hóa, kinh tế, xã hội phức tạp", words: "2500 từ", lessons: "30 bài" },
    { id: 6, name: "HSK 6", type: "CHUYÊN GIA", color: "bg-indigo-600", desc: "Thành thạo chuyên sâu như người bản ngữ", words: "5000+ từ", lessons: "35 bài" },
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f6] pb-20">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 pt-8 flex flex-col lg:flex-row gap-8">

        {/* Sidebar bên trái: Lộ trình & Chỉ số */}
        <div className="lg:w-1/4 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">📈</span>
              <h2 className="font-bold text-gray-800">Lộ trình học HSK</h2>
            </div>
            <p className="text-sm text-gray-500 mb-6">Từ sơ cấp đến nâng cao, học theo tốc độ riêng của bạn với giáo trình chuẩn quốc tế.</p>

            <div className="grid grid-cols-3 gap-2 text-center border-t pt-6">
              <div>
                <div className="text-xl font-bold">6</div>
                <div className="text-[10px] text-gray-400">CẤP ĐỘ</div>
              </div>
              <div>
                <div className="text-xl font-bold">11000+</div>
                <div className="text-[10px] text-gray-400">TỪ VỰNG</div>
              </div>
              <div>
                <div className="text-xl font-bold">120</div>
                <div className="text-[10px] text-gray-400">BÀI HỌC</div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button className="w-full text-left p-3 rounded-xl hover:bg-gray-50 flex items-center gap-3 text-sm font-medium transition">
                <span>🗂️</span> Flashcard ghi nhớ nhanh
              </button>
              <button className="w-full text-left p-3 rounded-xl hover:bg-gray-50 flex items-center gap-3 text-sm font-medium transition">
                <span>🎧</span> Nghe phát âm chuẩn
              </button>
              <button className="w-full text-left p-3 rounded-xl hover:bg-gray-50 flex items-center gap-3 text-sm font-medium transition">
                <span>📝</span> Bài kiểm tra từ vựng
              </button>
            </div>
          </div>

          <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
            <p className="text-xs text-orange-700 leading-relaxed">
              💡 <strong>Bắt đầu từ HSK 1</strong> nếu bạn chưa có nền tảng tiếng Trung.
            </p>
          </div>
        </div>

        {/* Danh sách thẻ HSK bên phải */}
        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hskLevels.map((level) => (
              <div key={level.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-all">
                <div className={`${level.color} px-6 py-3 flex justify-between items-center text-white`}>
                   <span className="text-xs font-bold opacity-80">{level.type}</span>
                   <span className="font-black text-xl">{level.name}</span>
                </div>
                <div className="p-5 flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 font-medium">{level.desc}</p>
                    <div className="flex gap-4 pt-2">
                      <span className="text-xs text-gray-400 flex items-center gap-1">📄 {level.words}</span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">📚 {level.lessons}</span>
                    </div>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#ff5722] group-hover:text-white transition-colors shadow-inner">
                    →
                  </button>
                </div>
              </div>
            ))}

            {/* Thẻ HSK 7-9 đặc biệt */}
            <div className="md:col-span-2 bg-[#8d6e63] rounded-2xl overflow-hidden shadow-sm group cursor-pointer border border-gray-100">
              <div className="px-6 py-3 flex justify-between items-center text-white border-b border-white/10">
                 <span className="text-xs font-bold opacity-80">TINH THÔNG</span>
                 <span className="font-black text-xl">HSK 7-9</span>
              </div>
              <div className="p-5 flex justify-between items-center text-white/90">
                <p className="text-sm italic">Từ vựng học thuật, chuyên ngành ở mức tinh thông</p>
                <div className="flex gap-6">
                   <span className="text-xs">📄 11000+ từ</span>
                   <span className="text-xs">📚 50 bài</span>
                   <span className="text-lg">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}