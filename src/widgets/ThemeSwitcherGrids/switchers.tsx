import { useState } from "react";
import clsx from "clsx";

import { EclipseToggle } from "@/shared/EclipseSwitcher";

function ImpContainer({
  componentName,
  children,
}: {
  componentName: string;
  children: React.ReactElement;
}) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center h-full",
        "bg-grayscale-2 text-grayscale-11",
        "relative",
      )}
    >
      <span className="absolute top-2 left-2">{componentName}</span>
      {children}
    </div>
  );
}

export function EclipseToggleImp() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={clsx(isDarkMode ? "dark" : "light", "h-full")}>
      <ImpContainer componentName="EclipseToggle">
        <EclipseToggle
          themeState={{
            isDarkMode: isDarkMode,
            switchTheme: () => setIsDarkMode(!isDarkMode),
          }}
          size={12}
        />
      </ImpContainer>
    </div>
  );
}
