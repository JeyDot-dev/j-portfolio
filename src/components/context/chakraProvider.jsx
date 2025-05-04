"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "../chakra/color-mode";
import { glaucous } from "../../themes/glaucous";
import { mortuum } from "../../themes/mortuum";
import { useArray } from "../../hooks/useArray";
import { useContext } from "react";
import { createContext } from "react";
const ThemeContext = createContext();
const themes = [glaucous, mortuum];
export function Provider({ children, ...props }) {
  const [theme, chooseTheme] = useArray(themes);
  return (
    <ChakraProvider value={theme}>
      <ColorModeProvider {...props}>
        <ThemeContext.Provider value={{ chooseTheme: chooseTheme }}>
          {children}
        </ThemeContext.Provider>
      </ColorModeProvider>
    </ChakraProvider>
  );
}
export const useThemeProvider = () => useContext(ThemeContext);
