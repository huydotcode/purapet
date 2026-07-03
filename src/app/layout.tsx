import type { Metadata } from "next";
import { Be_Vietnam_Pro, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Plus_Jakarta_Sans({
  subsets: ["vietnamese", "latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});
const bodyFont = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});
const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://purapet.vercel.app"),
  title: "PuraPet PurraFeed - Máy Cho Ăn Tự Động Kèm Camera | Thiết Kế Cao Cấp",
  description: "Khám phá máy cho ăn tự động kèm camera PuraPet PurraFeed chính hãng. Công nghệ chống kẹt hạt độc quyền, khóa tươi 3 lớp, giám sát đàm thoại 2 chiều qua camera HD 1080P.",
  keywords: ["PuraPet PurraFeed", "máy cho ăn tự động", "máy cho mèo ăn có camera", "thiết bị thú cưng thông minh", "PuraPet"],
  authors: [{ name: "PuraPet Corp" }],
  openGraph: {
    title: "PuraPet PurraFeed - Máy Cho Ăn Tự Động Kèm Camera",
    description: "Trọn vẹn dinh dưỡng đúng giờ cho thú cưng. Máy cho ăn tự động kèm camera HD, đàm thoại 2 chiều góc rộng.",
    images: ["/purra_feed_hero.jpg"],
    url: "https://purapet.vn/purra-feed",
    type: "website",
    siteName: "PuraPet",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} h-full antialiased scroll-smooth scroll-pt-20`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
