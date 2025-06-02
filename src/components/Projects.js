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
    name: "Thigpen FlyFish",
    description: "Fishing Guide · SE, Louisiana",
    logo:
      "https://assets.softr-files.com/applications/0ffe45ff-98f7-45e9-9168-e620a9489559/assets/78a5cf83-936a-45b1-9aae-68c5f6660ff7.jpeg",
    url: "https://www.thigpenflyfishing.com"
  },
  {
    name: "Build Art",
    description: "Builder · Tuscaloosa, AL",
    logo:
      "https://assets.softr-files.com/applications/d896b043-47a5-4d37-8c4b-c3c30c5717e2/assets/331b8e4f-72e4-45fa-a6c1-0dc70f00c2df.png",
    url: "https://www.ttownhouse.com"
  },
  {
    name: "KA Alpha Beta",
    description: "Fraternity · Tuscaloosa, AL",
    logo:
      "https://assets.softr-files.com/applications/110d6191-43fd-407c-8a99-f5ea65c1b4e0/assets/e97fabde-2df1-4fce-9295-8c6ba6cf49eb.png",
    url: "https://www.kaalphabeta.com"
  },
  {
    name: "Berger Health",
    description: "Fitness · NO, Louisiana",
    logo:
      "https://assets.softr-files.com/applications/9a27a6c3-e4ff-49ca-96b9-f0e33072e73b/assets/91e6e5d1-8263-4992-a28e-80da4982aa18.png",
    url: "https://www.bergerhealth.org"
  },
  {
    name: "Untold Agency",
    description: "Media Agency · Miami, FL",
    logo:
      "https://assets.softr-files.com/applications/1a0d905f-0aa4-4cb1-92d8-849dc0353006/assets/608d6963-3f0c-46ce-b828-807a0a181252.jpeg",
    url: "https://www.theuntoldagency.com"
  },
  {
    name: "Creator Map",
    description: "Creator Platform · United States",
    logo:
      "https://assets.softr-files.com/applications/f337a486-9cbb-468b-b871-1a84332cea99/assets/d2cced6b-29b1-4201-9977-9173e7cc3790.png",
    url: "https://www.thecreatormap.com"
  },
  {
    name: "Seafarer Group",
    description: "Merch Group · Miami, FL",
    logo:
      "https://assets.softr-files.com/applications/d9167292-1fb8-4f1d-87db-c0d2f5a52ab3/assets/142cf2e2-6ff8-4a98-afab-b6bc62d399a3.png",
    url: "https://www.theseafarergroup.com"
  },
  {
    name: "All Around Movers Co",
    description: "Moving Company · Birmingham, AL",
    logo:
      "https://assets.softr-files.com/applications/db199dc6-b907-4b0e-b218-72ac2169e32e/assets/dd0e48fb-0d43-4b19-8cdf-7f2008a5102e.png",
    url: "https://AllAroundMovers.softr.app"
  },
  {
    name: "Steiner Shipyard",
    description: "Ship Builders · Bayou La Batre, AL",
    logo: "https://steinershipyard.com/wp-content/uploads/2019/04/cropped-steiner-shipyard-logo-2019.png",
    url: "https://steinershipyard.com/"
  },
  {
    name: "Farmland Trophies",
    description: "Hunting Club · Pike County, IL",
    logo:
      "https://assets.softr-files.com/applications/88821f58-d243-494b-b3be-64760e4d8c65/assets/f6f94c34-affc-4368-ace3-33fd34450522.png",
    url: "https://www.farmlandtrophies.com/"
  },

  // ───────────────────────────────────────────────────────────────────
  // Newly added entries (make sure the file paths match where you store these PNGs):
  // ───────────────────────────────────────────────────────────────────
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
