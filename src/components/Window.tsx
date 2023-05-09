import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Window = (props: { children?: React.ReactNode }) => {
  const { children } = props;
  const router = useRouter();
  const [isFullScreen, setIsFullScreen] = useState(false);
  return (
    <div
      className={classNames("flex w-full", {
        "min-h-screen pt-12": !isFullScreen,
        "fixed top-0 z-40 h-full": isFullScreen,
      })}
    >
      <div className="fixed h-full w-full rounded-lg bg-white text-black">
        <div
          className={classNames("fixed w-full p-2", {
            "rounded-t-lg bg-zinc-200": !isFullScreen,
            "bg-white shadow-lg": isFullScreen,
          })}
        >
          <button
            className="m-1 h-4 w-4 rounded-full bg-red-500"
            onClick={() => {
              router.push("/");
            }}
          />
          <button
            className="m-1 h-4 w-4 rounded-full bg-yellow-500"
            onClick={() => {
              router.push("/");
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
