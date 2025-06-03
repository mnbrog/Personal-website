// src/components/About.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 150px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 100px 20px;
  }
`;

const Title = styled.h2`
  font-size: clamp(26px, 5vw, 32px);
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  margin-top: 20px;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Text = styled(motion.div)`
  max-width: 600px;
  color: ${({ theme }) => theme.colors.lightSlate};
  font-size: 16px;
  line-height: 1.6;
  text-align: center;

  p {
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 1.55;
  }
`;

const Skills = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;

const Skill = styled.span`
  background: ${({ theme }) => theme.colors.lightNavy};
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 14px;
`;

const PS = styled.p`
  margin-top: 1rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.lightSlate};

  a {
    color: ${({ theme }) => theme.colors.lightSlate};
    text-decoration: none;
    border-bottom: 1px dotted ${({ theme }) => theme.colors.lightSlate};
    transition: color 0.3s, border-color 0.3s, cursor 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
      border-color: ${({ theme }) => theme.colors.accent};
      cursor: url("/goldentsp.png"), auto; /* Custom dog cursor on hover */
    }
  }
`;

const About = () => (
  <Section id="about">
    <Title>About Me</Title>
    <Content>
      <Text
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p>
          I'm Michael Brogan, a passionate web developer, software engineer, and design-focused
          problem solver based in Birmingham, AL. I specialize in building elegant, scalable web
          solutions using cutting-edge technologies.
        </p>
        <p>
          With experience from internships at Tractor Supply Company and Vacayzen, and leading my
          own design agency GrowLab, I’ve developed a strong foundation in modern frameworks and
          technologies.
        </p>
        <p>
          I value clean code, seamless UX, and efficient processes. Whether I'm collaborating with a
          team or leading a project, I aim to make an impact with every line of code.
        </p>
        <Skills>
          <Skill>JavaScript</Skill>
          <Skill>React</Skill>
          <Skill>Vue</Skill>
          <Skill>Java</Skill>
          <Skill>SQL</Skill>
          <Skill>C++</Skill>
          <Skill>C#</Skill>
          <Skill>HTML</Skill>
          <Skill>CSS</Skill>
          <Skill>MongoDB</Skill>
          <Skill>Spring Boot</Skill>
          <Skill>Bootstrap</Skill>
          <Skill>Postman</Skill>
          <Skill>Git</Skill>
        </Skills>
      </Text>
      <PS>
        PS: Check out my&nbsp;
        <a href="/404">
          404 page
        </a>
        &nbsp;to meet my dog!
      </PS>
    </Content>
  </Section>
);

export default About;
