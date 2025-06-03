// src/components/Layout.js
import React, { useEffect } from "react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  useEffect(() => {
    // Intersection Observer to reveal sections on scroll
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

    // Observe every <section> on the page
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
