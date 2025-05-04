import {
  Wrap,
  VStack,
  Icon,
  Text,
  Separator,
  Box,
  List,
} from "@chakra-ui/react";
import PortraitLogo from "../../assets/42portraitLogo.svg?react";
import { useContentContext } from "../context/contentProvider";
import { ObjectToIconListWithTooltip } from "../ui/ObjectToIconListWithTooltip";
import { Section } from "../layout/Section";
import { content, filterSkills } from "../context/content";

const skills = [
  ["languages", filterSkills(content.aboutMe.languages)],
  ["libs", filterSkills(content.aboutMe.libs)],
  ["tools", filterSkills(content.aboutMe.tools)],
];

export function AboutMeSection({ ...props }) {
  const { language, content } = useContentContext();
  return (
    <Section
      // bg="bg"
      colorPalette="default"
      id="aboutme"
      px="3vw"
      display="flex"
      flexDirection="column"
      align="center"
      justify="center"
      {...props}
    >
      <Wrap
        px={{ "base": "2vw", "xl": "8vw", "2xl": "14vw" }}
        direction={{ base: "column", xl: "row" }}
        justify={{ base: "center", xl: "space-between" }}
        align="center"
        textAlign="start"
        gap="8rem"
        minW="80vw"
        my="auto"
        mx="auto"
      >
        <VStack w={{ base: "100%", sm: "28rem" }} gap="9" pb="0">
          <Icon w="80vw" h="80vw" maxH="350px" maxW="350px">
            <PortraitLogo />
          </Icon>
          <Text>{content.aboutMe.intro[language]}</Text>
          <Separator
            size="xs"
            // my="1rem"
            borderColor="prim.subtle"
            w="100%"
          />
          <Text>{content.aboutMe.personal[language]}</Text>
        </VStack>
        <Box w={{ base: "100%", sm: "28rem" }}>
          <List.Root variant="plain" color="accent.fg" gap="2rem">
            {skills.map(([title, items]) => {
              return (
                <ObjectToIconListWithTooltip
                  key={`aboutme-skills-${title}`}
                  items={items}
                  listProps={{ gap: "1rem" }}
                >
                  {title}
                </ObjectToIconListWithTooltip>
              );
            })}
          </List.Root>
        </Box>
      </Wrap>
    </Section>
  );
}
