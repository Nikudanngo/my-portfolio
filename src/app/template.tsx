"use client";

import { useDateTime } from "@/api/useDateTime";
import { Desktop } from "@/components/Desktop";
import { Header } from "@/components/Header";
import { File } from "@/components/File";

export default function Template({ children }: { children: React.ReactNode }) {
  const { month, day, weekday, hours, minutes, isEvening } = useDateTime();

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
      <div className="fixed right-0 -z-10 flex flex-col pt-12">
        <File fileName="作品" path="product" />
        <File fileName="連絡先" path="contact" />
      </div>
      <main>{children}</main>
    </>
  );
}
