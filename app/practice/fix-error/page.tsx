import PracticeBase from "../../layout-thiet-ke";
import Navbar from "../../components/Navbar";

export default function FixErrorPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar />
      <PracticeBase
        title="Sửa câu sai tiếng Trung"
        icon="ⓧ"
        description="Tìm và sửa lỗi ngữ pháp trong câu tiếng Trung theo cấp độ"
        totalQuestions={300}
      />
    </div>
  );
}