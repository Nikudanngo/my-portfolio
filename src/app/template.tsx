"use client";

import { useDateTime } from "@/api/useDateTime";
import { Desktop } from "@/components/Desktop";
import { Header } from "@/components/Header";
import { useState } from "react";
import { File } from "@/components/File";

export default function Template({ children }: { children: React.ReactNode }) {
  const { month, day, weekday, hours, minutes, isEvening } = useDateTime();
  const [isClickedBg, setIsClickedBg] = useState(false);

  return (
    <>
      <Header
        isDarkMode={isEvening}
        month={month}
        day={day}
        weekday={weekday}
        hours={hours}
        minutes={minutes}
      />
      <Desktop isDarkMode={isEvening} />
      <div className="fixed right-0 flex flex-col pt-16">
        <File fileName="作品" path="product" />
        <File fileName="連絡先" path="contact" />
      </div>
      <div className="pt-16">{children}</div>
    </>
  );
}
