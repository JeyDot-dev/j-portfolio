import React from "react";
import { Section } from "../layout/section";
import { VStack, Icon, Heading, Box, Text } from "@chakra-ui/react";
import { useContentContext } from "../context/contentProvider";
// import PortraitLogo from "../../assets/42portraitLogo.svg?react";
export function Landing({ children, ...props }) {
  const { content, language } = useContentContext();
  return (
    <Section id="landing" textAlign="center" pt="6rem" {...props}>
      <VStack gap={{ base: "3vh", sm: "5vh" }} align="center">
        {/* <Icon color="prim.fg" w="80vw" h="80vw" maxH="350px" maxW="350px">
          <PortraitLogo />
        </Icon> */}
        {children}
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
            id="Scroll-hint-placeholder"
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
  );
}
