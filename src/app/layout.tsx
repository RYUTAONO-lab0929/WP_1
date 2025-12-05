import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Brunsohnのようなクリーンなサンセリフ体を採用
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap", // フォント読み込み時のチラつき防止
});

export const metadata: Metadata = {
  title: "Brunsohn Style Portfolio",
  description: "A digital video production studio portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
