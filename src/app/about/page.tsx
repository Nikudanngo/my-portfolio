"use client";

import { Notion } from "@/components/os/Notion";
import { Level } from "@/components/ui/Level";

export default function About() {
  return (
    <Notion>
      <div className="mx-auto w-2/3">
        <h1 className="font-bold">はじめまして、遠藤です。</h1>
        <h2>自己紹介</h2>
        <p>
          こんにちは！最高なUXを追求するフロントエンドエンジニアのonikumaru(遠藤)といいます。大学でデザイン思考を学び、さまざまなプロダクトを作成してきました。
          UI/UXデザインには特に力を入れ、ユーザーにとって使いやすく、魅力的なデザインを提供することを心がけています。
        </p>
        <h2>Skill</h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3>Front-end</h3>
            <table className="w-full table-fixed">
              <thead>
                <tr>
                  <th>skill</th>
                  <th>level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>React</td>
                  <Level levelClassName="w-4/5" diffLevelClassName="w-1/5" />
                </tr>
                <tr>
                  <td>Next.js</td>
                  <Level levelClassName="w-3/5" diffLevelClassName="w-2/5" />
                </tr>
                <tr>
                  <td>JavaScript</td>
                  <Level levelClassName="w-3/5" diffLevelClassName="w-2/5" />
                </tr>
                <tr>
                  <td>TypeScript</td>
                  <Level levelClassName="w-4/5" diffLevelClassName="w-1/5" />
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3>Back-end</h3>
            <table className="w-full table-fixed">
              <thead>
                <tr>
                  <th>skill</th>
                  <th>level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Node.js</td>
                  <Level levelClassName="w-4/5" diffLevelClassName="w-1/5" />
                </tr>
                <tr>
                  <td>Python</td>
                  <Level levelClassName="w-3/5" diffLevelClassName="w-2/5" />
                </tr>
                <tr>
                  <td>C++</td>
                  <Level levelClassName="w-2/5" diffLevelClassName="w-3/5" />
                </tr>
                <tr>
                  <td>GO</td>
                  <Level levelClassName="w-1/5" diffLevelClassName="w-4/5" />
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3>Dev-ops</h3>
            <table className="w-full table-fixed">
              <thead>
                <tr>
                  <th>skill</th>
                  <th>level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Git/GitHub</td>
                  <Level levelClassName="w-4/5" diffLevelClassName="w-1/5" />
                </tr>
                <tr>
                  <td>Firebase</td>
                  <Level levelClassName="w-4/5" diffLevelClassName="w-1/5" />
                </tr>
                <tr>
                  <td>Docker</td>
                  <Level levelClassName="w-1/5" diffLevelClassName="w-4/5" />
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3>3D-modeling</h3>
            <table className="w-full table-fixed">
              <thead>
                <tr>
                  <th>skill</th>
                  <th>level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Blender</td>
                  <Level levelClassName="w-4/5" diffLevelClassName="w-1/5" />
                </tr>
                <tr>
                  <td>Fusion360</td>
                  <Level levelClassName="w-4/5" diffLevelClassName="w-1/5" />
                </tr>
                <tr>
                  <td>Unity</td>
                  <Level levelClassName="w-3/5" diffLevelClassName="w-2/5" />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Notion>
  );
}
