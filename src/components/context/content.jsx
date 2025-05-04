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
import { TbBrandFramerMotion } from "react-icons/tb";
import transcendenceAnimated from "../../assets/transcendenceAnimated.webp";
import transcendenceStill from "../../assets/transcendenceStill.webp";
import fdfStill from "../../assets/fdfStill.webp";
import fdfAnimated from "../../assets/fdfAnimated.webp";
import portfolioAnimated from "../../assets/portfolioAnimated.webp";
import portfolioStill from "../../assets/portfolioStill.webp";
import { BsBootstrapFill } from "react-icons/bs";
import { FaGitAlt, FaDocker } from "react-icons/fa6";
import CppLogo from "../../assets/cppModified.svg?react";
import CLogo from "../../assets/c.svg?react";
import CVEN from "../../assets/CVEN.pdf";
import CVFR from "../../assets/CVFR.pdf";

export const content = {
  skills: {
    languages: {
      "C++": <CppLogo />,
      "JavaScript": <SiJavascript />,
      "HTML, CSS": <RiHtml5Fill />,
      "Kotlin": <SiKotlin />,
      "Bash": <SiGnubash />,
      "C": <CLogo />,
    },
    libs: {
      "React": <FaReact />,
      "Chakra UI": <SiChakraui />,
      "Formik": <SiFormik />,
      "Bootstrap": <BsBootstrapFill />,
      "Django": <SiDjango />,
      "Motion": <TbBrandFramerMotion />,
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
  navBar: {
    home: {
      en: "Home",
      fr: "Home",
    },
    aboutMe: {
      en: "About Me",
      fr: "Qui suis-je",
    },
    projects: {
      en: "Projects",
      fr: "Mes projets",
    },
    contactMe: {
      en: "Contact Me",
      fr: "Me contacter",
    },
    download: {
      label: {
        en: "Download my CV (en)",
        fr: "Téléchargez mon CV (fr)",
      },
      link: {
        en: CVEN, // TEMPORARY ASSET BEFORE SELF HOST
        fr: CVFR,
      },
    },
  },

  landing: {
    heading: {
      en: {
        name: "Hi, I'm Johan",
        title: "An Aspiring Developer",
      },
      fr: {
        name: "Salut, moi c'est Johan",
        title: "Développeur en devenir",
      },
    },
    subHeading: {
      en: "Passionate about elegant digital experiences, from code to creativity.",
      fr: "Passionné par les expériences numériques élégantes, du code à la créativité.",
    },
    text: {
      en: "Thank you for checking my portfolio. I made it with love, from scratch !",
      fr: "Merci de visiter mon portfolio. Je l'ai créé avec passion, entièrement de zéro !",
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
        "Je suis un développeur basé en Suisse, diplômé du tronc commun de 42Lausanne, et je me concentre actuellement sur le développement React et Android avec Kotlin. Après avoir exploré plusieurs domaines, j'ai trouvé ma passion dans la création d'expériences utilisateurs interactives et intelligentes, d'outils et plus encore. J'aime particulièrement allier créativité et code propre pour donner vie à des projets personnels comme mon futur moteur de recherche de références",
        <Link
          key="kaamelott-2mn"
          href="https://youtu.be/cKKNPqScqNI?t=169"
          target="_blank"
          colorPalette="accent"
        >
          &nbsp;Kaamelott&nbsp;
        </Link>,
        ".",
      ],
    },
    personal: {
      en: [
        "In my free time, besides coding, I love photography, composing music, and learning Japanese. I enjoy combining technical logic with creative expression—whether it’s through code, melody, or light.",
        <br key="aboutme-personal-br" />,
        <br key="aboutme-personal-br2" />,
        <small key="aboutme-personal-small">
          I’m currently seeking an internship opportunity where I can grow,
          contribute, and keep learning.
        </small>,
      ],
      fr: [
        "Pendant mon temps libre, en plus du code, j'aime la photographie, composer de la musique et apprendre le japonais. J'apprécie combiner la logique technique à l'expression créative, que ce soit à travers le code, la mélodie ou la lumière.",
        <br key="aboutme-personal-br" />,
        <br key="aboutme-personal-br2" />,
        <small key="aboutme-personal-small">
          Je suis actuellement à la recherche d&apos;un stage pour continuer à
          apprendre, contribuer et évoluer.
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
          fr: "Un jeu de Pong 3D multijoueur réalisé lors du projet final de 42Lausanne, en équipe de 5.",
        },
        anecdote: {
          en: "It is a web project but I focused on infrastructure and devOps. I orchestrated 8+ Docker containers with a dual-mode environment, and implemented a secure ELK logging architecture with SSL encryption across nodes. I also designed the UI with BootStrap :)",
          fr: "C'est un projet web, mais je me suis concentré sur l'infrastructure et le DevOps. J'ai orchestré plus de 8 conteneurs Docker avec un environnement à double mode, et mis en place une architecture de logs sécurisée ELK avec chiffrement SSL entre les nœuds. J'ai aussi conçu l'interface avec BootStrap :)",
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
        githubLink: "https://github.com/JeyDot-dev/transcendence",
      },
      {
        imageLink: fdfStill,
        animatedLink: fdfAnimated,
        title: {
          en: "42 FDF",
          fr: "42 FDF",
        },
        description: {
          en: "FDF is a graphical project that involves creating a wireframe rendering of a 3D landscape.",
          fr: 'FDF est un projet graphique qui consiste à réaliser un rendu filaire d\'un paysage 3D en "Fil De Fer".',
        },
        anecdote: {
          en: [
            "This project, although introduced early in the curriculum, was a real challenge. I basically brute-forced the Bresenham algorithm and some of the trigonometry. It worked in the end!",
            " It’s entirely written in C, using a minimal graphics library called ",
            <Link
              key="link-to-mlx"
              href="https://harm-smits.github.io/42docs/libs/minilibx/introduction.html"
              color="accent.fg"
            >
              miniLibX
            </Link>,
            ".",
          ],
          fr: [
            "Ce projet, bien qu'introduit tôt dans le cursus, a été un vrai défi. J'ai un peu forcé l'algorithme de Bresenham et la trigonométrie, mais ça a fini par fonctionner !",
            " Il est entièrement écrit en C, en utilisant une bibliothèque graphique minimale appelée ",
            <Link
              key="link-to-mlx"
              href="https://harm-smits.github.io/42docs/libs/minilibx/introduction.html"
              color="accent.fg"
            >
              miniLibX
            </Link>,
            ".",
          ],
        },
        techStack: ["C"],
        projectLink: "",
        githubLink: "https://github.com/JeyDot-dev/FdF",
      },
      {
        imageLink: portfolioStill,
        animatedLink: portfolioAnimated,
        title: {
          en: "The portfolio",
          fr: "Le portfolio",
        },
        description: {
          en: "A responsive, theme-aware portfolio designed to reflect my personality, creativity, and coding style.",
          fr: "Un portfolio responsive multi-thème, conçu pour refléter ma personnalité, ma créativité et ma progression.",
        },
        anecdote: {
          en: "I set out to create a clean, elegant space to present my work and ended up learning more than I expected. This portfolio grew into a 100+ hour deep dive into UI, UX, and reusable component design. It includes features like multilingual content support, custom theming, and a context-driven architecture.",
          fr: "Je voulais créer un espace propre et élégant pour présenter mon travail, et j'ai finalement appris bien plus que prévu. Ce portfolio est devenu un projet de plus de 100 heures consacré à l'UI, l'UX et la conception de composants réutilisables. Il inclut la gestion multilingue, des thèmes personnalisés.",
        },
        techStack: ["Javascript", "React", "Chakra UI"],
        projectLink: "",
        githubLink: "https://github.com/JeyDot-dev/j-portfolio",
      },
    ],
    checkGithub: {
      en: [
        "There are lots of other projects in my ",
        <Link
          key="link-to-github"
          href="https://www.github.com/JeyDot-dev"
          target="_blank"
          rounded="xl"
          bg="prim.emphasized"
          color="prim.bg"
        >
          Github
        </Link>,
        " so check them out if you are interested !",
      ],
      fr: [
        "Il y a plein d'autres projets sur mon ",
        <Link
          key="link-to-github"
          href="https://www.github.com/JeyDot-dev"
          target="_blank"
          rounded="xl"
          bg="prim.emphasized"
          color="prim.bg"
        >
          Github
        </Link>,
        ", alors n'hésitez pas à y jeter un œil si ça vous intéresse !",
      ],
    },
  },
  contact: {
    text: {
      en: "Don't hesitate to contact me, I'd be happy to hear some feedback, professional offers or.. whatever goes through your mind!",
      fr: "N'hésitez pas à me contacter, je serais ravi d'avoir vos retours, des propositions professionnelles ou... tout ce qui vous passe par la tête !",
    },
    emailLabel: {
      en: "you@email.example",
      fr: "tonAdresse@email.example",
    },
    messageLabel: {
      en: "Hi~",
      fr: "Salut !",
    },
    name: {
      en: "name",
      fr: "nom",
    },
  },
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
