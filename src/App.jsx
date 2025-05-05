import "./App.css";
import { React, useMemo } from "react";
import { useThemeProvider } from "./components/context/chakraProvider";
import { Box } from "@chakra-ui/react";
import { NavBar } from "./components/feature/NavBar";
import { LandingSection } from "./components/feature/LandingSection";
import { AboutMeSection } from "./components/feature/AboutMeSection";
import { ProjectsSection } from "./components/feature/ProjectsSection";
import { ContactMeSection } from "./components/feature/ContactMeSection";
import { Toaster } from "./components/chakra/toaster";
import { useVisibilityContext } from "./components/context/VisibilityProvider";
const bgColor = {
  "landing-section": "bg",
  "aboutme-section": "sec.bg",
  "projects-section": "prim.subtle",
  "contactMe": "bg",
};
function App({ anchorLinks }) {
  const { isVisible, refs } = useVisibilityContext();
  const { chooseTheme } = useThemeProvider();
  const fixedBg = useMemo(() => {
    return bgColor[
      Object.entries(isVisible).find(([key, value]) => value === true)?.[0]
    ];
  }, [isVisible]);
  return (
    <>
      <Box
        zIndex="-1"
        bg={fixedBg}
        position="fixed"
        h="100vh"
        w="100vw"
        left="0"
        top="0"
        pointerEvents="none"
        transition="background 0.4s ease-in-out"
      ></Box>
      <NavBar
        themeHandler={chooseTheme}
        bg="prim.subtle/50"
        anchorLinks={anchorLinks}
      />
      <Box
        as="main"
        display="flex"
        flexDirection="column"
        gap="8rem"
        justifyContent="flex-start"
      >
        <LandingSection
          // bg="bg"
          minH="90vh"
          id="landing-section"
          ref={refs["landing-section"]}
          isVisible={isVisible["landing-section"]}
        ></LandingSection>

        <AboutMeSection
          // bg="prim.bg"
          colorPalette="sec"
          color="sec.fg"
          id="aboutme-section"
          ref={refs["aboutme-section"]}
          isVisible={isVisible["aboutme-section"]}
        />
        <ProjectsSection
          // bg="prim.subtle"
          mt="5vh"
          colorPalette="sec"
          id="projects-section"
          ref={refs["projects-section"]}
          isVisible={isVisible["projects-section"]}
        ></ProjectsSection>

        <ContactMeSection
          colorPalette="accent"
          id="contactme-section"
          ref={refs["contactme-section"]}
          isVisible={isVisible["contactme-section"]}
          minH="95vh"
        ></ContactMeSection>
        <Toaster />
      </Box>
    </>
  );
}
//TODO fix: card width/margins for narrow devices
//TODO fix: weird aspect ratios (1920:9XX)
//TODO upgrade: les clunky animations
//TODO feature: Auto scroll when opening virtual keyboard
//TODO feature: Photography section (modal)

export default App;
