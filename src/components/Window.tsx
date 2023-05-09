import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Window = (props: { children?: React.ReactNode }) => {
  const { children } = props;
  const router = useRouter();
  const [isFullScreen, setIsFullScreen] = useState(false);
  return (
    <div
      className={classNames("flex min-h-screen w-full", {
        "fixed z-10": isFullScreen,
        "pt-12": !isFullScreen,
      })}
    >
      <div className="w-full rounded-lg bg-white text-black">
        <div
          className={classNames("w-full p-2", {
            "rounded-t-lg bg-zinc-200": !isFullScreen,
            "bg-white shadow-lg": isFullScreen,
          })}
        >
          <button
            className="z-40 m-1 h-4 w-4 rounded-full bg-red-500"
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
        {children}
      </div>
    </div>
  );
};
