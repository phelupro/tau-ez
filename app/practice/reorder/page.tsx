"use client";
import PracticeBase from "../../layout-thiet-ke";
import Navbar from "../../components/Navbar";

export default function ReorderPractice() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar />
      <PracticeBase
        title="Sắp xếp câu"
        icon="🔃"
        description="Sắp xếp các từ thành câu đúng theo ngữ pháp tiếng Trung"
        totalQuestions={90}
      />
    </div>
  );
}