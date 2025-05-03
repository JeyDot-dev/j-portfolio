import "./App.css";
import { React } from "react";
import { Provider } from "./components/context/chakraProvider";
import { mortuum } from "./themes/mortuum";
import { glaucous } from "./themes/glaucous";
import { useArray } from "./hooks/useArray";
import { PlayGround } from "./components/modules/playGround";
import { Section } from "./components/layout/section";
import {
  Box,
  Text,
  Heading,
  VStack,
  HStack,
  Separator,
  List,
  Spacer,
  Wrap,
  Icon,
  Stack,
  Card,
  Flex,
} from "@chakra-ui/react";
import { NavBar } from "./components/feature/NavBar";
import { useContentContext } from "./components/context/contentProvider";
import { LandingSection } from "./components/feature/LandingSection";
import { ObjectToIconListWithTooltip } from "./components/ui/ObjectToIconListWithTooltip";
import PortraitLogo from "./assets/42portraitLogo.svg?react";
import { AboutMeSection } from "./components/feature/AboutMeSection";
import { filterSkills } from "./components/context/content";
import { ProjectCard } from "./components/ui/ProjectCard";
import { ProjectsSection } from "./components/feature/ProjectsSection";
import { ContactMeSection } from "./components/feature/ContactMeSection";
import { Toaster } from "./components/chakra/toaster";

const themes = [glaucous, mortuum];
const anchorLinks = {
  "Home": "landing-section",
  "About me": "aboutme-section",
  "My projects": "projects-section",
  "Contact me": "contactme-section",
};

function App() {
  const [theme, chooseTheme] = useArray(themes);
  const { language, content } = useContentContext();
  return (
    <Provider theme={theme}>
      <Box as="main" pt="">
        <LandingSection bg="bg" id="landing-section">
          <NavBar
            themeHandler={chooseTheme}
            top="0"
            bg="prim.subtle/50"
            anchorLinks={anchorLinks}
          />
        </LandingSection>

        <AboutMeSection
          bg="prim.bg"
          colorPalette="sec"
          color="sec.fg"
          id="aboutme-section"
        />
        <ProjectsSection
          bg="prim.subtle"
          colorPalette="sec"
          id="projects-section"
        ></ProjectsSection>

        <ContactMeSection
          colorPalette="accent"
          id="contactme-section"
        ></ContactMeSection>
        <Toaster />
      </Box>
    </Provider>
  );
}

export default App;
