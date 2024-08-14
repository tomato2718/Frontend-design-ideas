import { useState, useEffect } from "react";

import { isExpandedContext } from "./context";

export function ShrinkableNav({
  isExpanded,
  children,
}: {
  isExpanded: boolean;
  children: React.ReactNode;
}) {
  const [delayedIsExpanded, setDelayedIsExpanded] = useState(isExpanded);
  useEffect(() => {
    if (isExpanded === true) {
      setTimeout(() => setDelayedIsExpanded(isExpanded), 300);
    } else {
      setDelayedIsExpanded(isExpanded);
    }
  }, [isExpanded]);

  return (
    <isExpandedContext.Provider value={delayedIsExpanded}>
      <div
        className={`flex flex-col p-2 gap-1 duration-500 ease-in-out ${isExpanded ? "min-w-[280px]" : "min-w-0"}`}
        style={{
          transitionProperty: "min-width",
        }}
      >
        {children}
      </div>
    </isExpandedContext.Provider>
  );
}
