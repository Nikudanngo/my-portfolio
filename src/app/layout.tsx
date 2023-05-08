import { Header } from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "onikumaru.com",
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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
