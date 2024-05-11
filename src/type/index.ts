import { Url } from "next/dist/shared/lib/router/router";

export const PageNamePath = [
  { name: "詳細", path: "/about" },
  { name: "作品", path: "/product" },
  { name: "研究", path: "/research" },
  { name: "連絡先", path: "/contact" },
];

export interface Product {
  title: string;
  image: string;
  colSpan: number;
  alt: string;
  description: string;
  path: string;
  link: Url;
}
