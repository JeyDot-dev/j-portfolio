import { HStack } from "@chakra-ui/react";

/**
 * A responsive navigation bar component built with Chakra UI's HStack.
 *
 * @param {Object} props - Additional props to pass to the HStack component.
 * @param {React.ReactNode} children - The child elements to render inside the navigation bar.
 *
 * @returns {JSX.Element} The navigation bar component.
 */

const Nav = ({ children, ...props }) => {
  return (
    <HStack
      as="nav"
      zIndex="overlay"
      position="fixed"
      w="100%"
      h="16"
      px="auto"
      justify="center"
      align="center"
      bg="prim.bg/80"
      {...props}
    >
      {children}
    </HStack>
  );
};

export default Nav;
