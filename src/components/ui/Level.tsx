"use client";

import classNames from "classnames";

export const Level = ({ levelNumber }: { levelNumber: 1 | 2 | 3 | 4 | 5 }) => {
  const levelClassName = `w-${levelNumber}/5`;
  const diffLevelClassName = `w-${5 - levelNumber}/5`;
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
