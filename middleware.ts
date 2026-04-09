import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Những trang này ai cũng xem được (ví dụ: Trang chủ)
  publicRoutes: ["/"], 
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
