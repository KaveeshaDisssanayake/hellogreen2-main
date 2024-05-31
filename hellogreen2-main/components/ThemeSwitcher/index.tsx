"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { FC, ReactElement } from "react";

const ThemeSwitcher: FC = (): ReactElement => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div
      onClick={() => toggleTheme()}
      className="flex items-center cursor-pointer"
    >
      {theme === "light" ? (
        <div>
          <Moon />
        </div>
      ) : (
        <div>
          <Sun />
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
