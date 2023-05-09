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
    <div className="flex h-full w-64 flex-col items-center justify-center bg-gray-100 text-3xl">
      <div className="flex flex-col items-start gap-8">
        {PageNamePath.map((pathName) => (
          <button key={pathName.name}>
            <Link href={pathName.path}>
              <li
                className={classnames(
                  "list-none text-blue-600 underline hover:text-blue-400",
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
      {/* {location} */}
    </div>
  );
};
