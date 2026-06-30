import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--bg-primary)",
        panel: "var(--bg-secondary)",
        panelStrong: "var(--bg-tertiary)",
        accent: "var(--accent)",
        accentMuted: "var(--accent-muted)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        textTertiary: "var(--text-tertiary)",
        borderSubtle: "var(--border)",
        white: "var(--white)",
      },
      boxShadow: {
        accent: "0 16px 70px rgba(200, 255, 0, 0.18)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.34)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(255, 180, 91, 0.18), transparent 28%), radial-gradient(circle at top right, rgba(200, 255, 0, 0.12), transparent 24%)",
      },
    },
  },
  plugins: [],
};

export default config;
