import { Section } from "../layout/Section";
import { VStack, Heading, Text } from "@chakra-ui/react";
import { useContentContext } from "../context/contentProvider";

export function LandingSection({ children, ...props }) {
  const { content, language } = useContentContext();
  return (
    <Section
      display="flex"
      flexDirection="column"
      id="landing"
      textAlign="center"
      pt="10vh"
      minH="50vh"
      {...props}
    >
      <VStack gap={{ base: "6vh", sm: "10vh" }} align="center">
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
          {content.landing.heading[language].name}
          <br />
          <small>{content.landing.heading[language].title}</small>
        </Heading>
        <Heading color="prim.fg" as="h2" size={{ base: "xl", lg: "2xl" }}>
          {content.landing.subHeading[language]}
        </Heading>
        <Text color="prim.fg" textStyle="lg">
          {content.landing.text[language]}
        </Text>
      </VStack>
      <Text
        id="Scroll-hint-placeholder"
        mt="10vh"
        textStyle={{ base: "5xl", xl: "7xl" }}
        color="accent.fg"
        animationName="bounce"
        animationDuration="1.5s"
        animationTimingFunction="ease-in-out"
        animationIterationCount="infinite"
        data-state="open"
      >
        V
      </Text>
    </Section>
  );
}
