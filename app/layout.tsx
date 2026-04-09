import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="vi">
        <body>
          {/* Thanh Header chứa nút Đăng nhập */}
          <nav className="flex justify-between items-center p-6 max-w-5xl mx-auto border-b border-gray-100">
            <div className="font-black text-2xl text-orange-600 tracking-tighter">
              TàuEZ
            </div>
            
            <div className="flex items-center gap-4">
              {/* Nếu CHƯA đăng nhập thì hiện nút Đăng nhập */}
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="bg-gray-900 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-orange-600 transition-all">
                    Đăng nhập
                  </button>
                </SignInButton>
              </SignedOut>

              {/* Nếu ĐÃ đăng nhập thì hiện Avatar người dùng */}
              <SignedIn>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-gray-400 uppercase">Tài khoản</span>
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
            </div>
          </nav>

          {/* Nội dung trang web */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}