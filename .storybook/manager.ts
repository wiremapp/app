import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "dark",

    brandTitle: "Wiremap",
    brandUrl: "https://wirem.app/",
    brandImage: "https://i.imgur.com/BQzuQDG.png", // ! This should be set to a public image, not a url
    brandTarget: "_self",

    colorSecondary: "#FF6838",

    appBg: "#020202",
    appBorderColor: "#0E0E0E",

    barBg: '#020202',
    
  }),
});