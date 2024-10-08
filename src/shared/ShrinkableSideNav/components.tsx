import { useContext } from "react";
import clsx from "clsx";

import { isExpandedContext } from "./context";

export function ShrinkableItem({
  icon,
  text,
  onSelected,
}: {
  icon: React.ReactElement;
  text: string;
  onSelected?: boolean;
}) {
  const isExpanded = useContext(isExpandedContext);
  return (
    <div
      className={clsx(
        "flex items-center p-2 rounded-md",
        isExpanded ? "w-full" : "w-min",
        onSelected ? "bg-grayscale-5" : "hover:bg-grayscale-4",
      )}
    >
      <span>{icon}</span>
      <span
        className={clsx(
          "text-sm text-nowrap text-start overflow-hidden duration-200 ease-in-out",
          isExpanded ? "w-full ml-2 transition-all" : "w-0 transition-none",
        )}
      >
        {text}
      </span>
    </div>
  );
}
