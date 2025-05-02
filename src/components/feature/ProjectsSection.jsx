import { Flex } from "@chakra-ui/react";
import { Section } from "../layout/section";
import { ProjectCard } from "../ui/ProjectCard";
import { useContentContext } from "../context/contentProvider";

export function ProjectsSection(props) {
  const { language, content } = useContentContext();
  return (
    <Section
      bg="prim.subtle"
      colorPalette="sec"
      id="projects-section"
      pt="10vh"
      px="3vw"
      {...props}
    >
      <Flex
        wrap="wrap"
        direction={{ base: "column", xl: "row" }}
        gap="6rem"
        justify="space-around"
        alignItems="center"
        h="100%"
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
