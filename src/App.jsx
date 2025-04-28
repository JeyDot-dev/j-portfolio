import "./App.css";
import { React } from "react";
import { Provider } from "./context/chakraProvider";
import { mortuum } from "./themes/mortuum";
import { glaucous } from "./themes/glaucous";
import { useArray } from "./hooks/useArray";
import { PlayGround } from "./components/modules/playGround";
import { Section } from "./components/layout/section";
import { Box } from "@chakra-ui/react";
import { NavBar } from "./components/feature/NavBar";

const themes = [glaucous, mortuum];

function App() {
  const [theme, chooseTheme] = useArray(themes);
  return (
    <Provider theme={theme}>
      <NavBar themeHandler={chooseTheme} />
      <Box as="main">
        <Section>
          <PlayGround />
        </Section>

        <Section bg="accent.bg" colorPalette="accent">
          <Box h="66vh">
            <PlayGround />
          </Box>
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
