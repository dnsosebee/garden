---
title: The Egg Drop Riddle
description: An optimization riddle about dropping eggs off of a building.
---

<img src="/assets/generated/egg-drop-riddle.webp" alt="A man holding an egg in each hand looks up at a skyscraper." width="400px" height="400px" />

| Difficulty                              | Categories                                 | Source    | I know the solution |
| --------------------------------------- | ------------------------------------------ | --------- | ------------------- |
| [🌶️🌶️ Medium](/riddles/#medium-riddles) | [algorithms](/riddles/#algorithms-riddles) | Karen Guo | Yes                 |

You stand before a 100-story building with two eggs in your hands. These eggs have been specially engineered to break if dropped at a certain floor or higher. Both eggs break at the same critical floor.

You can enter the building, take the elevator up and down, and drop the eggs off of various floors to test whether they break. If you drop an egg and it does not break it may be collected and reused.

You are tasked with coming up with an egg-dropping policy that will determine exactly which floor is the critical floor (e.g. "first I drop one at floor 30, then if it breaks..."). Your policy must work regardless which floor is the critical floor, and your policy is scored based on how many drops it requires in the worst case scenario. **Which egg-dropping policy yields the lowest worst-case number of drops to determine the exact floor at which the eggs break?**

## Daniel's Notes

This is an optimization problem, and there is at least one "good" answer you might find on your way to the correct answer. A fun one!
