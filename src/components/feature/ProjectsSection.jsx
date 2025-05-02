import { Flex } from "@chakra-ui/react";
import { Section } from "../layout/section";
import { ProjectCard } from "../ui/ProjectCard";
import { useContentContext } from "../context/contentProvider";

export function ProjectsSection(props) {
  const { language, content } = useContentContext();
  return (
    <Section
      bg="prim.subtle"
      colorPalette="prim"
      id="projects-section"
      py="3vh"
      px="3vw"
      minH="100vh"
      display="flex"
      flexDirection="column"
      align="center"
      justify="center"
      {...props}
    >
      <Flex
        px={{ "base": "2vw", "xl": "8vw", "2xl": "14vw" }}
        wrap="wrap"
        direction={{ base: "column", xl: "row" }}
        gap="6.5rem"
        justify="space-around"
        align="center"
        alignItems="center"
        my="auto"
      >
        {content.projects.cards.map((card) => {
          return (
            <ProjectCard
              key={card.title + "-projectCard-key"}
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
    </Section>
  );
}
