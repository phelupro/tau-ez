import PracticeBase from "../../layout-thiet-ke";
import Navbar from "@/app/components/Navbar";

export default function FillBlankPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar />
      <PracticeBase
        title="Điền từ tiếng Trung"
        icon="Aa"
        description="Điền từ còn thiếu vào câu tiếng Trung theo cấp độ HSK 1-6"
        totalQuestions={300}
      />
    </div>
  );
}