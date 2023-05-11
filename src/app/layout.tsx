import "./globals.css";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "onikumaru",
  description:
    "onikumaru.comはonikumaruのポートフォリオです。ここではonikumaruが今まで作成したプロダクトを紹介します。プロダクトには、ウェブアプリケーションやIoTデバイスなどが含まれています。このサイトを通じて、制作者のスキルや制作実績をご確認ください!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
