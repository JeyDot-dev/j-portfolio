import { Link } from "@chakra-ui/react";
export const content = {
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
          colorPalette="sec"
        >
          &nbsp;Kaamelott&nbsp;
        </Link>,
        "reference search engine...",
      ],
      personal: [
        "In my free time, I love photography, composing music, and learning Japanese. I enjoy combining technical logic with creative expression—whether it’s through code, melody, or light.",
        "I’m currently seeking an internship opportunity where I can grow, contribute, and keep learning.",
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
