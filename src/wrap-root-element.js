import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/theme";
import { GlobalStyle } from "./components/styles/GlobalStyle";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
);