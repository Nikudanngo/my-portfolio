import { useState, useEffect } from "react";

export interface DateTime {
  month: number;
  day: number;
  weekday: string;
  hours: number;
  minutes: string;
  isEvening: boolean;
}

export function useDateTime(): DateTime {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const month = time.getMonth() + 1;
  const day = time.getDate();
  const weekday = ["日", "月", "火", "水", "木", "金", "土"][time.getDay()];
  const hours = time.getHours();
  const minutes = ("0" + time.getMinutes()).slice(-2);
  const isEvening = hours >= 18;


  return { month, day, weekday, hours, minutes, isEvening };
}