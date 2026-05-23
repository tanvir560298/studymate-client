import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="btn btn-ghost btn-circle border border-base-content/10 bg-base-100/70"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FiMoon className="text-lg" />
      ) : (
        <FiSun className="text-lg" />
      )}
    </button>
  );
};

export default ThemeToggle;
