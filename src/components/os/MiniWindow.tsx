"use client";

import { Window } from "@/components/os/Window";
import { Rnd } from "react-rnd";

export const MiniWindow = (props: {
  children?: React.ReactNode;
  className?: string;
  closeTo?: string;
}) => {
  const { children, className, closeTo } = props;
  return (
    <Rnd
      default={{
        x: 800,
        y: 500,
        width: 320,
        height: 200,
      }}
      className={className}
    >
      <Window closeTo={closeTo}>{children}</Window>
    </Rnd>
  );
};
