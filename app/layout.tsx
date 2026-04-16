import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import ChatBot from "./components/chatbot"; 
import Navbar from "./components/Navbar"; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="vi">
        <head>
          <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        </head>
        <body className="antialiased bg-white" style={{ fontFamily: "'Lexend', sans-serif" }}>
          {/* Vẫn giữ nguyên tinh túy Navbar của mày bằng cách gọi component */}
          <Navbar /> 
          
          <main>{children}</main>
          
          {/* Con Bot sẽ xuất hiện chuẩn đét ở đây */}
          <ChatBot /> 
        </body>
      </html>
    </ClerkProvider>
  );
}