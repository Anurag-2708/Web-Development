# Etch A Sketch

This project is a browser-based sketchpad that allows users to create pixel art on a dynamic grid. It was built as part of The Odin Project Foundations curriculum.

Link to Project 👉 [Etch A Sketch](https://anurag-2708.github.io/Web-Development/Etch_a_Sketch/index.html)

## Features

- **Drawing Modes:** Switch between Classic (Black), Random (Random colour), and Shading (Incremental opacity).
- **Eraser & Clear:** Tools to remove specific mistakes or reset the entire board.
- **Dynamic Resizing:** Users can resize the grid (up to 60x60) via a custom popup menu.
- **Grid Toggle:** Ability to show or hide grid lines for a cleaner look at the final artwork.
- **Pointer Logic:** Implemented pointer events to allow for a smooth click and drag drawing experience.

## Technical Implementation

This project was used to practice organizing code with ES6 modules. I separated the core logic into a dedicated functions file to handle grid initialization and drawing calculations. 

A significant part of the logic involves state management at the cell level. Each grid square uses dataset attributes to store its own RGB values and opacity levels. This allows the shading mode to interact with both the classic and random colour modes by incrementally increasing the alpha channel of a cell's specific colour.

## Contacts

- [LinkedIn](https://www.linkedin.com/in/anurag-ghosh-619072349/)
- [GitHub](https://github.com/Anurag-2708)
- [Discord](https://www.discord.com/users/750996926610145311)

**Finished on 8th April, 2026**