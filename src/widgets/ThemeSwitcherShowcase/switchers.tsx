import { useState } from "react";
import clsx from "clsx";

import { EclipseToggle } from "@/shared/EclipseSwitcher";

function Container({
  componentName,
  isDarkMode,
  children,
}: {
  componentName: string;
  isDarkMode: boolean;
  children: React.ReactElement;
}) {
  return (
    <div className={clsx(isDarkMode ? "dark" : "light", "h-full")}>
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
    </div>
  );
}

export function EclipseToggleImp() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <Container componentName="EclipseToggle" isDarkMode={isDarkMode}>
      <EclipseToggle
        themeState={{
          isDarkMode: isDarkMode,
          switchTheme: () => setIsDarkMode(!isDarkMode),
        }}
        size={12}
      />
    </Container>
  );
}
