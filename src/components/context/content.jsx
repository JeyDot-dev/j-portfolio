import { Link } from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import { RiHtml5Fill } from "react-icons/ri";
import {
  SiKotlin,
  SiChakraui,
  SiFormik,
  SiGnubash,
  SiAdobe,
  SiJavascript,
  SiElasticstack,
  SiDjango,
  SiPostgresql,
  SiNginx,
} from "react-icons/si";
import transcendenceAnimated from "../../assets/transcendenceAnimated.webp";
import transcendenceStill from "../../assets/transcendenceStill.webp";
import { BsBootstrapFill } from "react-icons/bs";
import { FaGitAlt, FaDocker } from "react-icons/fa6";
import CppLogo from "../../assets/cppModified.svg?react";

export const content = {
  skills: {
    languages: {
      "C++": <CppLogo />,
      "JavaScript": <SiJavascript />,
      "HTML, CSS": <RiHtml5Fill />,
      "Kotlin": <SiKotlin />,
      "Bash": <SiGnubash />,
    },
    libs: {
      "React": <FaReact />,
      "Chakra UI": <SiChakraui />,
      "Formik": <SiFormik />,
      "Bootstrap": <BsBootstrapFill />,
      "Django": <SiDjango />,
    },
    tools: {
      "Git/github": <FaGitAlt />,
      "Docker": <FaDocker />,
      "PostgreSQL": <SiPostgresql />,
      "Adobe PS/LR": <SiAdobe />,
      "Elastic Stack": <SiElasticstack />,
      "Nginx": <SiNginx />,
    },
  },

  landing: {
    heading: {
      en: {
        name: "Johan",
        title: "Aspiring Developer",
      },
      fr: {
        name: "Johan",
        title: "Aspiring Developer",
      },
    },
    subHeading: {
      en: "Passionate about elegant digital experiences, from code to creativity.",
      fr: "Passionate about elegant digital experiences, from code to creativity.",
    },
    text: {
      en: "Thank you for checking my portfolio. I made it with love, from scratch !",
      fr: "Thank you for checking my portfolio. I made it with love, from scratch !",
    },
  },

  aboutMe: {
    intro: {
      en: [
        "I'm a developer based in Switzerland who has completed 42Lausanne's common core and currently focuses on React and Android development using Kotlin. After exploring several paths, I found my passion in building smart, interactive user experiences, tools and more. I’m especially excited about combining creativity and clean code to bring personal projects to life like my soon-to-be-born",
        <Link
          key="kaamelott-2mn"
          href="https://youtu.be/cKKNPqScqNI?t=169"
          target="_blank"
          colorPalette="accent"
        >
          &nbsp;Kaamelott&nbsp;
        </Link>,
        "reference search engine...",
      ],
      fr: [
        "I'm a developer based in Switzerland who has completed 42Lausanne's common core and currently focuses on React and Android development using Kotlin. After exploring several paths, I found my passion in building smart, interactive user experiences, tools and more. I’m especially excited about combining creativity and clean code to bring personal projects to life like my soon-to-be-born",
        <Link
          key="kaamelott-2mn"
          href="https://youtu.be/cKKNPqScqNI?t=169"
          target="_blank"
          colorPalette="accent"
        >
          &nbsp;Kaamelott&nbsp;
        </Link>,
        "reference search engine...",
      ],
    },
    personal: {
      en: [
        "In my free time, I love photography, composing music, and learning Japanese. I enjoy combining technical logic with creative expression—whether it’s through code, melody, or light.",
        <br key="aboutme-personal-br" />,
        <br key="aboutme-personal-br2" />,
        <small key="aboutme-personal-small">
          I’m currently seeking an internship opportunity where I can grow,
          contribute, and keep learning.
        </small>,
      ],
      fr: [
        "In my free time, I love photography, composing music, and learning Japanese. I enjoy combining technical logic with creative expression—whether it’s through code, melody, or light.",
        <br key="aboutme-personal-br" />,
        <br key="aboutme-personal-br2" />,
        <small key="aboutme-personal-small">
          I’m currently seeking an internship opportunity where I can grow,
          contribute, and keep learning.
        </small>,
      ],
    },
    languages: ["C++", "Javascript", "HTML, CSS", "Kotlin", "Bash"],
    libs: ["React", "Chakra UI", "Formik", "Bootstrap"],
    tools: ["Git/Github", "Docker", "Adobe PS/LR", "Nginx"],
  },

  projects: {
    cards: [
      {
        imageLink: transcendenceStill,
        animatedLink: transcendenceAnimated,
        title: {
          en: "42 Transcendence",
          fr: "42 Transcendance",
        },
        description: {
          en: "A multiplayer 3D Pong game built during 42Lausanne’s final exam project as a team of 5.",
          fr: "A multiplayer 3D Pong game built during 42Lausanne’s final exam project as a team of 5.",
        },
        anecdote: {
          en: "It is a web project but I focused on infrastructure and devOps. I orchestrated 8+ Docker containers with a dual-mode environment, and implemented a secure ELK logging architecture with SSL encryption across nodes. I also designed the UI with BootStrap :)", //An anecdote or something I was particularly happy about
          fr: "It is a web project but I focused on infrastructure and devOps. I orchestrated 8+ Docker containers with a dual-mode environment, and implemented a secure ELK logging architecture with SSL encryption across nodes. I also designed the UI with BootStrap :)", //An anecdote or something I was particularly happy about
        },
        techStack: [
          "Javascript",
          "Bootstrap",
          "Django",
          "Nginx",
          "Docker",
          "PostgreSQL",
        ],
        projectLink: "",
        githubLink: "https://www.chakra-ui.com/docs/components/aspect-ratio",
      },
      {
        imageLink: transcendenceStill,
        animatedLink: transcendenceAnimated,
        title: {
          en: "42 Transcendence",
          fr: "42 Transcendance",
        },
        description: {
          en: "A multiplayer 3D Pong game built during 42Lausanne’s final exam project as a team of 5.",
          fr: "A multiplayer 3D Pong game built during 42Lausanne’s final exam project as a team of 5.",
        },
        anecdote: {
          en: "It is a web project but I focused on infrastructure and devOps. I orchestrated 8+ Docker containers with a dual-mode environment, and implemented a secure ELK logging architecture with SSL encryption across nodes. I also designed the UI with BootStrap :)", //An anecdote or something I was particularly happy about
          fr: "It is a web project but I focused on infrastructure and devOps. I orchestrated 8+ Docker containers with a dual-mode environment, and implemented a secure ELK logging architecture with SSL encryption across nodes. I also designed the UI with BootStrap :)", //An anecdote or something I was particularly happy about
        },
        techStack: [
          "Javascript",
          "Bootstrap",
          "Django",
          "Nginx",
          "Docker",
          "PostgreSQL",
        ],
        projectLink: "https://www.chakra-ui.com/docs/components/aspect-ratio",
        githubLink: "https://www.chakra-ui.com/docs/components/aspect-ratio",
      },
      {
        imageLink: transcendenceStill,
        animatedLink: transcendenceAnimated,
        title: {
          en: "42 Transcendence",
          fr: "42 Transcendance",
        },
        description: {
          en: "A multiplayer 3D Pong game built during 42Lausanne’s final exam project as a team of 5.",
          fr: "A multiplayer 3D Pong game built during 42Lausanne’s final exam project as a team of 5.",
        },
        anecdote: {
          en: "It is a web project but I focused on infrastructure and devOps. I orchestrated 8+ Docker containers with a dual-mode environment, and implemented a secure ELK logging architecture with SSL encryption across nodes. I also designed the UI with BootStrap :)", //An anecdote or something I was particularly happy about
          fr: "It is a web project but I focused on infrastructure and devOps. I orchestrated 8+ Docker containers with a dual-mode environment, and implemented a secure ELK logging architecture with SSL encryption across nodes. I also designed the UI with BootStrap :)", //An anecdote or something I was particularly happy about
        },
        techStack: [
          "Javascript",
          "Bootstrap",
          "Django",
          "Nginx",
          "Docker",
          "PostgreSQL",
        ],
        projectLink: "",
        githubLink: "https://www.chakra-ui.com/docs/components/aspect-ratio",
      },
    ],
  },
  contact: {},

  // fr: {
  //   landing: {
  //     heading: "Lorem",
  //     subHeading: "Lorem",
  //     text: "Lorem",
  //   },
  //   about: {},
  //   projects: {},
  //   contact: {},
  // },
};
export function filterSkills(keys) {
  const allSkills = {
    ...content.skills.languages,
    ...content.skills.libs,
    ...content.skills.tools,
  };

  const normalizedKeys = keys.map((key) => key.toLowerCase());

  return Object.fromEntries(
    Object.entries(allSkills).filter(([key]) =>
      normalizedKeys.includes(key.toLowerCase()),
    ),
  );
}
