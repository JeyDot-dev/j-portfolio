import {
  Card,
  Image,
  Box,
  Text,
  List,
  Heading,
  HStack,
  Link,
} from "@chakra-ui/react";
import { ObjectToIconListWithTooltip } from "./ObjectToIconListWithTooltip";
import { filterSkills } from "../context/content";

export function ProjectCard({
  imageLink = "https://picsum.photos/300/200",
  animatedLink = "https://placehold.co/600x400",
  title = "Card Title",
  description = "Numquam et architecto nobis ab modi laborum magni repudiandae, laboriosam voluptatem explicabo quos alias, ad vel. Quo, autem. Laborum tempore ea a!",
  anecdote = "Esse cupidatat velit minim ut esse sit eu deserunt amet Lorem.",
  techStack = ["javascript", "C++", "Kotlin", "react", "Git/github"],
  projectLink = "",
  githubLink = "",
  stackProps,
  ...props
}) {
  const iconSize = techStack.length < 6 ? "3rem" : "2.1rem";
  return (
    <Card.Root
      size="lg"
      w="370px"
      h="32rem"
      maxW="370px"
      rounded="lg"
      {...props}
    >
      <Card.Header overflow="hidden" p="0" h="40%" position="relative">
        <Box
          w="100%"
          h="100%"
          bgSize="cover"
          bgImage={{ base: `url(${animatedLink})`, lg: `url(${imageLink})` }}
          transition="background-image 0.3s ease-in-out"
          zIndex="base"
          _hover={{
            bgImage: `url(${animatedLink})`,
            zIndex: "popover",
          }}
          roundedTop="md"
        ></Box>
        <Box
          bg="accent.solid/24"
          h="100%"
          w="100%"
          position="absolute"
          pointerEvents="none"
          zIndex="10"
        ></Box>
        <Card.Title
          position="absolute"
          bottom="1rem"
          left="1rem"
          px="0.5rem"
          bg="prim.subtle/60"
          w="12rem"
          h="1.8rem"
          rounded="sm"
        >
          {title}
        </Card.Title>
      </Card.Header>

      <Card.Body p="0" pt="1rem" h="50%">
        <Box mx="1.3rem" h="65%">
          <Card.Description>{description}</Card.Description>
          <Text textStyle="xs" mt="0.6rem">
            {anecdote}
          </Text>
        </Box>
        <HStack h="30%" {...stackProps}>
          <Heading
            as="h3"
            textStyle="xs"
            writingMode="vertical-rl"
            textOrientation="upright"
            fontWeight="black"
            letterSpacing="-0.15rem"
            lineHeight="12px"
            mx="0.5rem"
            ml="1rem"
            mr="1rem"
            fontSize="0.6rem"
          >
            STACK
          </Heading>
          <ObjectToIconListWithTooltip
            items={filterSkills(techStack)}
            iconProps={{ h: iconSize, w: iconSize }}
            // iconProps={{ h: "3rem", w: "3rem" }}
          ></ObjectToIconListWithTooltip>
        </HStack>
      </Card.Body>
      <Card.Footer pb="1.3rem" h="10%">
        {typeof projectLink === "string" && projectLink.length !== 0 && (
          <Link mr="auto" href={projectLink} target="_blank" color="accent.fg">
            Try it !
          </Link>
        )}
        {typeof githubLink === "string" && githubLink.length !== 0 && (
          <Link ml="auto" href={githubLink} target="_blank" color="accent.fg">
            Github link
          </Link>
        )}
      </Card.Footer>
    </Card.Root>
  );
}
