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
import PortraitLogo from "./assets/42portraitLogo.svg?react";

const themes = [glaucous, mortuum];

function App() {
  const [theme, chooseTheme] = useArray(themes);
  const { language, content } = useContentContext();
  return (
    <Provider theme={theme}>
      <NavBar themeHandler={chooseTheme} />
      <Box as="main">
        <Section
          id="landing"
          minH={{ base: "100vh", lg: "95vh" }}
          // maxH={{ lg: "90vh" }}
          textAlign="center"
          pt="0"
        >
          <VStack gap={{ base: "3vh", sm: "5vh" }} align="center">
            <Icon color="prim.fg" w="80vw" h="80vw" maxH="350px" maxW="350px">
              <PortraitLogo />
            </Icon>
            <Heading
              lineHeight="1"
              size={{ base: "2xl", lg: "3xl" }}
              color="prim.fg"
              as="h1"
              gap="4"
            >
              Hi, I&apos;m {content[language].landing.heading.name}
              <br />
              <small>{content[language].landing.heading.title}</small>
            </Heading>
            <Heading color="prim.fg" as="h2" size={{ base: "xl", lg: "2xl" }}>
              {content[language].landing.subHeading}
            </Heading>
            <Box display="flex" h="12vh">
              <Text
                id="Scroll-hint-placeholed"
                my="auto"
                textStyle={{ base: "5xl", xl: "7xl" }}
                color="accent.fg"
              >
                V
              </Text>
            </Box>
            <Text color="prim.fg" textStyle="lg">
              {content[language].landing.text}
            </Text>
          </VStack>
        </Section>

        <Section
          bg="sec.bg"
          colorPalette="sec"
          id="about-me"
          pt="10vh"
          h={{ base: "100vh", lg: "95vh" }}
          px="3vw"
        >
          <Wrap
            px={{ base: "0", xl: "12%", "2xl": "18%" }}
            direction={{ base: "column", md: "row" }}
            justify={{ base: "center", lg: "space-between" }}
            align="center"
            textAlign="start"
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
              <List.Root>
                <List.Item>
                  Cillum velit ex nostrud cupidatat incididunt et laboris
                  pariatur ex esse. Exercitation deserunt reprehenderit duis est
                  do enim. Sint nulla enim amet culpa enim aliquip ipsum
                  ullamco. Consequat proident sint Lorem velit laborum consequat
                  amet qui dolor tempor id ullamco mollit nostrud. Ad irure
                  occaecat incididunt qui dolore commodo nostrud.
                </List.Item>
                <List.Item>WAPITI</List.Item>
                <List.Item>WAPITI</List.Item>
                <List.Item>WAPITI</List.Item>
              </List.Root>
            </Box>
          </Wrap>
        </Section>
        <Section
          bg="green"
          colorPalette="sec"
          id="about-me"
          pt="10vh"
          h={{ base: "100vh", lg: "95vh" }}
        ></Section>
        <Section
          bg="green"
          colorPalette="sec"
          id="about-me"
          pt="10vh"
          h={{ base: "100vh", lg: "95vh" }}
        ></Section>
      </Box>
    </Provider>
  );
}

export default App;
