import { EclipseToggleImp } from "./switchers";

export function ThemeSwitcherGrids() {
  return (
    <div className="h-full grid grid-cols-8 grid-rows-6">
      <GridContainer>
        <EclipseToggleImp />
      </GridContainer>
    </div>
  );
}

export function GridContainer({ children }: { children: React.ReactElement }) {
  return (
    <div className="col-span-1 row-span-1 border border-[#000000]">
      {children}
    </div>
  );
}
