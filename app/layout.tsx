import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "두더지가족 매일매일 습관 첼린지!",//"localhost:8080"
  description: "아이와 부모가 재밌게 습관 키우는 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
