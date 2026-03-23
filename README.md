# Sekh Arif Hossain — Portfolio

A modern, dark-themed developer portfolio built with React + Vite.

## Folder Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
└── src/
    ├── main.jsx                  # App entry point
    ├── App.jsx                   # Root component, nav state
    ├── data/
    │   └── portfolioData.js      # All CV content (edit here)
    ├── hooks/
    │   ├── useInView.js          # Intersection Observer hook
    │   └── useTypingEffect.js    # Typewriter animation hook
    ├── styles/
    │   └── global.css            # Global styles, CSS classes, animations
    └── components/
        ├── Navbar.jsx            # Sticky nav + mobile menu
        ├── Hero.jsx              # Landing section with typing effect
        ├── About.jsx             # About + info cards + interests
        ├── Experience.jsx        # Work history + education timeline
        ├── Skills.jsx            # Skill bars grouped by category
        ├── Projects.jsx          # Project cards + awards
        ├── Contact.jsx           # Contact info + message form
        ├── Footer.jsx            # Footer
        ├── FadeIn.jsx            # Scroll-triggered fade wrapper
        └── SkillBar.jsx          # Animated skill progress bar
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build
```

## Customisation

- **CV content** → edit `src/data/portfolioData.js`
- **Colors / fonts** → edit CSS variables in `src/styles/global.css`
- **Add new sections** → create a component in `src/components/` and import it in `App.jsx`
