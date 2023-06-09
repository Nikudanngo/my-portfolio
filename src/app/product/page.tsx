"use client";

import { Notion } from "@/components/os/Notion";
import { products } from "@/type";
import classNames from "classnames";

export default function Product() {
  return (
    <Notion>
      <div className="mx-auto w-2/3">
        <h2>プロダクト</h2>
        <p>ここでは私が今まで制作してきたプロダクトを紹介します。</p>
      </div>
      <div className="mx-auto w-3/4">
        <div className="grid grid-cols-6 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className={classNames("rounded-xl border", {
                "col-span-2": product.colSpan === 2,
                "col-span-4": product.colSpan === 4,
              })}
            >
              <img
                src={product.image}
                alt={product.alt}
                className="h-full rounded-xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </Notion>
  );
}
