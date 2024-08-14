import { isExpandedContext } from "./context";

export function ShrinkableNav({
  isExpanded,
  children,
}: {
  isExpanded: boolean;
  children: React.ReactNode;
}) {
  return (
    <isExpandedContext.Provider value={isExpanded}>
      <div
        className={`flex flex-col p-2 gap-1 transition-all duration-500 ease-in-out ${isExpanded ? "w-[300px]" : "w-[60px]"}`}
      >
        {children}
      </div>
    </isExpandedContext.Provider>
  );
}
