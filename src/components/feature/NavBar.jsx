import { Box, Button, List, Link } from "@chakra-ui/react";
import { Nav } from "../layout/Nav";
import { ThemeSwitchButton } from "../ui/themeSwitchButton";
import { ColorModeButton } from "../chakra/color-mode";
import { useContentContext } from "../context/contentProvider";
import { useRef } from "react";

export const NavBar = ({ themeHandler, anchorLinks = {}, ...props }) => {
  const { language, toggleLanguage, content } = useContentContext();
  const headerRef = useRef(null);
  const handleClick = (anchor) => {
    const elementId = anchor;
    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <Nav
      ref={headerRef}
      justify="space-between"
      backdropFilter="blur(6px)"
      {...props}
    >
      <Box
        display="flex"
        gap="1.3rem"
        // flexDirection={{ base: "column", lg: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <Button
          onClick={toggleLanguage}
          minW="3.4rem"
          fontSize="lg"
          variant="ghost"
        >
          {language}
        </Button>
        <ColorModeButton />

        <ThemeSwitchButton
          w=""
          variant="ghost"
          action="next"
          handler={themeHandler}
          textStyle="md"
        >
          Swap Theme
        </ThemeSwitchButton>
      </Box>
      <List.Root
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        align="center"
        gap="3rem"
        justify="center"
        alignItems="center"
        variant="plain"
      >
        {Object.entries(anchorLinks).map(([key, id]) => {
          return (
            <List.Item key={id + "-menu-anchor-link"}>
              <Link
                textStyle="md"
                onClick={() => {
                  handleClick(id);
                }}
              >
                {content.navBar[key][language]}
              </Link>
            </List.Item>
          );
        })}
        <Link
          href={content.navBar.download.link[language]}
          bg="accent.bg"
          px="1rem"
          py="0.5rem"
          rounded="3xl"
          textStyle="md"
          download
        >
          {content.navBar.download.label[language]}
        </Link>
      </List.Root>
    </Nav>
  );
};
