# Michael Brogan Portfolio Website

A responsive, handcrafted personal portfolio built with Gatsby, React, and Styled‑Components. This site showcases my work, experience, and a bit of personality—complete with subtle animations, custom cursors, and personal touches (including a playful dog cursor on the 404 page).

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Prerequisites](#prerequisites)
5. [Installation & Setup](#installation--setup)
6. [Folder Structure](#folder-structure)
7. [Key Components & Code Highlights](#key-components--code-highlights)
8. [Custom Cursors](#custom-cursors)
9. [Animations & Micro-Interactions](#animations--micro-interactions)
10. [Deploying the Site](#deploying-the-site)
11. [License](#license)
12. [Acknowledgments](#acknowledgments)

---

## Project Overview

This Gatsby‑based portfolio site is designed to feel “handcrafted,” with:

* **Personal branding**: original copy, fun facts, dog‑themed 404 page
* **Subtle animations**: Framer Motion slides, fades, and hover states
* **Custom cursors**: golden retriever cursor on 404 page link, Alabama “A” on the UA Experience card
* **Mobile‑first & responsive design**: hand‑tuned breakpoints (e.g., 920 px for project grid)
* **Human‑touch details**: micro‑asides, “PS” note, signature image, personal anecdotes

---

## Tech Stack

* **Framework**: [Gatsby](https://www.gatsbyjs.com/) (React‑based static site generator)
* **UI / Styling**: [Styled‑Components](https://styled-components.com/) (CSS‑in‑JS)
* **Animations**: [Framer Motion](https://www.framer.com/motion/) (element reveals, hover effects)
* **Fonts**: Inter, Fira Mono (via Google Fonts or local import)
* **Icons / Images**: Custom cursors (PNG), logos, signature scan, project thumbnails

---

## Features

* **Smooth Scrolling & Snap**

  * `scroll-snap-type: y mandatory;` for section‑by‑section scroll
* **Slide‑In Animations**

  * Each `<section>` fades/slides up on scroll into view (IntersectionObserver + CSS)
  * Project & Experience cards use Framer Motion’s `whileInView` animations
* **Hand‑Drawn Underline**

  * Navigation links display a squiggly, SVG‑based underline on hover
* **Custom Cursors**

  * Golden retriever cursor on 404 page link hover
  * Alabama “A” cursor on The University of Alabama Experience card hover
* **404 Page with Personal Touch**

  * Lighthearted “404 – Oops!” copy
  * Embedded looping video of user’s dog
  * Clear link back to home
* **About Me Section**

  * Professional summary with a small “fun fact” anecdote
  * Animated appearance via Framer Motion
  * Skills badges displayed as pill‑shaped spans
  * Subtle “PS” calling out the 404 page
* **Experience Section**

  * Grid of company‑role cards
  * Click a card to expand details list (toggle state)
  * Fade/slide‑in animation on scroll
* **Projects Section**

  * Grid of project cards with hover overlay (learned moment)
  * Each card includes tech stack and “Last Updated” timestamp
  * Slide‑in animations and custom breakpoints
* **Contact Section**

  * Friendly invite to download resume
  * `mailto:` link with “I read every email—promise” note
  * Casual “office hours” availability line
  * Subtle dotted background texture behind contact info

---

## Prerequisites

* **Node.js** (v14 or higher recommended)
* **npm** (v6+) or **Yarn**

You should have the Gatsby CLI installed (optional, for local develop commands):

```bash
npm install -g gatsby-cli
```

---

## Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/michael-brogan-portfolio.git
   cd michael-brogan-portfolio
   ```

2. **Install dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

3. **Add environment variables (if needed)**

   * If you have any environment variables (e.g., API keys), create a `.env.development` file at the root.
   * Example:

     ```env
     GATSBY_API_KEY=your_api_key_here
     ```

4. **Run in development mode**

   ```bash
   npm run develop
   # or
   yarn develop
   ```

   * Open your browser at `http://localhost:8000`.

5. **Build for production**

   ```bash
   npm run build
   # or
   yarn build
   ```

   * The optimized static files are generated in the `public/` folder.

6. **Serve built files locally (optional)**

   ```bash
   npm run serve
   # or
   yarn serve
   ```

---

## Folder Structure

```
michael-brogan-portfolio/
├── public/                  # Static assets (images, cursors, built files)
│   ├── dog-cursor.png
│   ├── alabama-cursor.png
│   ├── signature.png
│   ├── logo.png
│   └── ... (other static images)
├── src/
│   ├── assets/              # (optional) assets if not using public directly
│   ├── components/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Experience.js
│   │   ├── Hero.js
│   │   ├── Layout.js
│   │   ├── Nav.js
│   │   ├── Projects.js
│   │   ├── 404.js
│   │   └── styles/
│   │       ├── GlobalStyle.js
│   │       └── theme.js
│   ├── pages/
│   │   ├── index.js
│   │   ├── 404.js   # Gatsby’s fallback 404 page
│   │   └── ... (additional pages)
│   ├── gatsby-browser.js   # Wrap RootElement in ThemeProvider
│   └── gatsby-config.js    # Gatsby config (plugins, metadata)
├── .gitignore
├── LICENSE
├── package.json
└── yarn.lock / package-lock.json
```

---

## Key Components & Code Highlights

### 1. Global Styles & Theme

**`src/components/styles/theme.js`**

```js
export const theme = {
  colors: {
    navy: "#0a192f",
    accent: "#3d7eff",
    lightNavy: "#112240",
    slate: "#8892b0",
    lightSlate: "#a8b2d1",
    white: "#e6f1ff",
  },
  fonts: {
    sans: '"Inter", "Calibre", sans-serif',
    mono: '"Fira Mono", "SF Mono", monospace',
  },
  mediaQueries: {
    xs: "(max-width: 480px)",
    sm: "(max-width: 768px)",
    md: "(max-width: 1024px)",
  },
};
```

**`src/components/styles/GlobalStyle.js`**

```js
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Base reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    background-color: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.lightSlate};
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 16px;
    line-height: 1.62;  /* Hand-tuned for better readability */
    margin: 0;
    padding: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    transition: color 0.3s ease;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  h1, h2, h3, h4, h5 {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    line-height: 1.25;
  }

  p {
    max-width: 600px;
    line-height: 1.8;
  }

  /* Section Snap & Slide-In Animation */
  section {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    min-height: 100vh;
    padding: 80px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* Hidden & shifted down */
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.4s ease-out, transform 0.4s ease-out;
  }
  section.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    section {
      padding: 60px 16px;
    }
  }

  /* Fine‑tune project grid at 920px */
  @media (max-width: 920px) {
    .projects-grid {
      grid-template-columns: 1fr 1fr !important;
    }
  }

  /* Scrollbar Customization */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.navy};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 4px;
  }

  /* Responsive Navigation placeholders */
  nav {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
  }
  .nav-links {
    display: flex;
    gap: 24px;
  }
  .mobile-nav-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.accent};
  }
  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
    .mobile-nav-toggle {
      display: block;
    }
  }

  /* Reduced-motion preference */
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    *, *::before, *::after {
      transition: none !important;
      animation: none !important;
    }
  }
`;
```

---

### 2. Layout & IntersectionObserver

**`src/components/Layout.js`**

```jsx
import React, { useEffect } from "react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  useEffect(() => {
    // Slide sections into view once they enter viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <>
      <Nav />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
```

---

### 3. Navigation with “Hand‑Drawn” Underline & Offset

**`src/components/Nav.js`**

```jsx
import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1200px;
  padding: 2rem 2rem 1rem;
  background-color: ${({ theme }) => theme.colors.navy};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 140px;
    width: auto;

    @media (max-width: 768px) {
      height: 100px;
    }
    @media (max-width: 480px) {
      height: 80px;
    }
  }
`;

const NavLinks = styled.ol`
  display: flex;
  list-style: none;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  text-align: center;
  margin: 0;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }
  @media (max-width: 768px) {
    gap: 1rem;
  }

  li {
    margin: 0;
  }

  a {
    position: relative;
    color: ${({ theme }) => theme.colors.lightSlate};
    font-weight: 500;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 0;
      height: 6px;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='6'><path d='M0 3 Q10 0 20 3 T40 3 T60 3 T80 3 T100 3' stroke='%233FD0C9' stroke-width='2' fill='none'/></svg>");
      background-repeat: repeat-x;
      background-size: 100px 6px;
      transition: width 0.3s ease;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
    &:hover::after {
      width: 100%;
    }
  }

  a.nav-contact {
    left: -2px; /* Slight manual offset */
  }
`;

const Nav = () => (
  <StyledHeader>
    <Logo>
      <Link to="/" aria-label="home">
        <img src="/logo.png" alt="Michael Brogan Logo" />
      </Link>
    </Logo>
    <NavLinks>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact" className="nav-contact">Contact</a>
      </li>
    </NavLinks>
  </StyledHeader>
);

export default Nav;
```

---

## Custom Cursors

1. **Golden Retriever Cursor**
   Save a 32×32 PNG of a golden retriever head (transparent background) as `public/dog-cursor.png`.

   ```css
   a[href="/404"]:hover {
     cursor: url("/dog-cursor.png"), auto;
   }
   ```

2. **Alabama “A” Cursor**
   Save a 32×32 PNG of the Alabama “A” logo (transparent background) as `public/alabama-cursor.png`.

   ```css
   /* In Experience.js styled Card for UA entry */
   &.alabama-card:hover {
     cursor: url("/alabama-cursor.png"), auto;
   }
   ```

---

## Animations & Micro‑Interactions

* **Hero / Intro**

  * `<Hero />` uses Framer Motion to fade/slide in the greeting, photo, and CTA.
* **Section Slide‑In**

  * IntersectionObserver in `Layout.js` adds `.visible` to each `<section>` when scrolled into view.
  * CSS in `GlobalStyle.js` transitions opacity and translateY.
* **Experience Cards**

  * Each `<Card>` uses `initial` and `whileInView` props for Framer Motion.
  * Delayed by `index * 0.1s` for a cascading entrance.
* **Projects Cards**

  * Hidden overlay with learned‑moment text that fades in on hover.
  * Slide‑in on scroll using Framer Motion like the Experience cards.
* **Contact Section**

  * Dotted paper‑grain texture behind contact info.
  * Subtle fade‑in using Framer Motion if desired.

---

## Deploying the Site

1. **Build for Production**

   ```bash
   npm run build
   # or
   yarn build
   ```

   * The optimized files appear in `public/`.

2. **Deploy**

   * Deploy the `public/` folder to Netlify, Vercel, GitHub Pages, or any static host.
   * **Netlify Example**:

     1. Connect your Git repo.
     2. Set build command to `npm run build` (or `yarn build`).
     3. Set publish directory to `public`.
     4. Deploy!

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

* **Gatsby Starter** – for the initial boilerplate.
* **Styled‑Components** – for scoped, themeable CSS.
* **Framer Motion** – for intuitive React animations.
* Inspiration from tutorials on making portfolio sites feel “handcrafted” rather than generic.

Thank you for exploring my portfolio! If you have any questions or want to chat, feel free to reach out via the contact section.
Happy coding!
