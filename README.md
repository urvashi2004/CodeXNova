# Ice Cream App

## Project Overview

A visually rich, interactive React app for exploring and ordering artisan ice cream flavors. Features include:

- Animated gradient backgrounds and cone transitions
- Responsive design with a mobile hamburger menu
- Interactive ice cream selection with dynamic UI effects

## Folder Structure

```
public/
  favicon.ico
  index.html
  logo192.png
  logo512.png
  manifest.json
  robots.txt
src/
  App.js           # Main React component, UI logic, Framer Motion animations
  App.css          # All styles, responsive and animation CSS
  index.js         # React entry point
  assets/          # Ice cream and logo images
    BlueIce.png
    BrownIce.png
    GreenIce.png
    logo.png
    PinkIce.png
  ...
README.md          # This file
package.json       # Project dependencies and scripts
```

## Setup and Deployment Instructions

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Start the development server:**

   ```sh
   npm start
   ```

   The app will be available at `http://localhost:3000`.

3. **Build for production:**

   ```sh
   npm run build
   ```

   The optimized build will be in the `build/` folder.

4. **Deploy:**
   - You can deploy the `build/` folder to any static hosting (Vercel, Netlify, GitHub Pages, etc).

## Known Issues / Limitations

- **Gradient background transitions:** CSS cannot animate between gradients, so a React/Framer Motion crossfade workaround is used.
- **Big cone animation:** The cone moves and fades out before changing color, then reappears. This is handled in React state and may require tuning for custom images.
- **Ice cream box masking:** CSS `clip-path` is used for masking the cone image. Some older browsers may not support this smoothly.
- **Mobile menu:** Hamburger menu and backdrop are custom CSS/JS. If you add more links, you may need to adjust the mobile menu styling.
- **Image aspect ratios:** The layout assumes all cone images have similar aspect ratios. Large differences may require CSS tweaks.

## Internal Documentation / Comments

- All major React logic is commented in `App.js`.
- Animation and responsive breakpoints are documented in `App.css`.
- Hamburger menu logic is in `App.js` and styled in `App.css`.
- For further customization, see comments in both files for guidance on animation, layout, and responsiveness.

---

For any questions or contributions, please open an issue or PR!
