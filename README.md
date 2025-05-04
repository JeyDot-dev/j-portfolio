# Johan's Portfolio

Welcome to my portfolio project! This is a responsive, theme-aware, and multilingual portfolio built with **React**, **Chakra UI**, and **Vite**. It showcases my skills, projects, (my photographs soon) andand hopefully reflects my creativity and hopefully my rigour. Although it is a work in progress this could be considered as an MVP (minimum viable product).

try it [here](https://jeydot-dev.github.io/j-portfolio/) !

## Features

### 🌐 Multilingual Support
- The portfolio supports **English** and **French**.
- Language switching is handled via a custom `ContentProvider` context, which dynamically updates the content based on the selected language.

### 🎨 Custom Theming
- Includes two custom themes: **Mortuum** and **Glaucous**, defined in the `themes` folder.
- The themes are applied using Chakra UI's theming system and can be switched dynamically via a custom `ThemeSwitchButton` component.

### 🛠️ Custom Hooks
- **`useToggle`**: A reusable hook for toggling between two states, used for language switching.
- **`useArray`**: A hook for managing arrays with navigation functionality (e.g., next, previous, reset).
- **`useIntersectionObserver`**: A hook for detecting when elements are visible in the viewport, used for animations and visibility-based effects.

### 📦 Modular Architecture
- **Custom Contexts**:
  - `ContentProvider`: Manages multilingual content and language preferences.
  - `VisibilityProvider`: Tracks the visibility of sections for smooth scrolling and animations.
  - `ChakraProvider (customized)`: Handles theming and color mode switching.
- **Reusable Components**:
  - `Nav`: A responsive blank navigation bar (layout).
  - `Section`: A wrapper for content sections with built-in styling and animations.
  - `ProjectCard`: A card component for showcasing projects with animations and tooltips.
  - `ObjectToIconListWithTooltip`: A component which takes an object with the name of the language/lib/tool and it's icon and returns a list of icons with it's name as a tooltip on hover.
  - and more...

### 🚀 Built with Vite
- Lightning-fast development and build process using **Vite**.
- Deployed to GitHub Pages for easy access.

## Project Structure

```plaintext
src/
├── components/
│   ├── chakra/          # Chakra UI components untouched
│   ├── context/         # Custom contexts (e.g., ContentProvider, VisibilityProvider)
│   ├── feature/         # Feature-specific components (e.g., NavBar, ProjectsSection)
│   ├── layout/          # reusable Layout components (e.g., Section, Nav)
│   ├── ui/              # Reusable UI components (e.g., ProjectCard, ThemeSwitchButton)
├── hooks/               # Custom React hooks (e.g., useToggle, useArray)
├── themes/              # Custom Chakra UI themes (Mortuum, Glaucous)
├── [App.jsx](http://_vscodecontentref_/1)              # Main application component
├── [main.jsx](http://_vscodecontentref_/2)             # Entry point for the React app
──────────────────────────────────────────────────────────────────────────────────────────
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JeyDot-dev/j-portfolio.git
   cd j-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at [http://localhost:5173](http://localhost:5173).


## Technologies Used

- **React**: Frontend framework.
- **Chakra UI**: Component library for styling and theming.
- **Vite**: Build tool for fast development.
- **Yup**: Validation library for forms.
- **EmailJS**: For handling contact form submissions.
- **React Icons**: For adding icons to the UI.


---

Thank you for visiting my portfolio! If you have any feedback or opportunities, feel free to reach out via the contact form.
