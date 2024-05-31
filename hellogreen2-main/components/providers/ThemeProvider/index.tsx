"use client";
import { FC, ReactElement } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import type { ThemeProviderProps as NextThemeProviderProps } from "next-themes/dist/types";

const ThemeProvider: FC<NextThemeProviderProps> = ({
  children,
  ...props
}): ReactElement => {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};

export default ThemeProvider;
