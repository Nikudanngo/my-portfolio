"use client";
import { Window } from "@/components/Window";
import { PageNamePath } from "@/type";
import Link from "next/link";

export default function App() {
  return (
    <>
      <Window>
        <div className="h-full">
          <div className="flex h-full w-full flex-col items-center justify-center">
            <div>
              <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-8xl">
                SATORU ENDO
              </h1>
            </div>
            <div>
              <p className="text-3xl">
                This is the portfolio site of Satoru Endo.
              </p>
            </div>
            <div className="my-8 flex w-full items-center justify-center gap-64 text-4xl">
              {PageNamePath.map((pathName) => {
                return (
                  <button
                    key={pathName.name}
                    className="text-blue-600 underline"
                  >
                    <Link href={pathName.path}>{pathName.path.split("/")}</Link>
                  </button>
                );
              })}
            </div>
          </div>
          {/* <div className="h-full">hello</div> */}
        </div>
      </Window>
    </>
  );
}
