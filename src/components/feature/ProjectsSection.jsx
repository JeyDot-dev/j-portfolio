import { Flex, Text } from "@chakra-ui/react";
import { Section } from "../layout/Section";
import { ProjectCard } from "../ui/ProjectCard";
import { useContentContext } from "../context/contentProvider";

export function ProjectsSection(props) {
  const { language, content } = useContentContext();
  // const refs = { "projects-section": useRef() };
  // const isMobile = useBreakpointValue(
  //   { base: true, xl: false },
  //   { fallback: false },
  // );
  // const breakpoint = isMobile ? 0.2 : 0.6;
  // const [isVisible] = useIntersectionObserver(refs, breakpoint, "0% 0% 0% 0%");
  return (
    <Section
      // bg="prim.subtle"
      colorPalette="prim"
      id="projects-section"
      px="3vw"
      display="flex"
      flexDirection="column"
      align="center"
      justify="center"
      gap="8rem"
      // ref={refs["projects-section"]}
      {...props}
      // isVisible={isVisible["projects-section"]}
    >
      <Flex
        px={{ "base": "0", "xl": "8vw", "2xl": "14vw" }}
        wrap="wrap"
        direction={{ base: "column", xl: "row" }}
        gap="6.5rem"
        justify="space-around"
        align="center"
        alignItems="center"
      >
        {content.projects.cards.map((card) => {
          return (
            <ProjectCard
              key={card.title.en + "-projectCard-key"}
              imageLink={card.imageLink}
              animatedLink={card.animatedLink}
              title={card.title[language]}
              description={card.description[language]}
              anecdote={card.anecdote[language]}
              techStack={card.techStack}
              projectLink={card.projectLink}
              githubLink={card.githubLink}
              colorPalette="prim"
              color="prim.fg"
              stackProps={{ bg: "prim.emphasized" }}
              border="none"
              boxShadow="lg"
            ></ProjectCard>
          );
        })}
      </Flex>
      <Text
        w="100%"
        textAlign="center"
        textStyle={{ base: "xl", md: "5xl" }}
        color="prim.hard"
      >
        {content.projects.checkGithub[language]}
      </Text>
    </Section>
  );
}
