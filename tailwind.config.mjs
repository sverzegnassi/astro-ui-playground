/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      neutral: {
        100: "#f9f9ff",
        200: "#f0f3ff",
        300: "#cad2e3",
        400: "#8991a0",
        500: "#c85131",
        600: "#606877",
        700: "#545c6b",
        800: "#202835",
        900: "#141c28",
      },
      link: {
        100: "#418cff",
        900: "#0067d5",
      },
      linkVisited: {
        100: "#c95cfb",
        900: "#a132d3",
      },
      brand: {
        300: "#ffc8ba",
        500: "#c14c2d",
        700: "#741900",
      },
      success: {
        300: "#00f38e",
        500: "#00834a",
        700: "#004525",
      },
      error: {
        300: "#ffc6ca",
        500: "#e2004e",
        700: "#7c0026",
      },
      warning: {
        300: "#fbd024",
        500: "#897000",
        700: "#483a00",
      },
      info: {
        300: "#c6d3ff",
        500: "#546fb8",
        700: "#17377d",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
