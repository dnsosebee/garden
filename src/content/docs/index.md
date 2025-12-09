---
title: Daniel Sosebee
description: Daniel Sosebee's homepage and digital garden.
template: doc
---

<style>
.ratio-box {
    aspect-ratio: 4 / 1; /* Sets the aspect ratio to 2:1 (width:height) */
    width: 100%; /* Set the width as needed */
    overflow: hidden; /* Ensure any overflow is hidden */
    display: flex;
    justify-content: center; /* Centers the image horizontally */
    align-items: center; /* Centers the image vertically */
}

.ratio-box img {
    width: 100%; /* Make the image take the full width of the box */
    height: auto; /* Maintain the aspect ratio of the image */
    object-fit: cover; /* Ensure the image covers the box */
}

/* First define the container context */
.pfp-container {
  container-type: inline-size;
}

/* Default state is not flex */
.pfp-inner-div {
  display: block;
}

/* Switch to flex when container is wide enough */
@container (min-width: 600px) {
  .pfp-inner-div {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
}

</style>

<div style="background-color: rgb(127,127,127,0.1); padding: 12px; border-radius: 12px;">

<!-- ### About me -->

![six Sneaky Town boards shot from overhead](/assets/photos/sneakies.jpg)

<div class="text-lg py-2">

I'm a coder who also makes the board game <a href="https://sneakytown.substack.com" target="_blank">Sneaky Town</a> and [piano compositions](/music/#upcoming-album). I design and build AI applications through my consultancy <a href="https://harmonic.so" target="_blank">Harmonic Software</a>. Here's my <a href="https://blog.danielsosebee.com" target="_blank">blog</a>.

</div>

<div class="pfp-container">

<div class="pfp-inner-div">

<div>

<!-- <figure style="display: flex; flex-direction:column; align-items: center">
<img src="" alt="Daniel Sosebee's headshot" class=""  width="300" height="auto" />
<figcaption>My face</>
</figure> -->

<div style="width: 200px;">

![My headshot](/assets/photos/snoqualmie-selfie.jpg)

</div>

</div>

<div>

##### Contact

- Email: <a href="mailto:daniel@harmonic.so">daniel@harmonic.so</a>
- Twitter: <a href="https://twitter.com/dnsosebee" target="_blank">@dnsosebee</a>
- Github: <a href="https://github.com/dnsosebee" target="_blank">@dnsosebee</a>
- LinkedIn: <a href="https://www.linkedin.com/in/danielsosebee/" target="_blank">Daniel Sosebee</a>
<!-- - <a href="https://www.admonymous.co/dnsosebee" target="_blank">Leave me anonymous feedback</a> -->

</div>

</div>
</div>

</div>

### Programming & logic projects

<div class="ratio-box">

![Whiteboard diagram of control flow in the FTML language, a component of InstructionKit](../../../public/assets/ftml-whiteboard-short.jpg)

</div>

- [🪴 Human Programming Writings and Definitions](/human-programming) - I develop tools for specifying and executing "human programs" - formally-defined human workflows or multi-agent workflows.
  <!-- - 2022-09: [Meet Methodable pt. 3: Meet the Block Types](https://humanprogramming.substack.com/p/meet-methodable-pt-3-meet-the-block)
  - 2022-07: [Why to Store Descriptions of Workflows and Not Just Guides](https://humanprogramming.substack.com/p/why-to-store-descriptions-of-workflows)
  - 2022-06: [⭐ The 'Meet Methodable' program](https://a.methodable.com/guide/e0412eb2-36fd-4903-b186-d2de931fefc7)
  - 2022-02: [The Untapped Potential of Human Programming](https://humanprogramming.substack.com/p/the-untapped-potential-of-human-programming) -->
- [🪴 Daniel's Approved Riddles](/riddles) - A collection of top tier math and logic riddles (under construction).

### Music & art projects

<div class="ratio-box">

<a href="art/wave-plane-one">

!['Wave Plane One' art piece by Daniel Sosebee](../../../public/assets/art/wave-plane-one.jpg)

</a>

</div>

- [🪴 Music Gallery](/music) - my piano and electronic music recordings.
- [🪴 Visual Art Gallery](/art) - my drawings and paintings.

### Miscellaneous pages

<div class="ratio-box">

![Sneaky Town board game in construction](../assets/sneaky-town.png)

</div>

- [🪴 What I'm Up To Now](/now) <!-- - [🪴 My Bookshelf](/bookshelf) -->
- [🪴 Sneaky Town](https://sneakytown.substack.com) - a board game I'm designing.

### Journal entries

<div class="ratio-box">

<a href="art/glen-canyon-journal">

!['Glen Canyon Journal' art piece by Daniel Sosebee](../../../public/assets/art/glen-canyon-journal.jpg)

</a>

</div>

- 2024-07: [📃 Every-Year Carry 2024](/eyc-2024)
- 2024-03: [📃 The Origins of LIFE](/origins-of-life)

### This website

Here is [this site's source code](https://github.com/dnsosebee/garden). All content is written in [markdown](https://www.markdownguide.org/) (including the [visual art gallery](/art)!) and published as static HTML pages using [Astro](https://astro.build/). The sidebar and site styles are thanks to the [Starlight documentation theme](https://starlight.astro.build/).
