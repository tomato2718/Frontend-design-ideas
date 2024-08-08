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
        "flex flex-col h-full p-0.5",
        "bg-grayscale-1 text-grayscale-11",
      )}
    >
      <span className="p-1">{componentName}</span>
      <div
        className={clsx(
          "grow flex items-center justify-center",
          "bg-grayscale-2",
          "border rounded-md border-grayscale-3",
        )}
      >
        {children}
      </div>
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
