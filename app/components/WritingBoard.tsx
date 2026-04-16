"use client";
import { useEffect, useRef } from "react";
import HanziWriter from "hanzi-writer";

export default function WritingBoard({ word }: { word: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !word) return;

    // Xóa nội dung cũ trước khi vẽ chữ mới
    containerRef.current.innerHTML = "";

    const writer = HanziWriter.create(containerRef.current, word[0], {
      width: 200,
      height: 200,
      showCharacter: false, // Ẩn chữ gốc để người dùng tự viết
      padding: 5,
      strokeColor: "#ff5722", // Màu nét viết
      outlineColor: "#eee",   // Màu chữ mờ bên dưới để tô theo
      drawingColor: "#333",   // Màu khi người dùng vẽ
    });

    // Kích hoạt chế độ tập viết (Quiz)
    writer.quiz();

    return () => {
      containerRef.current!.innerHTML = "";
    };
  }, [word]);

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-white rounded-2xl shadow-inner border-2 border-orange-100">
      <div ref={containerRef} className="cursor-crosshair"></div>
      <p className="text-[10px] text-gray-400 font-bold uppercase">Hãy tô lên khung trên</p>
    </div>
  );
}