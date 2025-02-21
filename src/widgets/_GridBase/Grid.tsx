import { Children } from "react";

export function GridLayout({ children }: { children: React.ReactNode }) {
  const childrenArray = Children.toArray(children);
  return (
    <div className="h-full grid grid-cols-8 grid-rows-6">
      {childrenArray.map((element, index) => (
        <GridContainer key={index}>
          <>{element}</>
        </GridContainer>
      ))}
    </div>
  );
}

function GridContainer({ children }: { children: React.ReactElement }) {
  return (
    <div className="col-span-1 row-span-1 border border-[#000000]">
      {children}
    </div>
  );
}
