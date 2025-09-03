// src/components/Hero.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 200px 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 120px 20px;
  }
`;

const HeroPhoto = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    margin-bottom: 1rem;
  }
`;

const Name = styled.h1`
  font-size: clamp(36px, 8vw, 56px);
  margin: 0;
  line-height: 1.2;
`;

const Aside = styled.span`
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.slate};
  font-style: italic;
`;

const Tagline = styled.h2`
  font-size: clamp(24px, 6vw, 36px);
  font-weight: 400;
  color: ${({ theme }) => theme.colors.lightSlate};
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    margin-top: 0.75rem;
  }
`;

const MotionDescription = styled(motion.p)`
  max-width: 600px;
  margin: 1.5rem auto 0 auto;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.lightSlate};

  @media (max-width: 768px) {
    margin: 1rem auto 0 auto;
    font-size: 0.95rem;
  }
`;

const CTA = styled.a`
  margin-top: 2.5rem;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.teal};
  border: 1px solid ${({ theme }) => theme.colors.teal};
  border-radius: 4px;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.darkNavy};
  }

  @media (max-width: 768px) {
    padding: 0.65rem 1.25rem;
    font-size: 0.95rem;
  }
`;

const CTANote = styled.p`
  margin-top: 0.5rem;
  font-size: 0.57rem;
  color: ${({ theme }) => theme.colors.slate};

  @media (max-width: 768px) {
    margin-top: 0.75rem;
    font-size: 0.85rem;
  }
`;

const Hero = () => (
  <Section id="hero">
    <HeroPhoto src="/PFPblue.jpg" alt="Michael Brogan" />
    <Name>
      Hey there, I'm Michael Brogan{" "}
      
    </Name>
    <Tagline>
      I build sleek, dynamic web experiences that perform
    </Tagline>
    <MotionDescription
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      I'm a developer and designer crafting modern, high-impact solutions for startups,
      businesses, and creators. Currently leading GrowLab and building digital platforms
      with Gatsby, React, and more.
    </MotionDescription>
    <CTA href="#contact">Let’s Connect</CTA>
    <CTANote>I actually reply to every email—promise.</CTANote>
  </Section>
);

export default Hero;
