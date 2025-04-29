import { Box, Button, List } from "@chakra-ui/react";
import { Nav } from "../layout/nav";
import { ThemeSwitchButton } from "../ui/themeSwitchButton";
import { ColorModeButton } from "../chakra/color-mode";
import { useContentContext } from "../context/contentProvider";

export const NavBar = ({ themeHandler, ...props }) => {
  const { language, toggleLanguage, content } = useContentContext();
  return (
    <Nav {...props}>
      <Box w="17rem">
        <Button onClick={toggleLanguage}>{language}</Button>
      </Box>
      <Box>
        <ThemeSwitchButton
          action="previous"
          handler={themeHandler}
        ></ThemeSwitchButton>

        <ColorModeButton />

        <ThemeSwitchButton
          action="next"
          handler={themeHandler}
        ></ThemeSwitchButton>
      </Box>
      <List.Root
        flexDirection="row"
        gap="1rem"
        justifyContent={{ lg: "end", base: "center" }}
        variant="plain"
        w="17rem"
      >
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
      </List.Root>
    </Nav>
  );
};
