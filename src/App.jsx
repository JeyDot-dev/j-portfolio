import "./App.css";
import { React } from "react";
import { useThemeProvider } from "./components/context/chakraProvider";
import { Box } from "@chakra-ui/react";
import { NavBar } from "./components/feature/NavBar";
import { LandingSection } from "./components/feature/LandingSection";
import { AboutMeSection } from "./components/feature/AboutMeSection";
import { ProjectsSection } from "./components/feature/ProjectsSection";
import { ContactMeSection } from "./components/feature/ContactMeSection";
import { Toaster } from "./components/chakra/toaster";
import { useVisibilityContext } from "./components/context/VisibilityProvider";

function App({ anchorLinks }) {
  const { isVisible, refs } = useVisibilityContext();
  const { chooseTheme } = useThemeProvider();
  return (
    <>
      <NavBar
        themeHandler={chooseTheme}
        bg="prim.subtle/50"
        anchorLinks={anchorLinks}
      />
      <Box
        as="main"
        display="flex"
        flexDirection="column"
        gap="20vh"
        justifyContent="flex-start"
      >
        <LandingSection
          bg="bg"
          id="landing-section"
          ref={refs["landing-section"]}
          isVisible={isVisible["landing-section"]}
        ></LandingSection>

        <AboutMeSection
          bg="prim.bg"
          colorPalette="sec"
          color="sec.fg"
          id="aboutme-section"
          ref={refs["aboutme-section"]}
          isVisible={isVisible["aboutme-section"]}
        />
        <ProjectsSection
          bg="prim.subtle"
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
          minH="80vh"
        ></ContactMeSection>
        <Toaster />
      </Box>
    </>
  );
}

export default App;
