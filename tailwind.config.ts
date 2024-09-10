import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'offWhite': '#FDF7F1',
        'orange': '#EE6451',
        'lightDark': '#111235',
        'cream': '#B9E1D7'
      },

      // screens: {
      //   mxl: { max: "1279px" },
      //   // => @media (max-width: 1279px){...}

      //   mlg: { max: "1023px" },
      //   // => @media (max-width: 1023px){...}

      //   mmd: { max: "769px" },
      //   // => @media (max-width: 767px){...}

      //   msm: { max: "639px" },
      //   // => @media (max-width: 639px){...}

      //   mxs: { max: "480px" },
      //   // => @media (max-width: 480px){...}

      //   mxxs: { max: "400px" },
      //   // => @media (max-width: 400px){...}

      //   mxxxs: { max: "320px" },
      //   // => @media (max-width: 320px){...}

      //   "ms-height": { raw: "(max-height: 700px)" },

      //   "mxl-height": { raw: "(max-height: 850px)" },
      // },
    },
  },
  plugins: [],
};
export default config;
