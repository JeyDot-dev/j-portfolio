import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";

const mortuumConfig = defineConfig({
  globalCss: {
    html: {
      colorPalette: "prim",
    },
  },
  theme: {
    tokens: {
      colors: {
        "prim": {
          "50": "#F7EFED",
          "100": "#EAD1CD",
          "200": "#DCB4AD",
          "300": "#CE968C",
          "400": "#C1796C",
          "500": "#B35C4C",
          "600": "#8F493D",
          "700": "#6B372E",
          "800": "#48251E",
          "900": "#24120F",
          "950": "#24120F",
        },
        "sec": {
          "50": "#F0F4F4",
          "100": "#D6DFE0",
          "200": "#BCCACD",
          "300": "#A2B6B9",
          "400": "#88A1A5",
          "500": "#6E8C91",
          "600": "#587074",
          "700": "#425457",
          "800": "#2C383A",
          "900": "#161C1D",
          "950": "#161C1D",
        },
        "accent": {
          "50": "#FDF5E8",
          "100": "#F9E4BE",
          "200": "#F5D393",
          "300": "#F1C269",
          "400": "#EEB13F",
          "500": "#EA9F15",
          "600": "#BB8011",
          "700": "#8C600D",
          "800": "#5E4008",
          "900": "#2F2004",
          "950": "#2F2004",
        },
        "gray": {
          "50": "#F4F2F1",
          "100": "#E0DAD7",
          "200": "#CCC2BD",
          "300": "#B8ABA3",
          "400": "#A49389",
          "500": "#917B6F",
          "600": "#746358",
          "700": "#574A42",
          "800": "#3A312C",
          "900": "#1D1916",
          "950": "#1D1916",
        },
        "green": {
          "50": "#F3FBEA",
          "100": "#DCF4C3",
          "200": "#C6EC9C",
          "300": "#AFE576",
          "400": "#99DE4F",
          "500": "#83D728",
          "600": "#68AC20",
          "700": "#4E8118",
          "800": "#345610",
          "900": "#1A2B08",
          "950": "#1A2B08",
        },
        "red": {
          "50": "#FCE8EB",
          "100": "#F7C0C7",
          "200": "#F197A2",
          "300": "#EC6F7E",
          "400": "#E7465A",
          "500": "#E21D35",
          "600": "#B4182B",
          "700": "#871220",
          "800": "#5A0C15",
          "950": "#2D060B",
        },
      },
    },

    semanticTokens: {
      colors: {
        prim: {
          contrast: {
            value: {
              _light: "gray.50",
              _dark: "gray.50",
            },
          },
          bg: {
            value: {
              _light: "{colors.prim.50}",
              _dark: "{colors.prim.950}",
            },
          },
          fg: {
            value: {
              _light: "{colors.prim.800}",
              _dark: "{colors.prim.100}",
            },
          },
          subtle: {
            value: {
              _light: "{colors.prim.100}",
              _dark: "{colors.prim.900}",
            },
          },
          muted: {
            value: {
              _light: "{colors.prim.200}",
              _dark: "{colors.prim.800}",
            },
          },
          emphasized: {
            value: {
              _light: "{colors.prim.300}",
              _dark: "{colors.prim.700}",
            },
          },
          solid: {
            value: {
              _light: "{colors.prim.600}",
              _dark: "{colors.prim.600}",
            },
          },
          hard: {
            value: {
              _light: "{colors.prim.800}",
              _dark: "{colors.prim.300}",
            },
          },
          focusRing: {
            value: {
              _light: "{colors.prim.400}",
              _dark: "{colors.prim.400}",
            },
          },
        },
        sec: {
          contrast: {
            value: {
              _light: "gray.50",
              _dark: "gray.50",
            },
          },
          bg: {
            value: {
              _light: "{colors.sec.50}",
              _dark: "{colors.sec.950}",
            },
          },
          fg: {
            value: {
              _light: "{colors.sec.800}",
              _dark: "{colors.sec.100}",
            },
          },
          subtle: {
            value: {
              _light: "{colors.sec.100}",
              _dark: "{colors.sec.900}",
            },
          },
          muted: {
            value: {
              _light: "{colors.sec.200}",
              _dark: "{colors.sec.800}",
            },
          },
          emphasized: {
            value: {
              _light: "{colors.sec.300}",
              _dark: "{colors.sec.700}",
            },
          },
          solid: {
            value: {
              _light: "{colors.sec.600}",
              _dark: "{colors.sec.600}",
            },
          },
          hard: {
            value: {
              _light: "{colors.sec.800}",
              _dark: "{colors.sec.300}",
            },
          },
          focusRing: {
            value: {
              _light: "{colors.sec.400}",
              _dark: "{colors.sec.400}",
            },
          },
        },
        accent: {
          contrast: {
            value: {
              _light: "gray.50",
              _dark: "gray.50",
            },
          },
          bg: {
            value: {
              _light: "{colors.accent.50}",
              _dark: "{colors.accent.950}",
            },
          },
          fg: {
            value: {
              _light: "{colors.accent.800}",
              _dark: "{colors.accent.100}",
            },
          },
          subtle: {
            value: {
              _light: "{colors.accent.100}",
              _dark: "{colors.accent.900}",
            },
          },
          muted: {
            value: {
              _light: "{colors.accent.200}",
              _dark: "{colors.accent.800}",
            },
          },
          emphasized: {
            value: {
              _light: "{colors.accent.300}",
              _dark: "{colors.accent.700}",
            },
          },
          solid: {
            value: {
              _light: "{colors.accent.600}",
              _dark: "{colors.accent.900}",
            },
          },
          hard: {
            value: {
              _light: "{colors.accent.800}",
              _dark: "{colors.accent.300}",
            },
          },
          focusRing: {
            value: {
              _light: "{colors.accent.400}",
              _dark: "{colors.accent.400}",
            },
          },
        },
        bg: {
          DEFAULT: {
            value: {
              _light: "{colors.gray.50}",
              _dark: "{colors.gray.950}",
            },
          },
          subtle: {
            value: { _light: "{colors.gray.50}", _dark: "{colors.gray.950}" },
          },
          muted: {
            value: { _light: "{colors.gray.100}", _dark: "{colors.gray.900}" },
          },
          emphasized: {
            value: { _light: "{colors.gray.200}", _dark: "{colors.gray.800}" },
          },
          inverted: {
            value: { _light: "{colors.gray.950}", _dark: "{colors.gray.50}" },
          },
          panel: {
            value: { _light: "{colors.gray.50}", _dark: "{colors.gray.950}" },
          },
          error: {
            value: { _light: "{colors.red.50}", _dark: "{colors.red.950}" },
          },
          warning: {
            value: {
              _light: "{colors.orange.50}",
              _dark: "{colors.orange.950}",
            },
          },
          success: {
            value: { _light: "{colors.green.50}", _dark: "{colors.green.950}" },
          },
          info: {
            value: { _light: "{colors.blue.50}", _dark: "{colors.blue.950}" },
          },
        },
        fg: {
          DEFAULT: {
            value: { _light: "{colors.gray.950}", _dark: "{colors.gray.50}" },
          },
          muted: {
            value: { _light: "{colors.gray.600}", _dark: "{colors.gray.400}" },
          },
          subtle: {
            value: { _light: "{colors.gray.400}", _dark: "{colors.gray.500}" },
          },
          inverted: {
            value: { _light: "{colors.gray.50}", _dark: "{colors.gray.950}" },
          },
          error: {
            value: { _light: "{colors.red.500}", _dark: "{colors.red.400}" },
          },
          warning: {
            value: {
              _light: "{colors.orange.600}",
              _dark: "{colors.orange.300}",
            },
          },
          success: {
            value: {
              _light: "{colors.green.600}",
              _dark: "{colors.green.300}",
            },
          },
          info: {
            value: { _light: "{colors.blue.600}", _dark: "{colors.blue.300}" },
          },
        },
        border: {
          DEFAULT: {
            value: { _light: "{colors.gray.200}", _dark: "{colors.gray.800}" },
          },
          muted: {
            value: { _light: "{colors.gray.100}", _dark: "{colors.gray.900}" },
          },
          subtle: {
            value: { _light: "{colors.gray.50}", _dark: "{colors.gray.950}" },
          },
          emphasized: {
            value: { _light: "{colors.gray.300}", _dark: "{colors.gray.700}" },
          },
          inverted: {
            value: { _light: "{colors.gray.800}", _dark: "{colors.gray.200}" },
          },
          error: {
            value: { _light: "{colors.red.500}", _dark: "{colors.red.400}" },
          },
          warning: {
            value: {
              _light: "{colors.orange.500}",
              _dark: "{colors.orange.400}",
            },
          },
          success: {
            value: {
              _light: "{colors.green.500}",
              _dark: "{colors.green.400}",
            },
          },
          info: {
            value: { _light: "{colors.blue.500}", _dark: "{colors.blue.400}" },
          },
        },

        gray: {
          contrast: {
            value: { _light: "{colors.gray.50}", _dark: "{colors.gray.950}" },
          },
          fg: {
            value: { _light: "{colors.gray.800}", _dark: "{colors.gray.200}" },
          },
          subtle: {
            value: { _light: "{colors.gray.100}", _dark: "{colors.gray.900}" },
          },
          muted: {
            value: { _light: "{colors.gray.200}", _dark: "{colors.gray.800}" },
          },
          emphasized: {
            value: { _light: "{colors.gray.300}", _dark: "{colors.gray.700}" },
          },
          solid: {
            value: { _light: "{colors.gray.900}", _dark: "{colors.gray.50}" },
          },
          focusRing: {
            value: { _light: "{colors.gray.400}", _dark: "{colors.gray.400}" },
          },
        },

        red: {
          contrast: {
            value: { _light: "gray.50", _dark: "gray.50" },
          },
          fg: {
            value: { _light: "{colors.red.700}", _dark: "{colors.red.300}" },
          },
          subtle: {
            value: { _light: "{colors.red.100}", _dark: "{colors.red.900}" },
          },
          muted: {
            value: { _light: "{colors.red.200}", _dark: "{colors.red.800}" },
          },
          emphasized: {
            value: { _light: "{colors.red.300}", _dark: "{colors.red.700}" },
          },
          solid: {
            value: { _light: "{colors.red.600}", _dark: "{colors.red.600}" },
          },
          focusRing: {
            value: { _light: "{colors.red.400}", _dark: "{colors.red.400}" },
          },
        },
      },
    },
  },
});

export const mortuum = createSystem(defaultConfig, mortuumConfig);
