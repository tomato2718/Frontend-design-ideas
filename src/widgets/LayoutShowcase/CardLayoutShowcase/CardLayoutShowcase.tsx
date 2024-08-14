import { CardLayout } from "@/shared/CardLayout";

import { SideNav } from "./nav";

export function CardLayoutShowcase() {
  return (
    <CardLayout SideNav={<SideNav />}>
      <span className="m-2">example contents</span>
    </CardLayout>
  );
}
