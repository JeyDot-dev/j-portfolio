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

export const Section = forwardRef(({ children, ...props }, ref) => {
  return (
    <Box
      // display="flex"
      // direction="column"
      // align="center"
      // justify="center"
      as="section"
      ref={ref}
      w="100%"
      py="10"
      px={{ base: "10%", lg: "15%" }}
      // minH={{ base: "100vh", lg: "95vh" }}
      minH="100vh"
      {...props}
    >
      {children}
    </Box>
  );
});

Section.displayName = "Section";
