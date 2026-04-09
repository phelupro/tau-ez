import { GoogleGenerativeAI } from "@google/generative-ai";

export async function GET() {
  try {
    // THAY KEY THẬT CỦA MÀY VÀO ĐÂY ĐỂ KIỂM TRA
    const API_KEY = "AIzaSyAsGn0qKf4s-xZusUGaWPxk3PtX7asvIkw"; 

    if (!API_KEY || API_KEY.includes("DÁN_KEY")) {
      return Response.json({ error: "Mày chưa dán API Key vào code kìa!" }, { status: 401 });
    }

    // Gọi thẳng endpoint của Google để lấy danh sách chuẩn nhất
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models?key=${API_KEY}`
    );
    
    const data = await response.json();

    if (!response.ok) {
      return Response.json({ 
        error: "Lỗi từ Google API", 
        detail: data 
      }, { status: response.status });
    }

    // Trả về danh sách model để mày xem trên trình duyệt
    return Response.json({
      message: "Danh sách các model khả dụng cho Key của mày:",
      models: data.models.map((m: any) => ({
        name: m.name.replace("models/", ""), // Rút gọn tên cho dễ nhìn
        displayName: m.displayName,
        description: m.description,
        capabilities: m.supportedGenerationMethods
      }))
    });

  } catch (error: any) {
    console.error("Lỗi check model:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}