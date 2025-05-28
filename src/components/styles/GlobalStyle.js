// src/components/styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.lightSlate};
    font-family: ${({ theme }) => theme.fonts.sans};
    font-size: 16px;
    scroll-behavior: smooth;
    display: flex;
    justify-content: center;
  }
  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    transition: color 0.3s ease;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.white};
  }
  h1, h2, h3, h4 {
    color: ${({ theme }) => theme.colors.white};
    margin: 0;
    font-weight: 700;
  }
  p {
    max-width: 600px;
    line-height: 1.8;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.navy};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.accent};
  }
`;
