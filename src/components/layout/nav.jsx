import {
  useBreakpointValue,
  Drawer,
  Wrap,
  Button,
  Box,
  VStack,
} from "@chakra-ui/react";
import { CiMenuBurger } from "react-icons/ci";

/**
 * A responsive navigation bar component built with Chakra UI's HStack.
 *
 * @param {Object} props - Additional props to pass to the HStack component.
 * @param {React.ReactNode} children - The child elements to render inside the navigation bar.
 *
 * @returns {JSX.Element} The navigation bar component.
 */
const defaultSize = "6rem";
const defaultMb = "3rem";
export const Nav = ({ children, ...props }) => {
  const isMobile = useBreakpointValue(
    { base: true, lg: false },
    { fallback: false },
  );
  console.log(isMobile);
  return isMobile ? (
    <>
      <Drawer.Root placement="top">
        <Drawer.Backdrop bg={props.bg ? props.bg + "/20" : "sec.500/20"} />
        <Drawer.Trigger asChild>
          <Button
            position="fixed"
            zIndex="sticky"
            right="1rem"
            top="1rem"
            h="3.5rem"
            w="3.5rem"
            variant="subtle"
          >
            <CiMenuBurger />
          </Button>
        </Drawer.Trigger>
        <Drawer.Positioner>
          <Drawer.Content
            bg={props.bg ? props.bg : "accent.bg"}
            align="center"
            {...props}
            h="20%"
          >
            <Drawer.Body>
              <VStack h="100%" justify="center" gap="20%">
                {children}
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
      <Box mb="3rem"></Box>
    </>
  ) : (
    <>
      <Wrap
        gap="5"
        as="nav"
        zIndex="overlay"
        position="fixed"
        w="100%"
        px="3rem"
        py="1.5rem"
        h={defaultSize}
        justify={{ base: "center", md: "space-between" }}
        align="center"
        bg="accent.bg/80"
        {...props}
      >
        {children}
      </Wrap>
      <Box h={defaultSize} mb={defaultMb} {...props} bg="none"></Box>
    </>
  );
};
