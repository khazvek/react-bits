import {
  createSystem,
  defaultConfig,
  defineSlotRecipe,
} from "@chakra-ui/react";

const drawerRecipe = defineSlotRecipe({
  className: "drawer",
  slots: ["content"],
  base: {
    content: {
      w: "100vw",
      h: "100vh",
    },
  },
});

const tabsRecipe = defineSlotRecipe({
  className: "tabs",
  slots: ["trigger"],
  base: {
    trigger: {
      flex: "0 0 auto",
      bg: "#000000",
      borderRadius: "10px",
      fontSize: "14px",
      border: "1px solid #555555",
      h: 9,
      px: "1rem",
      transition: "background-color .3s",

      _hover: { bg: "#333333" },

      "&[data-state='active']": {
        color: "#fff",
        bg: "#170D27",
      },
    },
  },
});

export const toastStyles = {
  style: {
    fontSize: "12px",
    borderRadius: "0.75rem",
    border: "1px solid #555555",
    color: "#fff",
    backgroundColor: "#000000",
  },
};

export const customTheme = createSystem(defaultConfig, {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },

  styles: {
    global: {
      "html, body": {
        minHeight: "100vh",
        fontFamily: '"Figtree", sans-serif',
        backgroundColor: "#000000",
      },
    },
  },

  components: {
    Slider: {
      baseStyle: {
        thumb: { bg: "#fff", _focus: { boxShadow: "none" } },
      },
      variants: {
        solid: {
          track: { bg: "#333333" },
          filledTrack: { bg: "#fff" },
        },
      },
      defaultProps: { variant: "solid" },
    },
    Switch: {
      baseStyle: {
        track: {
          bg: "#333333",
          _checked: { bg: "#FFFFFF" },
          _focus: { boxShadow: "0 0 0 3px #333333" },
          _active: { bg: "#FFFFFF" },
        },
        thumb: {
          _checked: { bg: "white" },
          _active: { bg: "white" },
        },
      },
    },
  },

  recipes: {
    drawer: drawerRecipe,
    tabs: tabsRecipe,
  },
});
