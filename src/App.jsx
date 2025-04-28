import "./App.css";
import { React } from "react";
import { Spacer, VStack } from "@chakra-ui/react";
import { Provider } from "./context/chakraProvider";
import { mortuum } from "./themes/mortuum";
import { glaucous } from "./themes/glaucous";
import { useArray } from "./hooks/useArray";
import { PlayGround } from "./components/modules/playGround";
import { Section } from "./components/layout/section";
import { Box, List } from "@chakra-ui/react";
import { ColorModeButton } from "./components/chakra/color-mode";
import { Nav } from "./components/layout/nav";
import { ThemeSwitchButton } from "./components/ui/themeSwitchButton";

const themes = [glaucous, mortuum];

function App() {
  const [theme, chooseTheme] = useArray(themes);
  return (
    <Provider theme={theme}>
      <Nav>
        <Box w="17rem">Yes</Box>
        <Box>
          <ThemeSwitchButton
            action="previous"
            handler={chooseTheme}
          ></ThemeSwitchButton>

          <ColorModeButton />

          <ThemeSwitchButton
            action="next"
            handler={chooseTheme}
          ></ThemeSwitchButton>
        </Box>
        <List.Root
          flexDirection="row"
          gap="1rem"
          justifyContent={{ sm: "center", base: "end" }}
          variant="plain"
          w="17rem"
        >
          <List.Item>Item 1</List.Item>
          <List.Item>Item 2</List.Item>
        </List.Root>
      </Nav>

      <VStack as="main">
        <PlayGround />

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
      </VStack>
    </Provider>
  );
}

export default App;
