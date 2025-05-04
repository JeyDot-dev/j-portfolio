import {
  useBreakpointValue,
  Drawer,
  Button,
  Box,
  HStack,
} from "@chakra-ui/react";
import { CiMenuBurger } from "react-icons/ci";
/**
 * A responsive navigation component that adapts to mobile and desktop layouts.
 * On mobile, it displays a drawer menu triggered by a button. On desktop, it displays
 * a horizontal navigation bar.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The content to be displayed inside the navigation component.
 * @param {string} [props.bg] - The background color for the navigation component. Defaults to "accent.bg" for desktop and "accent.bg/20" for mobile.
 * @param {Object} [props.rest] - Additional props to be passed to the component.
 *
 * @returns {JSX.Element} The rendered navigation component.
 */

const defaultSize = "6rem";
const defaultMb = "0";

export const Nav = ({ children, ...props }) => {
  const isMobile = useBreakpointValue(
    { base: true, lg: false },
    { fallback: false },
  );
  return isMobile ? (
    <Drawer.Root placement="bottom">
      {/* <Drawer.Backdrop bg={props.bg ? props.bg + "/20" : "sec.500/20"} /> */}
      <Drawer.Backdrop bg="gray/10" />
      <Drawer.Trigger asChild>
        <Button
          position="fixed"
          zIndex="sticky"
          right="2rem"
          bottom="2rem"
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
          pb="2rem"
          {...props}
        >
          <Drawer.Body
            display="flex"
            flexDirection="column"
            justifyItems="center"
            alignItems="center"
            gap="2rem"
          >
            {children}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  ) : (
    <>
      <HStack
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
      </HStack>
      <Box h={defaultSize} mb={defaultMb} {...props} bg="none"></Box>
    </>
  );
};
