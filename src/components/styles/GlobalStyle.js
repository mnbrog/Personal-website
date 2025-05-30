import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* === Base Reset === */
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
    margin: 0;
    padding: 0;
  }

  /* === Links === */
  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    transition: color 0.3s ease;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  /* === Headings & Text === */
  h1, h2, h3, h4, h5 {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
  }
  p {
    max-width: 600px;
    line-height: 1.8;
  }

  /* === Scrollbar Styles === */
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

  /* === Section Snap & Layout === */
  section {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    min-height: 100vh;
    padding: 80px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media (max-width: 768px) {
    section {
      padding: 60px 16px;
    }
  }

  /* === Responsive Navigation === */
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

  /* === Accessibility: Reduced Motion === */
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
`;
