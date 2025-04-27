import { Box, VStack } from "@chakra-ui/react";
import { forwardRef } from "react";

/**
 * A reusable Section component that wraps content in a styled Chakra UI Box.
 *
 * @component
 * @param {object} props - The props for the Section component.
 * @param {React.ReactNode} props.children - The content to be rendered inside the section.
 * @param {string} [props.bg] - Optional background color for the section.
 */

const Section = forwardRef(({ children, ...props }, ref) => {
  return (
    <Box as="section" ref={ref} w="100%" py="10" px="12" {...props}>
      <VStack>{children}</VStack>
    </Box>
  );
});

Section.displayName = "Section";

export default Section;
