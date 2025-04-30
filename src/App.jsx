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
} from "@chakra-ui/react";
import { NavBar } from "./components/feature/NavBar";
import { useContentContext } from "./components/context/contentProvider";
import { Landing } from "./components/feature/Landing";
import { ObjectToIconListWithTooltip } from "./components/ui/ObjectToIconListWithTooltip";
import PortraitLogo from "./assets/42portraitLogo.svg?react";
import { AboutMeSection } from "./components/feature/AboutMeSection";

const themes = [glaucous, mortuum];
const anchorLinks = { "Home": "landing", "About me": "about-me" };

function App() {
  const [theme, chooseTheme] = useArray(themes);
  const { language, content } = useContentContext();
  return (
    <Provider theme={theme}>
      <Box as="main" pt="">
        <Landing bg="gray.bg">
          <NavBar
            themeHandler={chooseTheme}
            top="0"
            bg="prim.subtle/50"
            anchorLinks={anchorLinks}
          />
        </Landing>

        <AboutMeSection bg="prim.bg" colorPalette="sec" color="sec.fg" />

        {/* ==================== EXTRA SECTION 1 ==================== */}
        <Section
          bg="sec.bg"
          colorPalette="sec"
          id="extra-section-1"
          pt="10vh"
          h={{ base: "100vh", lg: "95vh" }}
        >
          <PlayGround></PlayGround>
        </Section>

        {/* ==================== EXTRA SECTION 2 ==================== */}
        <Section
          bg="green"
          colorPalette="sec"
          id="extra-section-2"
          pt="10vh"
          h={{ base: "100vh", lg: "95vh" }}
        ></Section>
      </Box>
    </Provider>
  );
}

export default App;
