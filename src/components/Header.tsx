import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import WifiIcon from "@mui/icons-material/Wifi";
import { BsBatteryFull } from "react-icons/bs";
import classnames from "classnames";
import { NikudaLogo } from "./icon/NikudaLogo";
import Link from "next/link";

export const Header = (props: {
  isDarkMode: boolean;
  month: number;
  day: number;
  weekday: string;
  hours: number;
  minutes: string;
}) => {
  const { isDarkMode, month, day, weekday, hours, minutes } = props;
  const [isKeyKana, setIsKeyKana] = useState(false);

  return (
    <>
      <nav
        className={classnames(
          "fixed top-0 flex w-full justify-between py-3 text-base",
          {
            "bg-gradient-to-r from-violet-900/95 to-indigo-900/95 text-white":
              isDarkMode,
            "bg-gradient-to-r from-pink-200/95 via-white to-pink-200/95 text-black":
              !isDarkMode,
          }
        )}
      >
        <ul className="mx-5 flex gap-5">
          <li>
            <a href="#">
              <NikudaLogo
                style={isDarkMode ? { fill: "white" } : { fill: "black" }}
                className="w-6"
              />
            </a>
          </li>
          <li>
            <Link href="/">Nikuda</Link>
          </li>
          <li>
            <Link href="/file">ファイル</Link>
          </li>
          <li>
            <Link href="/product">作品</Link>
          </li>
          <li>
            <Link href="/contact">連絡先</Link>
          </li>
        </ul>
        <ul className="mx-5 flex items-center justify-center gap-5">
          <li>
            <button
              className={classnames("w-8 space-x-1 rounded border", {
                "border-white": isDarkMode,
                "border-black": !isDarkMode,
              })}
              onClick={() => {
                setIsKeyKana(!isKeyKana);
              }}
            >
              {isKeyKana ? "A" : "あ"}
            </button>
          </li>
          <li className="flex items-center justify-center gap-1.5 text-xs">
            100%
            <BsBatteryFull className="text-2xl" />
          </li>
          <li>
            <WifiIcon />
          </li>
          <li>
            <button>
              <SearchIcon
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
