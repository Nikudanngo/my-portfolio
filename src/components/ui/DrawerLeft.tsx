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
    <div className="flex h-full w-64 items-center justify-center border-r border-notion-text/20 bg-white text-3xl text-notion-text">
      <div className="flex flex-col items-start gap-8">
        {PageNamePath.map((pathName) => (
          <button key={pathName.name}>
            <Link href={pathName.path}>
              <li
                className={classnames(
                  "list-none underline hover:text-notion-hover",
                  {
                    "w-full !list-disc": pathName.path === pathname,
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
