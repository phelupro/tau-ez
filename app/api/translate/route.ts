import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GOOGLE_API_KEY;

export async function POST(request: Request) {
  console.log("=== TRANSLATE API CALLED ===");
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
    console.log("API Key exists:", !!apiKey);

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Thiếu GOOGLE_API_KEY trong môi trường." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const body = await request.json();
    console.log("Request body:", body);
    const text = String(body?.text || "").trim();
    const isChineseToViet = body?.isChineseToViet !== false;

    if (!text) {
      return new Response(JSON.stringify({ error: "Vui lòng gửi văn bản để dịch." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log("Initializing AI with model: gemini-3-flash-preview");
    const ai = new GoogleGenerativeAI(apiKey);
    const model = ai.getGenerativeModel({ model: "gemini-3-flash-preview" });

    const prompt = isChineseToViet
      ? `Dịch tiếng Trung sang tiếng Việt một cách chính xác, tự nhiên và giữ ý nghĩa gốc:\n\n${text}`
      : `Dịch tiếng Việt sang tiếng Trung một cách chính xác, tự nhiên và giữ ý nghĩa gốc:\n\n${text}`;

    console.log("Sending prompt to AI...");
    const result = await model.generateContent(prompt);

    const translation = String(result.response?.text?.() || "").trim();
    console.log("Translation result:", translation);

    if (!translation) {
      return new Response(JSON.stringify({ error: "Không nhận được kết quả từ AI." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ translated: translation }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    const errorMsg = error?.message || String(error);
    console.error("=== TRANSLATE API ERROR ===");
    console.error("Error message:", errorMsg);
    console.error("Error stack:", error?.stack);
    return new Response(JSON.stringify({ 
      error: "Lỗi khi gọi AI dịch.", 
      detail: errorMsg,
      stack: error?.stack
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
