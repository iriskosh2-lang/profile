import type { Metadata } from "next";
import { Noto_Sans_KR, Playfair_Display } from "next/font/google"; // Playfair for English Headings
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "고서현(Go Seohyun) - 한의학과 포트폴리오",
  description: "세명대학교 한의학과 학생의 학업, 봉사, 국제 교류 경험을 담은 포트폴리오",
  openGraph: {
    title: "고서현(Go Seohyun) - 한의학과 포트폴리오",
    description: "세명대학교 한의학과 학생의 학업, 봉사, 국제 교류 경험을 담은 포트폴리오",
    images: [
      {
        url: "/images/profile.png",
        width: 800,
        height: 600,
        alt: "고서현 프로필 사진",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKr.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
