import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Window = (props: {
  children?: React.ReactNode;
  topClassName?: string;
  closeTo?: string;
}) => {
  const { children, topClassName, closeTo } = props;
  const router = useRouter();
  const [isFullScreen, setIsFullScreen] = useState(false);
  return (
    <div
      className={classNames({
        "sticky z-10 mt-12": !isFullScreen,
        "fixed top-0 z-40": isFullScreen,
      })}
    >
      <div className="fixed h-full w-full rounded-lg bg-white text-black">
        <div
          className={classNames(
            "fixed flex h-12 w-full items-center justify-start px-2",
            {
              "rounded-t-lg bg-zinc-200": !isFullScreen,
              "bg-white": isFullScreen,
            },
            topClassName
          )}
        >
          <button
            className="m-1 h-4 w-4 rounded-full bg-red-500"
            onClick={() => {
              router.push(closeTo ?? "/home");
            }}
          />
          <button
            className="m-1 h-4 w-4 rounded-full bg-yellow-500"
            onClick={() => {
              router.push(closeTo ?? "/home");
            }}
          />
          <button
            className="m-1 h-4 w-4 rounded-full bg-green-500"
            onClick={() => {
              setIsFullScreen(!isFullScreen);
            }}
          />
        </div>
        <div className="h-full w-full overflow-y-auto pt-12">{children}</div>
      </div>
    </div>
  );
};
