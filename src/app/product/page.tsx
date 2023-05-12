"use client";

import { Notion } from "@/components/os/Notion";

export default function Product() {
  return (
    <Notion>
      <div className="mx-auto w-1/2">
        <h2>Product</h2>
        <p>ここでは私が今まで制作してきたプロダクトを紹介します。</p>
        <h2>Portfolio</h2>
      </div>
      <div className="z-20 flex gap-4 overflow-x-auto">
        <div className="rounded-xl border-2 border-notion-text/20 p-1">
          <div className="">
            <img
              src="/VRoid.jpg"
              alt="VRoid"
              className="h-[300px] min-w-[400px] rounded-xl object-cover object-top"
            />
          </div>
          <div>
            <p>3Dアバターの制作販売</p>
          </div>
        </div>
        <div className="rounded-xl border-2 border-notion-text/20 p-1">
          <div className="">
            <img
              src="/ThoutOfOcean.jpg"
              alt="VRoid"
              className="h-[300px] w-[400px] min-w-[400px] rounded-xl object-cover"
            />
          </div>
          <div>
            <p>竹歯ブラシ販売サイト</p>
          </div>
        </div>
        <div className="rounded-xl border-2 border-notion-text/20 p-1">
          <div className="">
            <img
              src="/ThoutOfOcean.jpg"
              alt="VRoid"
              className="h-[300px] w-[400px] min-w-[400px] rounded-xl object-cover"
            />
          </div>
          <div>
            <p>学食モバイルオーダー</p>
          </div>
        </div>
      </div>
    </Notion>
  );
}
