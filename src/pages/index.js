// src/pages/index.js
import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const IndexPage = () => (
  <Layout>
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Hero />
    </section>
    <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <About />
    </section>
    <section id="experience" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Experience />
    </section>
    <section id="projects" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Projects />
    </section>
    <section id="contact" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Contact />
    </section>
  </Layout>
);

export default IndexPage;