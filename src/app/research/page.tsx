"use client";

import { Notion } from "@/components/os/Notion";

export default function Research() {
  return (
    <Notion>
      <div className="mx-auto w-2/3">
        <h1 className="font-bold">研究テーマ</h1>
        <h2>
          1.
          背景情報に基づく安全な食材選定とレシピ生成のための大規模言語モデルの研究
        </h2>
        <p>
          <a>Wikispecies</a>
          などの生物の特徴や保有する毒、寄生虫の種類などの背景情報を学習した大規模言語モデルを用いて、
          虫や草を安全に食べることができるレシピを生成するシステムを目指す。
        </p>
        <p>
          例:ナメクジは食べられない → 広東住血線虫が原因 →
          広東住血線虫は熱に弱い → 熱を加える → 食べられる
        </p>
        <p>
          このような因果関係を考慮すれば大抵の虫は食べれるはず。因果関係をChatGPT
          を用いて推定し、安全に食べるためのレシピを生成したい。
        </p>
        <h2>2. Incremental Database Regeneration(IDR)</h2>
        <p>
          ChatGPTの生成したデータをデータベースに保存しておき、次回以降ユーザーが同じデータを欲しがった時にはデータベースから取得する。
          (Incremental Static Regeneration)ISRのような仕組みの研究。
        </p>
        <span className="text-2xl font-normal opacity-40">
          (これは多分新規制あるのか調査中...多分ボツ)
        </span>
        <img src="/cook-bug.svg" alt="cookBug" />
      </div>
    </Notion>
  );
}
