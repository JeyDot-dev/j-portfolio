"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "../chakra/color-mode";
export function Provider({ theme, ...props }) {
  return (
    <ChakraProvider value={theme}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
