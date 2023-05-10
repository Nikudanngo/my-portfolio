import { PageNamePath } from "@/type";
import classnames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";

export const DrawerLeft = () => {
  const [pathname, setPathname] = useState("");
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);
  return (
    <div className="flex h-full w-full items-center justify-center border-r border-notion-text/20 bg-white text-3xl">
      <div className="flex w-40 flex-col items-start gap-8 text-start">
        {PageNamePath.map((pathName) => (
          <button key={pathName.name}>
            <Link href={pathName.path}>
              <li
                className={classnames(
                  "list-none text-notion-text/30 underline hover:text-notion-hover",
                  {
                    "ml-4 w-full !text-notion-text": pathName.path === pathname,
                  }
                )}
              >
                {pathName.path.split("/")}
              </li>
            </Link>
          </button>
        ))}
      </div>
    </div>
  );
};
