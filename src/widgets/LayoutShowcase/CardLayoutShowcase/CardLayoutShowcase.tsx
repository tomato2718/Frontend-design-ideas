import { useState } from "react";

import { CardLayout } from "@/shared/CardLayout";

export function CardLayoutShowcase() {
  return (
    <CardLayout SideNav={<Side />}>
        <span className="m-2">example contents</span>
    </CardLayout>
    );
}

function Side() {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <div
      className={`flex flex-col p-2 transition-all duration-500 ease-in-out ${isExpanded ? "w-[300px]" : "w-[100px]"}`}
    >
      <span>CardLayout</span>
      <div className="p-2">
        <button
          className="px-4 py-2 border rounded bg-accent-3 border-accent-6 hover:bg-accent-4 hover:border-accent-7 text-accent-11 hover:text-accent-12"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          switch
        </button>
      </div>
    </div>
  );
}
