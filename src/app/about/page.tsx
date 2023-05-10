"use client";

import { Window } from "@/components/os/Window";
import { DrawerLeft } from "@/components/ui/DrawerLeft";
import { Level } from "@/components/ui/Level";

export default function About() {
  return (
    <Window topClassName="!w-64 rounded-tr-none !bg-white border-r border-notion-text/20">
      <div className="grid h-full grid-flow-col">
        <DrawerLeft />
        <div className="flex h-full w-full items-start justify-center overflow-y-auto">
          <div className="mb-24 w-1/2 text-2xl font-bold text-notion-text [&_h1]:my-5 [&_h1]:text-6xl [&_h2]:my-4 [&_h2]:text-5xl [&_h3]:my-3 [&_h3]:text-3xl [&_p]:my-3 [&_p]:text-2xl [&_p]:font-normal">
            <h1 className="font-bold">Hi, my name is Satoru Endo</h1>
            <h2>About me</h2>
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
                      <Level levelNumber={4} />
                    </tr>
                    <tr>
                      <td>Next.js</td>
                      <Level levelNumber={3} />
                    </tr>
                    <tr>
                      <td>JavaScript</td>
                      <Level levelNumber={3} />
                    </tr>
                    <tr>
                      <td>TypeScript</td>
                      <Level levelNumber={4} />
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
                      <Level levelNumber={4} />
                    </tr>
                    <tr>
                      <td>Python</td>
                      <Level levelNumber={3} />
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
                      <Level levelNumber={4} />
                    </tr>
                    <tr>
                      <td>Firebase</td>
                      <Level levelNumber={4} />
                    </tr>
                    <tr>
                      <td>Docker</td>
                      <Level levelNumber={1} />
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
                      <Level levelNumber={4} />
                    </tr>
                    <tr>
                      <td>Fusion360</td>
                      <Level levelNumber={4} />
                    </tr>
                    <tr>
                      <td>Unity</td>
                      <Level levelNumber={3} />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}
