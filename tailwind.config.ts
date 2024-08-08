import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      grayscale: {
        1: "var(--grayscale-1)",
        2: "var(--grayscale-2)",
        3: "var(--grayscale-3)",
        4: "var(--grayscale-4)",
        5: "var(--grayscale-5)",
        6: "var(--grayscale-6)",
        7: "var(--grayscale-7)",
        8: "var(--grayscale-8)",
        9: "var(--grayscale-9)",
        10: "var(--grayscale-10)",
        11: "var(--grayscale-11)",
        12: "var(--grayscale-12)",
      },
      accent: {
        1: "var(--accent-1)",
        2: "var(--accent-2)",
        3: "var(--accent-3)",
        4: "var(--accent-4)",
        5: "var(--accent-5)",
        6: "var(--accent-6)",
        7: "var(--accent-7)",
        8: "var(--accent-8)",
        9: "var(--accent-9)",
        10: "var(--accent-10)",
        11: "var(--accent-11)",
        12: "var(--accent-12)",
      },
      transparent: "transparent",
    },
  },
};
export default config;
