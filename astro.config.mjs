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
          label: "Riddles",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "List of All Approved Riddles",
              link: "/riddles/",
            },
            {
              label: "The Egg Drop Riddle",
              link: "/riddles/egg-drop/",
            },
          ],
        },
        {
          label: "Assorted",
          items: [
            {
              label: "Tommy Sosebee",
              link: "/tommy-sosebee/",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
      lastUpdated: true,
      favicon: "/favicon.ico",
      customCss: [
        // Path to your Tailwind base styles:
        "./src/tailwind.css",
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
