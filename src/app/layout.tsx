import { Header } from "@/ component/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

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
      {/* <Head>
        <title>{metadata.title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
