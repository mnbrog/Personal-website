// src/components/Layout.js
import React from "react";
import Nav from "./Nav";

const Layout = ({ children }) => (
  <>
    <Nav />
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>{children}</main>
  </>
);

export default Layout;