import json
from pathlib import Path

radicals = [
    ("一", "yī", "Nhất", "Số một", 1),
    ("丨", "gǔn", "Cổn", "Nét sổ", 1),
    ("丶", "zhǔ", "Chủ", "Điểm chấm", 1),
    ("丿", "piě", "Phiệt", "Nét phẩy", 1),
    ("乙", "yǐ", "Ất", "Nét móc cong", 1),
    ("亅", "jué", "Quyết", "Nét móc thẳng", 1),
    ("二", "èr", "Nhị", "Số hai", 2),
    ("亠", "tóu", "Đầu", "Nắp đầu", 2),
    ("人", "rén", "Nhân", "Người", 2),
    ("儿", "ér", "Nhi", "Chân người", 2),
    ("入", "rù", "Nhập", "Vào", 2),
    ("八", "bā", "Bát", "Đôi chia tách", 2),
    ("冂", "jiōng", "Quynh", "Vùng biên", 2),
    ("冖", "mì", "Mịch", "Che phủ", 2),
    ("冫", "bīng", "Băng", "Nước đá", 2),
    ("几", "jī", "Kỷ", "Cái bàn nhỏ", 2),
    ("凵", "qiǎn", "Khảm", "Hộp mở", 2),
    ("刀", "dāo", "Đao", "Dao", 2),
    ("力", "lì", "Lực", "Sức mạnh", 2),
    ("勹", "bāo", "Bào", "Bao bọc", 2),
    ("匕", "bǐ", "Chủy", "Thìa/dao nhỏ", 2),
    ("匚", "fāng", "Phương", "Hộp chữ nhật", 2),
    ("匸", "xì", "Hệ", "Che giấu", 2),
    ("十", "shí", "Thập", "Số mười", 2),
    ("卜", "bǔ", "Bốc", "Bói toán", 2),
    ("卩", "jié", "Tiết", "Dấu niêm phong", 2),
    ("厂", "chǎn", "Hán", "Vách đá", 2),
    ("厶", "sī", "Khư", "Riêng tư", 2),
    ("又", "yòu", "Hựu", "Lại", 2),
    ("口", "kǒu", "Khẩu", "Miệng", 3),
    ("囗", "wéi", "Vi", "Khung bao", 3),
    ("土", "tǔ", "Thổ", "Đất", 3),
    ("士", "shì", "Sĩ", "Học giả", 3),
    ("夂", "zhī", "Truy", "Bước chân", 3),
    ("夊", "suī", "Thôi", "Bước chậm", 3),
    ("夕", "xī", "Tịch", "Buổi tối", 3),
    ("大", "dà", "Đại", "To lớn", 3),
    ("女", "nǚ", "Nữ", "Nữ giới", 3),
    ("子", "zǐ", "Tử", "Con", 3),
    ("宀", "mián", "Miên", "Mái nhà", 3),
    ("寸", "cùn", "Thốn", "Đơn vị đo", 3),
    ("小", "xiǎo", "Tiểu", "Nhỏ", 3),
    ("尢", "wāng", "Uông", "Yếu đuối", 3),
    ("尸", "shī", "Thi", "Xác", 3),
    ("屮", "chè", "Triệt", "Mầm cây", 3),
    ("山", "shān", "Sơn", "Núi", 3),
    ("巛", "chuān", "Xuyên", "Dòng nước", 3),
    ("工", "gōng", "Công", "Công việc", 3),
    ("己", "jǐ", "Kỷ", "Bản thân", 3),
    ("巾", "jīn", "Cân", "Khăn", 3),
    ("干", "gān", "Cán", "Thân cây", 3),
    ("幺", "yāo", "Yêu", "Nhỏ bé", 3),
    ("广", "guǎng", "Quảng", "Mái nhà", 3),
    ("廴", "yǐn", "Dẫn", "Bước dài", 3),
    ("廾", "gǒng", "Củng", "Hai tay nâng", 3),
    ("弋", "yì", "Dặc", "Bắn tên", 3),
    ("弓", "gōng", "Cung", "Cây cung", 3),
    ("彐", "jì", "Kê", "Đầu lợn", 3),
    ("彡", "shān", "Sam", "Lông", 3),
    ("彳", "chì", "Xích", "Bước chân trái", 3),
    ("心", "xīn", "Tâm", "Trái tim", 4),
    ("戈", "gē", "Qua", "Mâu", 4),
    ("户", "hù", "Hộ", "Cửa", 4),
    ("手", "shǒu", "Thủ", "Bàn tay", 4),
    ("支", "zhī", "Chi", "Cành", 4),
    ("攴", "pū", "Phộc", "Đánh", 4),
    ("文", "wén", "Văn", "Văn chương", 4),
    ("斗", "dǒu", "Đẩu", "Cái đấu", 4),
    ("斤", "jīn", "Cân", "Rìu", 4),
    ("方", "fāng", "Phương", "Hướng", 4),
    ("无", "wú", "Vô", "Không", 4),
    ("日", "rì", "Nhật", "Mặt trời", 4),
    ("曰", "yuē", "Viết", "Nói", 4),
    ("月", "yuè", "Nguyệt", "Mặt trăng", 4),
    ("木", "mù", "Mộc", "Cây", 4),
    ("欠", "qiàn", "Khiếm", "Thiếu hụt", 4),
    ("止", "zhǐ", "Chỉ", "Dừng lại", 4),
    ("歹", "dǎi", "Đẫy", "Xấu, chết", 4),
    ("殳", "shū", "Thù", "Lao dài", 4),
    ("母", "mǔ", "Mẫu", "Mẹ", 4),
    ("比", "bǐ", "Tỷ", "So sánh", 4),
    ("毛", "máo", "Mao", "Lông", 4),
    ("氏", "shì", "Thị", "Họ", 4),
    ("气", "qì", "Khí", "Khí", 4),
    ("水", "shuǐ", "Thủy", "Nước", 4),
    ("火", "huǒ", "Hỏa", "Lửa", 4),
    ("爪", "zhǎo", "Trảo", "Móng vuốt", 4),
    ("父", "fù", "Phụ", "Cha", 4),
    ("爻", "yáo", "Hào", "Hào quẻ", 4),
    ("爿", "qiáng", "Tường", "Mảnh gỗ", 4),
    ("片", "piàn", "Phiến", "Mảnh", 4),
    ("牙", "yá", "Nha", "Răng", 4),
    ("牛", "niú", "Ngưu", "Trâu bò", 4),
    ("犬", "quǎn", "Khuyển", "Chó", 4),
    ("玄", "xuán", "Huyền", "Huyền bí", 5),
    ("玉", "yù", "Ngọc", "Ngọc", 5),
    ("瓜", "guā", "Qua", "Quả", 5),
    ("瓦", "wǎ", "Ngõa", "Ngói", 5),
    ("甘", "gān", "Cam", "Ngọt", 5),
    ("生", "shēng", "Sinh", "Sống", 5),
    ("用", "yòng", "Dụng", "Dùng", 5),
    ("田", "tián", "Điền", "Ruộng", 5),
    ("疋", "pǐ", "Thất", "Cuộn vải", 5),
    ("疒", "nè", "Nạch", "Bệnh", 5),
    ("癶", "bō", "Bát", "Bước chân", 5),
    ("白", "bái", "Bạch", "Trắng", 5),
    ("皮", "pí", "Bì", "Da", 5),
    ("皿", "mǐn", "Mãnh", "Bát đĩa", 5),
    ("目", "mù", "Mục", "Mắt", 5),
    ("矛", "máo", "Mâu", "Giáo", 5),
    ("矢", "shǐ", "Thỉ", "Mũi tên", 5),
    ("石", "shí", "Thạch", "Đá", 5),
    ("示", "shì", "Thị", "Bàn thờ", 5),
    ("禸", "róu", "Nữu", "Dấu chân", 5),
    ("禾", "hé", "Hòa", "Lúa", 5),
    ("穴", "xué", "Huyệt", "Hang", 5),
    ("立", "lì", "Lập", "Đứng", 5),
    ("竹", "zhú", "Trúc", "Tre", 6),
    ("米", "mǐ", "Mễ", "Gạo", 6),
    ("纟", "sī", "Mịch", "Sợi tơ", 6),
    ("缶", "fǒu", "Phẫu", "Bình đất", 6),
    ("网", "wǎng", "Võng", "Lưới", 6),
    ("羊", "yáng", "Dương", "Dê", 6),
    ("羽", "yǔ", "Vũ", "Lông vũ", 6),
    ("老", "lǎo", "Lão", "Già", 6),
    ("而", "ér", "Nhi", "Nhưng", 6),
    ("耒", "lěi", "Lỗ", "Cày", 6),
    ("耳", "ěr", "Nhĩ", "Tai", 6),
    ("聿", "yù", "Duật", "Bút viết", 6),
    ("肉", "ròu", "Nhục", "Thịt", 6),
    ("臣", "chén", "Thần", "Quan lại", 6),
    ("自", "zì", "Tự", "Tự thân", 6),
    ("至", "zhì", "Chí", "Đến", 6),
    ("臼", "jiù", "Cữu", "Cối giã", 6),
    ("舌", "shé", "Thiệt", "Lưỡi", 6),
    ("舛", "chuǎn", "Suyễn", "Lỗi trái phải", 6),
    ("舟", "zhōu", "Chu", "Thuyền", 6),
    ("艮", "gèn", "Cấn", "Dừng lại", 6),
    ("色", "sè", "Sắc", "Màu sắc", 6),
    ("艸", "cǎo", "Thảo", "Cỏ", 6),
    ("虍", "hū", "Hổ", "Đầu cọp", 6),
    ("虫", "chóng", "Trùng", "Sâu bọ", 6),
    ("血", "xuè", "Huyết", "Máu", 6),
    ("行", "xíng", "Hành", "Đi lại", 6),
    ("衣", "yī", "Y", "Quần áo", 6),
    ("襾", "yà", "Á", "Phủ lên", 6),
    ("見", "jiàn", "Kiến", "Nhìn thấy", 7),
    ("角", "jiǎo", "Giác", "Sừng", 7),
    ("言", "yán", "Ngôn", "Lời nói", 7),
    ("谷", "gǔ", "Cốc", "Thung lũng", 7),
    ("豆", "dòu", "Đậu", "Đậu", 7),
    ("豕", "shǐ", "Thỉ", "Heo", 7),
    ("豸", "zhì", "Trải", "Động vật có râu", 7),
    ("貝", "bèi", "Bối", "Vật quý", 7),
    ("赤", "chì", "Xích", "Đỏ", 7),
    ("走", "zǒu", "Tẩu", "Chạy", 7),
    ("足", "zú", "Túc", "Chân", 7),
    ("身", "shēn", "Thân", "Cơ thể", 7),
    ("車", "chē", "Xa", "Xe", 7),
    ("辛", "xīn", "Tân", "Cay", 7),
    ("辰", "chén", "Thần", "Thời gian", 7),
    ("辵", "chuò", "Sách", "Bước đi", 7),
    ("邑", "yì", "Ấp", "Thành thị", 7),
    ("酉", "yǒu", "Dậu", "Nho", 7),
    ("釆", "biàn", "Biện", "Phân biệt", 7),
    ("里", "lǐ", "Lý", "Làng xóm", 7),
    ("金", "jīn", "Kim", "Kim loại", 8),
    ("長", "cháng", "Trường", "Dài", 8),
    ("門", "mén", "Môn", "Cửa", 8),
    ("阜", "fù", "Phụ", "Đồi", 8),
    ("隶", "dài", "Đãi", "Nô lệ", 8),
    ("隹", "zhuī", "Chuy", "Chim nhỏ", 8),
    ("雨", "yǔ", "Vũ", "Mưa", 8),
    ("青", "qīng", "Thanh", "Xanh", 8),
    ("非", "fēi", "Phi", "Sai", 8),
    ("面", "miàn", "Diện", "Mặt", 8),
    ("革", "gé", "Cách", "Da thú", 9),
    ("韋", "wéi", "Vi", "Da mềm", 9),
    ("韭", "jiǔ", "Cửu", "Hành lá", 9),
    ("音", "yīn", "Âm", "Âm thanh", 9),
    ("頁", "yè", "Hiệt", "Trang giấy", 9),
    ("風", "fēng", "Phong", "Gió", 9),
    ("飛", "fēi", "Phi", "Bay", 9),
    ("食", "shí", "Thực", "Ăn", 9),
    ("首", "shǒu", "Thủ", "Đầu", 9),
    ("香", "xiāng", "Hương", "Mùi thơm", 9),
    ("馬", "mǎ", "Mã", "Ngựa", 10),
    ("骨", "gǔ", "Cốt", "Xương", 10),
    ("高", "gāo", "Cao", "Cao", 10),
    ("髟", "biāo", "Tiêu", "Tóc dài", 10),
    ("鬥", "dòu", "Đấu", "Đấu tranh", 10),
    ("鬯", "chàng", "Sưởng", "Rượu lễ", 10),
    ("鬲", "gé", "Cách", "Nồi đất", 10),
    ("鬼", "guǐ", "Quỷ", "Ma quỷ", 10),
    ("魚", "yú", "Ngư", "Cá", 11),
    ("鳥", "niǎo", "Điểu", "Chim", 11),
    ("鹿", "lù", "Lộc", "Hươu", 11),
    ("麦", "mài", "Mạch", "Lúa mạch", 11),
    ("麻", "má", "Ma", "Hạt gai", 11),
    ("黃", "huáng", "Hoàng", "Vàng", 12),
    ("黍", "shǔ", "Thử", "Lúa mì", 12),
    ("黑", "hēi", "Hắc", "Đen", 12),
    ("黹", "zhǐ", "Chỉ", "Thêu thùa", 13),
    ("黽", "mǐn", "Mãnh", "Ếch", 13),
    ("鼎", "dǐng", "Đỉnh", "Nồi ba chân", 13),
    ("鼓", "gǔ", "Cổ", "Trống", 13),
    ("鼠", "shǔ", "Thử", "Chuột", 13),
    ("鼻", "bí", "Tỵ", "Mũi", 14),
    ("齊", "qí", "Tề", "Ngăn nắp", 14),
    ("齒", "chǐ", "Xỉ", "Răng", 15),
    ("龍", "lóng", "Long", "Rồng", 16),
    ("龜", "guī", "Quy", "Rùa", 16),
    ("龠", "yuè", "Duyệt", "Sáo", 17),
  ]

  for i, entry in enumerate(radicals, 1):
    char, pinyin, viet, meaning, strokes = entry
    radicals[i-1] = {
        "char": char,
        "pinyin": pinyin,
        "viet": viet,
        "meaning": meaning,
        "strokes": strokes,
        "origin": f"Hình dáng và ý nghĩa cơ bản của bộ thủ {viet}.",
        "variants": [char],
        "examples": [
            {"word": char, "pinyin": pinyin, "meaning": meaning}
        ],
    }

output = []
output.append("\"use client\";\nimport { useState } from \"react\";\n\nexport default function RadicalsPage() {\n  const [selectedRadical, setSelectedRadical] = useState<null | {\n    char: string;\n    pinyin: string;\n    viet: string;\n    meaning: string;\n    strokes: number;\n    origin: string;\n    variants: string[];\n    examples: { word: string; pinyin: string; meaning: string }[];\n  }>(null);\n  const [activeTab, setActiveTab] = useState(0); // 0 là tất cả, còn lại là số nét\n\n  const fullRadicalsData = [\n")

for entry in radicals:
    output.append("    {\n")
    output.append(f"      char: \"{entry['char']}\", pinyin: \"{entry['pinyin']}\", viet: \"{entry['viet']}\", meaning: \"{entry['meaning']}\", strokes: {entry['strokes']}, origin: \"{entry['origin']}\", variants: [\"{entry['char']}\"], examples: [{{ word: \"{entry['char']}\", pinyin: \"{entry['pinyin']}\", meaning: \"{entry['meaning']}\" }}] }},\n")

output.append("];

  const filteredRadicals = activeTab === 0
    ? fullRadicalsData
    : fullRadicalsData.filter((r) => r.strokes === activeTab);

  const strokeTabs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="min-h-screen bg-[#fcfcfc] pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#b91c1c] to-[#7f1d1d] py-16 px-6 text-white text-center shadow-lg">
        <h1 className="text-4xl font-black mb-3 tracking-tighter">214 BỘ THỦ TIẾNG TRUNG</h1>
        <p className="opacity-90 font-medium text-red-100">Học gốc rễ để thông thạo vạn chữ Hán</p>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Thanh lọc số nét (Tabs) */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 sticky top-20 z-40 bg-[#fcfcfc]/80 backdrop-blur-md py-4">
          <button 
            onClick={() => setActiveTab(0)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${activeTab === 0 ? 'bg-red-600 text-white shadow-lg' : 'bg-white border text-gray-500 hover:border-red-300'}`}
          >
            Tất cả
          </button>
          {strokeTabs.slice(1).map((n) => (
            <button 
              key={n}
              onClick={() => setActiveTab(n)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${activeTab === n ? 'bg-red-600 text-white shadow-lg' : 'bg-white border text-gray-500 hover:border-red-300'}`}
            >
              {n} nét
            </button>
          ))}
        </div>

        {/* Danh sách hiển thị */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {filteredRadicals.map((item, index) => (
            <div 
              key={index}
              onClick={() => setSelectedRadical(item)}
              className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer text-center group"
            >
              <div className="text-5xl font-serif text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
                {item.char}
              </div>
              <div className="text-xs font-black text-red-600 uppercase tracking-widest">{item.viet}</div>
              <div className="text-[10px] text-gray-400 mt-1 uppercase">{item.pinyin}</div>
            </div>
          ))}
        </div>

        {/* Modal chi tiết (giống như bài trước nhưng căn chỉnh đẹp hơn) */}
        {selectedRadical && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[100] p-4 overflow-y-auto">
            <div className="bg-white w-full max-w-xl rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in duration-300 my-auto">
              {/* Header Modal */}
              <div className="bg-red-600 p-10 text-white relative">
                <button 
                  onClick={() => setSelectedRadical(null)}
                  className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-colors text-2xl"
                >
                  ×
                </button>
                <div className="flex items-center gap-8">
                  <div className="text-8xl font-serif">{selectedRadical.char}</div>
                  <div>
                    <h2 className="text-3xl font-black uppercase">{selectedRadical.viet}</h2>
                    <p className="text-red-100 font-medium">Bộ thứ {fullRadicalsData.indexOf(selectedRadical) + 1} / 214</p>
                  </div>
                </div>
              </div>

              {/* Body Modal */}
              <div className="p-10 space-y-8">
                <div>
                  <h4 className="text-[10px] font-black text-red-600 uppercase tracking-[0.2em] mb-3">Nguồn gốc & Biến thể</h4>
                  <p className="text-gray-700 leading-relaxed italic border-l-4 border-red-100 pl-4">{selectedRadical.origin}</p>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    {selectedRadical.variants.map((v) => (
                      <span key={v} className="px-3 py-1 bg-gray-100 rounded text-sm font-bold text-gray-600">Biến thể: {v}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-black text-red-600 uppercase tracking-[0.2em] mb-4">Ví dụ ghép chữ</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {selectedRadical.examples.map((ex, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-red-50 transition-colors border border-transparent hover:border-red-100">
                        <span className="text-4xl font-serif text-gray-800">{ex.word}</span>
                        <div>
                          <div className="font-bold text-gray-900">{ex.pinyin}</div>
                          <div className="text-sm text-gray-500">{ex.meaning}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
")

Path("c:/Users/Admin/ai-chinese-app/app/radicals/page.tsx").write_text("\n".join(output), encoding="utf-8")
