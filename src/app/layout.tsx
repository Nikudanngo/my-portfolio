"use client";

import { Header } from "@/components/Header";
import "./globals.css";
import { Desktop } from "@/components/Desktop";
import { useDateTime } from "@/api/useDateTime";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { month, day, weekday, hours, minutes, isEvening } = useDateTime();
  return (
    <html lang="ja">
      <body className="text-white">
        <Header
          isDarkMode={isEvening}
          month={month}
          day={day}
          weekday={weekday}
          hours={hours}
          minutes={minutes}
        />
        <Desktop isDarkMode={isEvening} />
        {children}
      </body>
    </html>
  );
}
