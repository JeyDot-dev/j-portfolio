import { Section } from "../layout/Section";
import { VStack, Heading, Text, Button, Icon } from "@chakra-ui/react";
import { useContentContext } from "../context/contentProvider";
import { MdKeyboardArrowDown } from "react-icons/md";

export function LandingSection({ children, ...props }) {
  const { content, language } = useContentContext();
  const handleClick = (anchor) => {
    const elementId = anchor;
    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };
  return (
    <Section
      display="flex"
      flexDirection="column"
      id="landing"
      textAlign="center"
      pt="8rem"
      minH="50vh"
      mt="0"
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
      <Button
        id="Scroll-hint-placeholder"
        mt="20%"
        textStyle={{ base: "5xl", xl: "7xl" }}
        color="accent.fg"
        animationName="bounce"
        animationDuration="1.5s"
        animationTimingFunction="ease-in-out"
        animationIterationCount="infinite"
        data-state="open"
        variant="plain"
        onClick={() => handleClick("aboutme-section")}
      >
        <Icon h="6rem" w="6rem" _hover={{ h: "7rem", w: "7rem" }}>
          <MdKeyboardArrowDown />
        </Icon>
      </Button>
    </Section>
  );
}
