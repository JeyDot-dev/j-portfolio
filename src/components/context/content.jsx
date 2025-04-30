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
} from "react-icons/si";
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
    },
    tools: {
      "Git/github": <FaGitAlt />,
      "Docker": <FaDocker />,
      "Adobe PS/LR": <SiAdobe />,
    },
  },
  en: {
    landing: {
      heading: {
        name: "Johan",
        title: "Aspiring Developer",
      },
      subHeading:
        "Passionate about elegant digital experiences, from code to creativity.",
      text: "Thank you for checking my portfolio. I made it with love, from scratch !",
    },
    aboutMe: {
      intro: [
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
      personal: [
        "In my free time, I love photography, composing music, and learning Japanese. I enjoy combining technical logic with creative expression—whether it’s through code, melody, or light.",
        <br key="aboutme-personal-br" />,
        <br key="aboutme-personal-br2" />,
        <small key="aboutme-personal-small">
          I’m currently seeking an internship opportunity where I can grow,
          contribute, and keep learning.
        </small>,
      ],
    },
    projects: {},
    contact: {},
  },

  fr: {
    landing: {
      heading: "Lorem",
      subHeading: "Lorem",
      text: "Lorem",
    },
    about: {},
    projects: {},
    contact: {},
  },
};
