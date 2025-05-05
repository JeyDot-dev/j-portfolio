import { Box } from "@chakra-ui/react";
import { forwardRef } from "react";

/**
 * A reusable Section component that wraps content in a styled Chakra UI Box.
 *
 * @component
 * @param {object} props - The props for the Section component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the section.
 * @param {string} [props.bg] - Optional background color for the section.
 */
export const Section = forwardRef(
  ({ bg, children, isVisible, ...props }, ref) => {
    return (
      <Box
        // display="flex"
        // direction="column"
        // align="center"
        // justify="center"
        as="section"
        ref={ref}
        w="100%"
        position="relative"
        px={{ base: "10%", lg: "15%" }}
        pt="6rem"
        opacity={isVisible ? 1 : 0}
        animation={
          isVisible ? "fade-in 250ms ease-in" : "fade-out 300ms ease-out"
        }
        // minH={{ base: "100vh", lg: "95vh" }}
        minH="50vh"
        {...props}
      >
        {children}
        {/* <Box
          zIndex="-1"
          bg={bg}
          position="fixed"
          h="100%"
          w="100%"
          left="0"
          top="0"
          pointerEvents="none"
        ></Box> */}
      </Box>
    );
  },
);

Section.displayName = "Section";
