// src/components/Hero.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 150px 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 100px 20px;
  }
`;

const Intro = styled.h2`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.teal};
  margin-bottom: 16px;
`;

const Name = styled.h1`
  font-size: clamp(40px, 8vw, 60px);
  margin: 0;
`;

const Tagline = styled.h2`
  font-size: clamp(28px, 6vw, 40px);
  font-weight: 400;
  color: ${({ theme }) => theme.colors.slate};
  margin-top: 10px;
`;

const MotionDescription = styled(motion.p)`
  max-width: 600px;
  margin-top: 30px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.lightSlate};
`;

const CTA = styled.a`
  margin-top: 40px;
  padding: 12px 30px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.teal};
  border: 1px solid ${({ theme }) => theme.colors.teal};
  border-radius: 4px;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.darkNavy};
  }
`;

const Hero = () => (
  <Section id="hero">
    <Intro></Intro>
    <Name>Hello, my name is Michael Brogan.</Name>
    <Tagline>I build sleek, dynamic web experiences that perform.</Tagline>
    <MotionDescription
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      I'm a developer and designer creating modern, high-impact websites for startups,
      businesses, and creators. Currently leading GrowLab and building digital platforms with Gatsby, React, and more.
    </MotionDescription>
    <CTA href="#contact">Let’s Connect</CTA>
  </Section>
);

export default Hero;
