"use client";

import classNames from "classnames";

export const Level = ({
  levelClassName,
  diffLevelClassName,
}: {
  levelClassName: string;
  diffLevelClassName: string;
}) => {
  return (
    <td className="h-full w-full">
      <div className="flex h-2 items-center justify-center">
        <div className={classNames("h-full bg-sky-700", levelClassName)} />
        <div
          className={classNames(
            "h-full w-full bg-gray-300",
            diffLevelClassName
          )}
        />
      </div>
    </td>
  );
};
