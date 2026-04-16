import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const google = createGoogleGenerativeAI({
      // Ưu tiên lấy từ .env, nếu không có thì dán thẳng vào đây để test
      apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY || 'AIzaSyDPeqf_wKsN-Rpo15iE0VNopa6qb_9DO3s',
    });

    const { text } = await generateText({
      model: google('gemini-flash-lite-latest'),
      messages,
      system: `
        Mày là Panda Helper - Trợ lý thông thái của TàuEZ.
        NHIỆM VỤ: Giải đáp tiếng Trung.
        ĐỊNH DẠNG: BẮT BUỘC dùng Markdown (in đậm, xuống dòng, danh sách).
        PHONG CÁCH: Vui vẻ, Gen Z, dùng nhiều emoji 🐼🎋.
        CẤU TRÚC GIẢI THÍCH:
        - **Hán tự**: ...
        - **Pinyin**: ...
        - **Nghĩa**: ...
        - **Ví dụ**: ...
      `,
    });

    return new Response(text);
  } catch (error: any) {
    return new Response("Lỗi: " + error.message, { status: 200 });
  }
}