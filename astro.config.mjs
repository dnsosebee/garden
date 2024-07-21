import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://danielsosebee.com",
  integrations: [
    starlight({
      title: "Daniel Sosebee",
      logo: {
        src: "./public/assets/art/helix-square.jpg",
      },
      editLink: {
        baseUrl: "https://github.com/dnsosebee/garden/edit/main/",
      },
      description: "Daniel Sosebee's digital garden. Posts, journals, and references.",
      social: {
        email: "mailto:daniel@harmonic.so",
        twitter: "https://twitter.com/dnsosebee",
        github: "https://github.com/dnsosebee/",
        linkedin: "https://www.linkedin.com/in/danielsosebee/",
      },
      sidebar: [
        {
          label: "What I'm Up To Now",
          link: "/now/",
        },
        {
          label: "Human Programming",
          link: "/human-programming/",
        },
        {
          label: "Piano & Electronic Music",
          link: "/music/",
          // collapsed: true,
          // items: [
          //   {
          //     label: "Music Gallery",
          //     link: "/music/",
          //   },
          // ],
        },
        {
          label: "Visual Art",
          collapsed: true,
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
            { label: "Joe's Apartment", link: "/art/joes-apartment/" },
            { label: "Sky Gate", link: "/art/sky-gate/" },
            { label: "We've Been Expecting You", link: "/art/weve-been-expecting-you/" },
            { label: "No Answers", link: "/art/no-answers/" },
            { label: "The View", link: "/art/the-view/" },
            { label: "Embrace The Nothing", link: "/art/embrace-the-nothing/" },
            { label: "Love Letter", link: "/art/love-letter/" },
            { label: "Held Tight", link: "/art/held-tight/" },
            { label: "Bound", link: "/art/bound/" },
            { label: "Dongle", link: "/art/dongle/" },
            { label: "Brainstorm 47", link: "/art/brainstorm-47/" },
            { label: "Planet Factory", link: "/art/planet-factory/" },
            { label: "Hebrew Class House", link: "/art/hebrew-class-house/" },
            { label: "Wreath", link: "/art/wreath/" },
            { label: "Cityscape Three", link: "/art/cityscape-three/" },
          ],
        },
        {
          label: "Math & Logic Riddles",

          collapsed: true,
          autogenerate: {
            directory: "riddles",
          },
        },
        // {
        //   label: "Assorted",
        //   collapsed: true,
        //   items: [
        //     {
        //       label: "Tommy Sosebee",
        //       link: "/tommy-sosebee/",
        //     },
        //   ],
        // },

        {
          label: "Sneaky Town",
          link: "/sneaky-town/",
        },
        {
          label: "Bookshelf",
          link: "/bookshelf/",
        },
        {
          label: "Journal",
          collapsed: true,
          items: [
            {
              label: "All Journal Entries",
              link: "/journal/",
            },
            {
              label: "Every-Year Carry 2024",
              link: "/eyc-2024/",
            },
            {
              label: "The Origins of LIFE",
              link: "/origins-of-life/",
            },
          ],
        },
        // {
        //   label: "etc.",
        //   collapsed: true,
        //   autogenerate: {
        //     directory: "etc",
        //   },
        // },
        {
          label: "harmonic.so ↗",
          link: "https://harmonic.so",
          attrs: { target: "_blank", style: "font-style: italic" },
        },
        {
          label: "amps.run ↗",
          link: "https://amps.run",
          attrs: { target: "_blank", style: "font-style: italic" },
        },
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
