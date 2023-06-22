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
}

export const products: Product[] = [
  { title: "3Dアバターの制作販売", colSpan: 2, image: "/VRoid.jpg", alt: "VRoid", description: "Vroidで作成した3Dアバターを販売しています。" },
  { title: "学食モバイルオーダー", colSpan: 4, image: "/thumbnail-run-ticket.png", alt: "RunTicket", description: "学食のモバイルオーダーシステムを作成しました。" },
  { title: "竹歯ブラシ販売サイト", colSpan: 4, image: "/ThoutOfOcean.jpg", alt: "KAGUYA", description: "竹歯ブラシの販売サイトを作成しました。" },
  { title: "ポートフォリオサイト", colSpan: 2, image: "/my-portfolio.png", alt: "my-portfolio", description: "このサイトです。" },
];
