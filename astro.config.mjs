import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Daniel Sosebee",
      description: "Daniel Sosebee's digital garden. Posts, journals, and references.",
      social: {
        github: "https://github.com/dnsosebee/notes",
        twitter: "https://twitter.com/dnsosebee",
        linkedin: "https://www.linkedin.com/in/danielsosebee/",
      },
      sidebar: [
        {
          label: "Visual Art",
          items: [
            {
              label: "Visual Art Gallery",
              link: "/art/",
            },
            {
              label: "Pottery Batch One",
              link: "/art/pottery-batch-one/",
            },
            {
              label: "Help From My Friends",
              link: "/art/help-from-my-friends/",
            },
            {
              label: "Platonic Mobile",
              link: "/art/platonic-mobile/",
            },
            { label: "Severed", link: "/art/severed/" },
            { label: "Glen Canyon Journal", link: "/art/glen-canyon-journal/" },
            { label: "Doug Addicts Cover", link: "/art/doug-addicts-cover/" },
            { label: "Wave Plan One", link: "/art/wave-plane-one/" },
          ],
        },
        {
          label: "Riddles",
          autogenerate: {
            directory: "riddles",
          },
          // items: [
          //   // Each item here is one entry in the navigation menu.
          //   {
          //     label: "List of All Approved Riddles",
          //     link: "/riddles/",
          //   },
          //   {
          //     label: "The "
          //   },
          //   {
          //     label: "The Two Doors Riddle",
          //     link: "/riddles/two-doors/",
          //   },
          //   {
          //     label: "The Egg Drop Riddle",
          //     link: "/riddles/egg-drop/",
          //   },
          // ],
        },
        {
          label: "Recommended",
          autogenerate: {
            directory: "recommended",
          },
        },
        {
          label: "Executive functioning",
          autogenerate: {
            directory: "executive-functioning",
          },
        },
        // {
        //   label: "Reference",
        //   autogenerate: {
        //     directory: "reference",
        //   },
        // },
      ],
      lastUpdated: true,
      favicon: "/favicon.ico",
      customCss: [
        // Path to your Tailwind base styles:
        "./src/tailwind.css",
        "./src/global.css",
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
