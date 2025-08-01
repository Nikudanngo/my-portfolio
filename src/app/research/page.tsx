"use client";

import { Notion } from "@/components/os/Notion";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
export default function Research() {
  const markdown = `
# 修論研究テーマ
## Webブラウザを用いたCNN分散学習

インターネット（Webブラウザ）を用いて分散学習を実現する手法を提案する。
中央サーバは各クライアントにニューラルネットワークモデルとデータセットを配信し、クライアント側で学習（転移学習）を実施する。
学習後、各クライアントは最終層の重みをサーバに送信し、サーバ側でこれらの重みをマージ（加重平均）してモデルを更新する。
これにより、特別なソフトウェアや環境構築を必要とせず、様々なデバイスがWebブラウザのみで分散学習への参加を目指す。
`
  const markdown2 = `
# 卒論研究テーマ
## 背景情報に基づく安全な虫料理レシピ生成のための大規模言語モデルの研究

Wikispeciesなどの生物の特徴や保有する毒、寄生虫の種類などの背景情報を学習した大規模言語モデルを用いて、虫や草を安全に食べることができるレシピを生成するシステムを目指す。
例:ナメクジは食べられない → 広東住血線虫が原因 → 広東住血線虫は熱に弱い → 熱を加える → 食べられる
このような因果関係を考慮すれば大抵の虫は食べれるはず。因果関係をChatGPTを用いて推定し、安全に食べるためのレシピを生成したい。
`
  
  return (
    <Notion>
      <div className="mx-auto w-2/3">
        <div style={{
          wordBreak: 'break-word',
          overflowWrap: 'anywhere',
          whiteSpace: 'pre-wrap',
        }}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdown.trim()}
          </ReactMarkdown>
          <div className="w-full flex flex-col justify-center">
            <img src="/mainImage.svg" alt="mainImage" />
            <p className="text-center">図1: Webブラウザを用いたCNN分散学習の概要</p>
          </div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdown2.trim()}
          </ReactMarkdown>
          <div className="w-full flex flex-col justify-center">
            <img src="/flow.drawio.svg" alt="ChatGPTBugRecipe" />
            <p className="text-center">図2: 背景情報に基づく安全な虫料理レシピ生成、評価の流れ</p>
          </div>
        </div>
      </div>
    </Notion>
  );
}
