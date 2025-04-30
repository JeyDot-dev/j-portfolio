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
import { Section } from "../layout/section";

export function AboutMeSection(props) {
  const { language, content } = useContentContext();
  return (
    <Section
      bg="bg"
      colorPalette="default"
      id="about-me"
      pt="10vh"
      px="3vw"
      display="flex"
      direction="column"
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
        minW="80vw"
        my="auto"
        mx="auto"
      >
        <VStack w={{ base: "100%", sm: "28rem" }} gap="9" pb="10vh">
          <Icon w="80vw" h="80vw" maxH="350px" maxW="350px">
            <PortraitLogo />
          </Icon>
          <Text>{content[language].aboutMe.intro}</Text>
          <Separator
            size="xs"
            // my="1rem"
            borderColor="prim.subtle"
            w="100%"
          />
          <Text>{content[language].aboutMe.personal}</Text>
        </VStack>
        <Box w={{ base: "100%", sm: "28rem" }}>
          <List.Root variant="plain" color="accent.fg" gap="12">
            <ObjectToIconListWithTooltip items={content.skills.languages}>
              Languages:
            </ObjectToIconListWithTooltip>
            <ObjectToIconListWithTooltip items={content.skills.libs}>
              Libs:
            </ObjectToIconListWithTooltip>
            <ObjectToIconListWithTooltip items={content.skills.tools}>
              Tools:
            </ObjectToIconListWithTooltip>
          </List.Root>
        </Box>
      </Wrap>
    </Section>
  );
}
