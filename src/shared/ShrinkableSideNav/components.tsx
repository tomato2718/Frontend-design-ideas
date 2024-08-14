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
        "flex items-center p-2 gap-2 rounded-md",
        isExpanded ? "w-full" : "w-min",
        onSelected ? "bg-grayscale-5" : "hover:bg-grayscale-4",
      )}
    >
      <span>{icon}</span>
      {isExpanded && <span className="text-sm text-nowrap">{text}</span>}
    </div>
  );
}
