import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";

const glaucousConfig = defineConfig({
  globalCss: {
    html: {
      colorPalette: "glaucous",
    },
  },
  theme: {
    tokens: {
      colors: {
        glaucous: {
          50: { value: "#D6D8E4" },
          100: { value: "#C9CBDC" },
          200: { value: "#BBBED3" },
          300: { value: "#A0A4C1" },
          400: { value: "#9297B8" },
          500: { value: "#858AAF" },
          600: { value: "#777DA6" },
          700: { value: "#666C9B" },
          800: { value: "#5A608A" },
          900: { value: "#4F5479" },
          950: { value: "#444868" },
        },
        gray: {
          50: { value: "#EBEAEA" },
          100: { value: "#D7D5D5" },
          200: { value: "#C2C0C0" },
          300: { value: "#AEABAB" },
          400: { value: "#9A9696" },
          500: { value: "#868181" },
          600: { value: "#716C6C" },
          700: { value: "#464444" },
          800: { value: "#2C2B2B" },
          900: { value: "#1E1C1C" },
          950: { value: "#0A0909" },
        },
        green: {
          50: { value: "#B3D9C2" },
          100: { value: "#9DCEB1" },
          200: { value: "#92C8A8" },
          300: { value: "#7BBD96" },
          400: { value: "#64B183" },
          500: { value: "#51A171" },
          600: { value: "#468A61" },
          700: { value: "#3A7351" },
          800: { value: "#2E5C41" },
          900: { value: "#234531" },
          950: { value: "#172E20" },
        },
        red: {
          50: { value: "#FFBFBA" },
          100: { value: "#FE9E97" },
          200: { value: "#FE8E86" },
          300: { value: "#FE7E75" },
          400: { value: "#FE6E64" },
          500: { value: "#FE5E52" },
          600: { value: "#FE3F31" },
          700: { value: "#C90E01" },
          800: { value: "#A70C01" },
          900: { value: "#860A01" },
          950: { value: "#640701" },
        },
      },
    },

    semanticTokens: {
      colors: {
        glaucous: {
          contrast: {
            value: {
              _light: "gray.50",
              _dark: "gray.50",
            },
          },
          fg: {
            value: {
              _light: "{colors.glaucous.700}",
              _dark: "{colors.glaucous.300}",
            },
          },
          subtle: {
            value: {
              _light: "{colors.glaucous.100}",
              _dark: "{colors.glaucous.900}",
            },
          },
          muted: {
            value: {
              _light: "{colors.glaucous.200}",
              _dark: "{colors.glaucous.800}",
            },
          },
          emphasized: {
            value: {
              _light: "{colors.glaucous.300}",
              _dark: "{colors.glaucous.700}",
            },
          },
          solid: {
            value: {
              _light: "{colors.glaucous.600}",
              _dark: "{colors.glaucous.600}",
            },
          },
          focusRing: {
            value: {
              _light: "{colors.glaucous.400}",
              _dark: "{colors.glaucous.400}",
            },
          },
        },
        bg: {
          DEFAULT: {
            value: { _light: "{colors.gray.50}", _dark: "{colors.gray.950}" },
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
