// src/components/Projects.js

import React from "react";
import styled from "styled-components";

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 150px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 100px 0;
  }
`;

const Title = styled.h2`
  width: 100%;
  font-size: clamp(26px, 5vw, 32px);
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  justify-content: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.a`
  background-color: ${({ theme }) => theme.colors.lightNavy};
  padding: 20px;
  border-radius: 8px;
  color: inherit;
  text-decoration: none;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    background: white;
    max-height: 100px;
    width: auto;
    margin-bottom: 20px;
    object-fit: contain;
    padding: 10px;
    border-radius: 4px;
  }

  h3 {
    margin: 0;
    font-size: 18px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.lightSlate};
    margin: 8px 0 0;
  }
`;

const projects = [
  {
  "name": "GrowLab",
  "description": "Web Design",
  "logo": "../Growlab-Logo.png",
  "url": "https://grow-lab.netlify.app/"
  },
  {
  name: "VinylSwipe",
  description: "3D Vinyl Record Player · GitHub:/mnbrog/vinylswipe",
  logo: "../vinylswipe-logosm.png",
  url: "https://vinylswipe.netlify.app/"
 },
  {
    name: "Michael Brogan Website",
    description: "Developer · michaelnbrogan.com",
    logo: "../logo.png",
    url: "https://michaelnbrogan.com"
  },
  {
    name: "Mckenzie Strategies",
    description: "Therapist · Hoover, AL",
    logo:
      "https://assets.softr-files.com/applications/df0789aa-54b4-4d20-b138-f8c96e79952b/assets/dde35ac7-42f8-4667-8179-ed4fe3b099e2.jpeg",
    url: "https://www.mckenziestrategies.com/"
  },
  {
    name: "Steiner Shipyard",
    description: "Ship Builders · Bayou La Batre, AL",
    logo: "https://steinershipyard.com/wp-content/uploads/2019/04/cropped-steiner-shipyard-logo-2019.png",
    url: "https://steinershipyard.com/"
  },
  {
    name: "Alta Vida Tezcal",
    description: "Tequila · Texas",
    logo: "../all veda logo.png",
    url: "https://www.altavidatezcal.com/"
  },
  {
    name: "Timucua Outdoors",
    description: "Fly Fishing · Coral Ray",
    logo: "../wise+timucuan+logo.png",
    url: "https://coral-ray-mshp.squarespace.com/"
  },
  {
    name: "Kerr Chief",
    description: "Outdoor Clothing · Kerr Chief",
    logo: "../Arrowhead_LGO.png",
    url: "https://www.kerr-chief.com/"
  },
  {
    name: "Upright Medical Solutions",
    description: "Medical Software · Birmingham, AL",
    logo: "../Upright Medical Solutions Logo.png",
    url: "https://uprightmedicalsolutions.com/"
  },
  {
    name: "Trapezi Foods",
    description: "Greek Food · Birmingham, AL",
    logo: "../trapezifoods.jpeg",
    url: "https://trapezifoods.com/"
  },
  {
    name: "Wax Monkey",
    description: "Jam Band · Tuscaloosa, Alabama",
    logo: "../wax-monkey-logo.jpg",
    url: "https://www.waxmonkeyband.com/"
  }
];

const Projects = () => (
  <Section id="projects">
    <Title>Projects</Title>
    <Grid>
      {projects.map((project, index) => (
        <Card
          key={index}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={project.logo} alt={project.name} />
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </Card>
      ))}
    </Grid>
  </Section>
);

export default Projects;
