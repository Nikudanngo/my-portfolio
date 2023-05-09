"use client";

import { Window } from "@/components/os/Window";
import { DrawerLeft } from "@/components/ui/DrawerLeft";

export default function About() {
  return (
    <Window>
      <div className="flex h-full w-full">
        <DrawerLeft />
        <h1 className="text-6xl">test</h1>
        <h1 className="text-6xl">test</h1>
      </div>
    </Window>
  );
}
