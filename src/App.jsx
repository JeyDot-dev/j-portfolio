import "./App.css";
import { React } from "react";
import { Provider } from "./components/context/chakraProvider";
import { mortuum } from "./themes/mortuum";
import { glaucous } from "./themes/glaucous";
import { useArray } from "./hooks/useArray";
import { PlayGround } from "./components/modules/playGround";
import { Section } from "./components/layout/section";
import { Box, Text, Heading, VStack } from "@chakra-ui/react";
import { NavBar } from "./components/feature/NavBar";
import { useContentContext } from "./components/context/contentProvider";
import PortraitLogo from "./assets/42portraitLogo.svg?react";

const themes = [glaucous, mortuum];

function App() {
  const [theme, chooseTheme] = useArray(themes);
  const { language, toggleLanguage, content } = useContentContext();
  return (
    <Provider theme={theme}>
      <NavBar themeHandler={chooseTheme} />
      <Box as="main">
        <Section id="landing">
          <VStack>
            <Box color="prim.solid" mb="3rem">
              <PortraitLogo />
            </Box>
            <Heading size="3xl" color="prim.fg">
              {content[language].landing.header}
            </Heading>
            <Text>{content[language].landing.text}</Text>
          </VStack>
        </Section>

        <Section bg="sec.bg" colorPalette="sec">
          <Box h="66vh">
            <PlayGround />
          </Box>
        </Section>
      </Box>
    </Provider>
  );
}

export default App;
