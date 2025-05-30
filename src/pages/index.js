import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const IndexPage = () => (
  <Layout>
    <section id="hero"><Hero /></section>
    <section id="about"><About /></section>
    <section id="experience"><Experience /></section>
    <section id="projects"><Projects /></section>
    <section id="contact"><Contact /></section>
  </Layout>
);

export default IndexPage;
