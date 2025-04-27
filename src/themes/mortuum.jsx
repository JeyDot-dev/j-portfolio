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
        prim: {
          50: { value: "#F3E6E3" },
          100: { value: "#E7CCC7" },
          200: { value: "#DBB3AB" },
          300: { value: "#CF9990" },
          400: { value: "#C38074" },
          500: { value: "#B76658" },
          600: { value: "#A25345" },
          700: { value: "#6A372E" },
          800: { value: "#4F2822" },
          900: { value: "#47241E" },
          950: { value: "#47241E" },
        },
        sec: {
          50: { value: "#E6BBB4" },
          100: { value: "#E1ADA5" },
          200: { value: "#DCA097" },
          300: { value: "#D79288" },
          400: { value: "#D28579" },
          500: { value: "#CD776A" },
          600: { value: "#C56252" },
          700: { value: "#A34536" },
          800: { value: "#8C3B2F" },
          900: { value: "#753127" },
          950: { value: "#5D271F" },
        },
        accent: {
          50: { value: "#FBEDD3" },
          100: { value: "#FAE9CA" },
          200: { value: "#F9E6C1" },
          300: { value: "#F8E2B8" },
          400: { value: "#F8DEAF" },
          500: { value: "#F7DBA6" },
          600: { value: "#F3CB81" },
          700: { value: "#F0BC5B" },
          800: { value: "#ECAC35" },
          900: { value: "#E39B15" },
          950: { value: "#E39B15" },
        },
        gray: {
          50: { value: "#F7F6F6" },
          100: { value: "#EFECEC" },
          200: { value: "#DFD9D9" },
          300: { value: "#D0C6C6" },
          400: { value: "#C0B3B3" },
          500: { value: "#B0A0A0" },
          600: { value: "#A18E8E" },
          700: { value: "#806B6B" },
          800: { value: "#493D3D" },
          900: { value: "#372E2E" },
          950: { value: "#070605" },
        },
        green: {
          50: { value: "#E3F6CF" },
          100: { value: "#DBF3C1" },
          200: { value: "#D7F2BA" },
          300: { value: "#C2EB96" },
          400: { value: "#ADE472" },
          500: { value: "#98DD4E" },
          600: { value: "#83D72B" },
          700: { value: "#6EB422" },
          800: { value: "#58901B" },
          900: { value: "#58901B" },
          950: { value: "#426C15" },
        },
        red: {
          50: { value: "#FAD7DB" },
          100: { value: "#F5B0B8" },
          200: { value: "#F29CA6" },
          300: { value: "#F08894" },
          400: { value: "#ED7482" },
          500: { value: "#EA6070" },
          600: { value: "#E84C5E" },
          700: { value: "#E5384D" },
          800: { value: "#E21F36" },
          900: { value: "#CA1A2F" },
          950: { value: "#B11729" },
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
              _light: "{colors.prim.700}",
              _dark: "{colors.prim.300}",
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
              _light: "{colors.sec.700}",
              _dark: "{colors.sec.300}",
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
              _light: "{colors.accent.700}",
              _dark: "{colors.accent.300}",
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

export const mortuum = createSystem(defaultConfig, mortuumConfig);
