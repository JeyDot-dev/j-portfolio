import { Box, Button, List, Link } from "@chakra-ui/react";
import { Nav } from "../layout/nav";
import { ThemeSwitchButton } from "../ui/themeSwitchButton";
import { ColorModeButton } from "../chakra/color-mode";
import { useContentContext } from "../context/contentProvider";

export const NavBar = ({ themeHandler, anchorLinks = {}, ...props }) => {
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
        {Object.entries(anchorLinks).map((link) => {
          return (
            <List.Item key={link[1] + "-menu-anchor-link"}>
              <Link href={"#" + link[1]}>{link[0]}</Link>
            </List.Item>
          );
        })}
      </List.Root>
    </Nav>
  );
};
