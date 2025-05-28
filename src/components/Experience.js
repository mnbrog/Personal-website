// src/components/Experience.js
import React, { useState } from "react";
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

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.lightNavy};
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;
  cursor: pointer;

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
    color: ${({ theme }) => theme.colors.white};
  }

  h4 {
    margin: 8px 0 12px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.teal};
  }
`;

const DetailsList = styled.ul`
  list-style: none;
  padding-left: 20px;
  text-align: left;
  color: ${({ theme }) => theme.colors.lightSlate};

  li {
    margin-bottom: 8px;
    position: relative;
    padding-left: 20px;
  }

  li::before {
    content: "▹";
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.teal};
  }
`;

const experiences = [
  {
    company: "UA System",
    role: "Tech Lead, AI Knowledge Assistant",
    location: "Tuscaloosa, AL",
    logo: "UAS-logo.png",
    details: [
      "Built a Power Automate flow to extract key content from internal HR docs and create AI-generated summary emails.",
      "Developed Copilot-powered scheduling assistant for staff across departments.",
      "Created secure RESTful APIs and integrated with Azure OAuth for secure document access.",
      "Led a six-person Agile team in weekly standups, sprint planning, and demos."
    ]
  },
  {
    company: "Tractor Supply Company",
    role: "IT Intern",
    location: "Brentwood, TN",
    logo: "tractor_supply-logo.png",
    details: [
      "Built APIs using Java and Spring Boot to support inventory data workflows.",
      "Worked with SQL, Postman, and Eclipse for database integration and endpoint testing.",
      "Reduced manual entry through automation, increasing internal system speed and accuracy.",
      "Collaborated with a Scrum team on daily tickets and long-term sprints."
    ]
  },
  {
    company: "Vacayzen",
    role: "IT Intern",
    location: "Grayton Beach, FL",
    logo: "Vacayzen-logo.png",
    details: [
      "Developed internal tools using C#, ASP.NET MVC, and JavaScript.",
      "Improved site responsiveness with jQuery, Vue.js, and Bootstrap.",
      "Maintained MongoDB records and contributed to Git version control workflows."
    ]
  },
  {
    company: "Personal Portfolio Website",
    role: "Project",
    location: "Remote",
    logo: "logo.png",
    details: [
      "Designed and developed this website using Gatsby and styled-components to showcase projects and experience."
    ]
  },
   {
    company: "GrowLab",
    role: "Founder & Lead Developer",
    location: "Tuscaloosa, AL",
    logo: "growlab-logo.png",
    details: [
      "Founded a freelance studio and led a 3-person web team.",
      "Built 25+ websites for local businesses and organizations.",
      "Focused on UX/UI design, SEO, and mobile-first development."
    ]
  },
  {
    company: "The University of Alabama",
    role: "Education",
    location: "Tuscaloosa, AL",
    logo: "University-of-Alabama-Logo.png",
    details: [
      "Bachelor of Science in Management Information Systems (MIS)",
      "Double Major in Computer Science",
      "Expected Graduation: May 2025"
    ]
  }
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="experience">
      <Title>Experience</Title>
      <Grid>
        {experiences.map((exp, index) => (
          <Card key={index} onClick={() => toggleDetails(index)}>
            <img src={exp.logo} alt={exp.company} />
            <h3>{exp.company}</h3>
            <h4>{exp.role} · {exp.location}</h4>
            {openIndex === index && (
              <DetailsList>
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </DetailsList>
            )}
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Experience;
