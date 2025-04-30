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
import { Tooltip } from "./components/chakra/tooltip";
import { ObjectToIconListWithTooltip } from "./components/ui/ObjectToIconListWithTooltip";

const themes = [glaucous, mortuum];

function App() {
  const [theme, chooseTheme] = useArray(themes);
  const { language, content } = useContentContext();
  return (
    <Provider theme={theme}>
      <NavBar themeHandler={chooseTheme} />
      <Box as="main">
        {/* ==================== LANDING SECTION ==================== */}
        <Landing />

        {/* ==================== ABOUT ME SECTION ==================== */}
        <Section
          bg="sec.bg"
          colorPalette="sec"
          color="sec.fg"
          id="about-me"
          pt="10vh"
          px="3vw"
          display="flex"
          direction="column"
          align="center"
          justify="center"
        >
          <Wrap
            px={{ "base": "2vw", "xl": "8vw", "2xl": "14vw" }}
            direction={{ base: "column", xl: "row" }}
            justify={{ base: "center", xl: "space-between" }}
            align="center"
            textAlign="start"
            gap="5rem"
            my="auto"
            mx="auto"
          >
            <VStack w={{ base: "100%", sm: "28rem" }}>
              <Text>{content[language].aboutMe.intro}</Text>
              <Separator
                size="md"
                my="1rem"
                borderColor="prim.subtle"
                w="100%"
              />
              <Text>{content[language].aboutMe.personal}</Text>
            </VStack>
            <Box w={{ base: "100%", sm: "28rem" }}>
              <List.Root variant="plain" color="accent.fg" gap="12">
                <ObjectToIconListWithTooltip items={content.skills.languages}>
                  Languages:
                </ObjectToIconListWithTooltip>
                <ObjectToIconListWithTooltip items={content.skills.libs}>
                  Libs:
                </ObjectToIconListWithTooltip>
                <ObjectToIconListWithTooltip items={content.skills.tools}>
                  Tools:
                </ObjectToIconListWithTooltip>
              </List.Root>
            </Box>
          </Wrap>
        </Section>

        {/* ==================== EXTRA SECTION 1 ==================== */}
        <Section
          bg="green"
          colorPalette="sec"
          id="extra-section-1"
          pt="10vh"
          h={{ base: "100vh", lg: "95vh" }}
        ></Section>

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
