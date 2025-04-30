import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";

const glaucousConfig = defineConfig({
  globalCss: {
    html: {
      colorPalette: "prim",
    },
  },
  theme: {
    tokens: {
      colors: {
        "gray": {
          "50": "#F3F2F2",
          "100": "#DDD9D9",
          "200": "#C7C1C1",
          "300": "#B2A9A9",
          "400": "#9C9191",
          "500": "#867979",
          "600": "#6B6161",
          "700": "#504949",
          "800": "#363030",
          "900": "#1B1818",
          "950": "#1B1818",
        },
        "green": {
          "50": "#EEF7F1",
          "100": "#CEE8D9",
          "200": "#AFDAC0",
          "300": "#90CBA8",
          "400": "#71BC8F",
          "500": "#51AE77",
          "600": "#418B5F",
          "700": "#316847",
          "800": "#214530",
          "900": "#102318",
          "950": "#102318",
        },
        "red": {
          "50": "#FFE7E6",
          "100": "#FFBDB8",
          "200": "#FE928A",
          "300": "#FE685D",
          "400": "#FE3E2F",
          "500": "#FE1301",
          "600": "#CB0F01",
          "700": "#980B01",
          "800": "#650801",
          "900": "#330400",
          "950": "#330400",
        },
        "prim": {
          "50": "#EFF0F5",
          "100": "#D3D5E4",
          "200": "#B6B9D2",
          "300": "#9A9EC1",
          "400": "#7D83B0",
          "500": "#61689E",
          "600": "#4D537F",
          "700": "#3A3E5F",
          "800": "#27293F",
          "900": "#131520",
          "950": "#131520",
        },
        "sec": {
          "50": "#EBF9ED",
          "100": "#C7F0CD",
          "200": "#A3E6AD",
          "300": "#7FDC8C",
          "400": "#5BD26C",
          "500": "#37C84C",
          "600": "#2CA03D",
          "700": "#21782D",
          "800": "#16501E",
          "900": "#0B280F",
          "950": "#0B280F",
        },
        "accent": {
          "50": "#FAEDEB",
          "100": "#F1CEC6",
          "200": "#E7AEA1",
          "300": "#DE8E7D",
          "400": "#D56E58",
          "500": "#CB4F34",
          "600": "#A33F29",
          "700": "#7A2F1F",
          "800": "#511F15",
          "900": "#29100A",
          "950": "#29100A",
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

export const glaucous = createSystem(defaultConfig, glaucousConfig);
