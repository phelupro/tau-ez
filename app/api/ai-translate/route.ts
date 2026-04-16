import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { text, isChineseToViet } = await req.json();
    
    // THAY KEY THẬT CỦA MÀY VÀO ĐÂY
    const API_KEY = "AIzaSyAsGn0qKf4s-xZusUGaWPxk3PtX7asvIkw"; 

    if (!API_KEY || API_KEY.startsWith("AIzaSy") === false) {
      return Response.json({ error: "API Key không hợp lệ hoặc chưa dán vào!" }, { status: 401 });
    }

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

    const prompt = isChineseToViet 
      ? `Dịch câu này sang tiếng Việt, nếu là thành ngữ hãy tìm câu tương đương: "${text}"`
      : `Dịch câu này sang tiếng Trung tự nhiên như người bản xứ: "${text}"`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const translated = response.text();

    if (!translated) {
      return Response.json({ error: "AI không trả về kết quả" }, { status: 500 });
    }

    return Response.json({ translated });

  } catch (error: any) {
    console.error("LỖI SERVER CHI TIẾT:", error);
    return Response.json({ error: error.message || "Lỗi hệ thống AI" }, { status: 500 });
  }
}
