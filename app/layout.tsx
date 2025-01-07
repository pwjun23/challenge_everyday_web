import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "우리아이 매일매일 습관 키우기",
  description: "아이와 부모가 재밌게 습관 키우는 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
