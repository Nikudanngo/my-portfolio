"use client";

import { Window } from "@/components/os/Window";
import { DrawerLeft } from "@/components/ui/DrawerLeft";

export const Notion = ({ children }: { children: React.ReactNode }) => {
  return (
    <Window topClassName="!w-64 rounded-tr-none !bg-white border-r border-notion-text/20">
      <div className="grid h-full grid-flow-col grid-cols-[256px_auto]">
        <DrawerLeft />
        <div className="mb-24 overflow-y-auto text-2xl font-bold text-notion-text [&_h1]:my-5 [&_h1]:text-6xl [&_h2]:my-4 [&_h2]:text-5xl [&_h3]:my-3 [&_h3]:text-3xl [&_p]:my-3 [&_p]:text-2xl [&_p]:font-normal">
          {children}
        </div>
      </div>
    </Window>
  );
};
