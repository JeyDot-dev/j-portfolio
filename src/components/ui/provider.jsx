"use client";
import PropTypes from "prop-types";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";
export function Provider({ theme, ...props }) {
  return (
    <ChakraProvider value={theme}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
Provider.propTypes = {
  theme: PropTypes.object.isRequired,
};
