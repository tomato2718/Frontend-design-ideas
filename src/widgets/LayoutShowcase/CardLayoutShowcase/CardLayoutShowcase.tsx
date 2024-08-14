import { useState } from "react";

import { CardLayout } from "@/shared/CardLayout";

import { SideNav } from "./nav";

export function CardLayoutShowcase() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <CardLayout
        SideNav={<SideNav themeState={{ isDarkMode, setIsDarkMode }} />}
      >
        <span className="m-2">example contents</span>
      </CardLayout>
    </div>
  );
}
