import { Box, Button, List, Link } from "@chakra-ui/react";
import { Nav } from "../layout/Nav";
import { ThemeSwitchButton } from "../ui/themeSwitchButton";
import { ColorModeButton } from "../chakra/color-mode";
import { useContentContext } from "../context/contentProvider";
import { useRef, useEffect } from "react";

export const NavBar = ({ themeHandler, anchorLinks = {}, ...props }) => {
  const { language, toggleLanguage, content } = useContentContext();
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
  const scrollPos = useRef({ current: "0", old: "0" });
  const headerRef = useRef(null);

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    if (currentScroll > scrollPos.current.old && headerRef.current) {
      headerRef.current.style.transform = "translateY(-200px)";
    } else if (headerRef.current) {
      headerRef.current.style.transform = "translateY(0)";
    }
    scrollPos.current.old = currentScroll;
  };

  console.log("LINK:", content.navBar.download.link[language]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Nav justify="space-between" {...props}>
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
        <Link href={content.navBar.download.link[language]} download>
          {content.navBar.download.label[language]}
        </Link>
      </List.Root>
    </Nav>
  );
};
