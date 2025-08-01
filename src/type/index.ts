export const PageNamePath = [
  { name: "詳細", path: "/about" },
  { name: "作品", path: "/product" },
  { name: "研究", path: "/research" },
  { name: "連絡先", path: "/contact" },
];

interface Product {
  title: string;
  image: string;
  colSpan: number;
  alt: string;
  description: string;
  url: string
}

export const products: Product[] = [
  { title: "3Dアバターの制作販売", colSpan: 2, image: "/VRoid.jpg", alt: "VRoid", description: "Vroidで作成した3Dアバターを販売しています。", url: "https://coconala.com/services/1624823" },
  { title: "学食モバイルオーダー", colSpan: 4, image: "/thumbnail-run-ticket.png", alt: "RunTicket", description: "学食のモバイルオーダーシステムを作成しました。", url: "https://product.run-ticket.com/"},
  { title: "ポートフォリオサイト", colSpan: 4, image: "/my-portfolio.png", alt: "my-portfolio", description: "このサイトです。", url: "https://github.com/Nikudanngo/my-portfolio" },
  { title: "竹歯ブラシ販売サイト", colSpan: 2, image: "/ThoutOfOcean.jpg", alt: "KAGUYA", description: "竹歯ブラシの販売サイトを作成しました。", url:"https://www.thoughtofoceans.com/" },
  { title: "Typst履歴書テンプレート", colSpan: 2, image: "/rireki.png", alt: "rireki", description: "Typstで作成した履歴書のテンプレートです。", url: "https://github.com/Nikudanngo/typst-ja-resume-template" },
  { title: "MetaTrainee", colSpan: 4, image: "/meta-trainee.png", alt: "MetaTrainee", description: "3Dアバターと一緒に筋トレができるアプリ。", url: "https://v0-next-js-app-stack.vercel.app/"},
];
