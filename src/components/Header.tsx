"use client";

import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import WifiIcon from "@mui/icons-material/Wifi";
import { BsBatteryFull } from "react-icons/bs";

export const Header = () => {
  const [time, setTime] = useState(new Date());
  const [isKeyKana, setIsKeyKana] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const month = time.getMonth() + 1;
  const day = time.getDate();
  const weekday = ["日", "月", "火", "水", "木", "金", "土"][time.getDay()];
  const hours = time.getHours();
  const minutes = ("0" + time.getMinutes()).slice(-2);

  return (
    <>
      <nav className="fixed top-0 flex w-full justify-between bg-gradient-to-r from-violet-900 to-indigo-900 py-3 text-sm text-white">
        <ul className="mx-3 flex gap-3">
          <li>
            <a href="#">
              <img src="/logo.svg" alt="logo" width="20px" />
            </a>
          </li>
          <li>
            <a href="#about">Nikuda</a>
          </li>
          <li>
            <a href="#works">ファイル</a>
          </li>
          <li>
            <a href="#contact">プロダクト</a>
          </li>
          <li>
            <a href="#contact">連絡</a>
          </li>
        </ul>
        <ul className="mx-3 flex items-center justify-center gap-3">
          <li>
            {isKeyKana ? (
              <button
                className="w-8 space-x-1 rounded border border-white text-white"
                onClick={() => {
                  setIsKeyKana(false);
                }}
              >
                A
              </button>
            ) : (
              <button
                className="w-8 space-x-1 rounded border border-white text-white"
                onClick={() => {
                  setIsKeyKana(true);
                }}
              >
                あ
              </button>
            )}
          </li>
          <li className="flex items-center justify-center gap-1.5 text-xs">
            100%
            <BsBatteryFull className="text-2xl text-white" />
          </li>
          <li>
            <WifiIcon className="text-white" />
          </li>
          <li>
            <button>
              <SearchIcon
                className="text-white"
                onClick={() => {
                  console.log("search");
                }}
              />
            </button>
          </li>
          <li>
            {month}月{day}日({weekday}) {hours}:{minutes}
          </li>
        </ul>
      </nav>
    </>
  );
};
