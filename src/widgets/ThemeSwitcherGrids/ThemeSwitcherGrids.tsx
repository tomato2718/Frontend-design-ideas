import clsx from "clsx";

export function ThemeSwitcherGrids() {
  return (
    <div className="h-full grid grid-cols-8 grid-rows-6">
      <GridContainer componentName="example">
        <>123</>
      </GridContainer>
    </div>
  );
}

function GridContainer({
  componentName,
  children,
}: {
  componentName: string;
  children: React.ReactElement;
}) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center",
        "col-span-1 row-span-1",
        "border border-[#000000]",
        "relative",
      )}
    >
      <span className="absolute top-2 left-2">{componentName}</span>
      {children}
    </div>
  );
}
