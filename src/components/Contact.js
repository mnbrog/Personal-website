// src/components/Contact.js
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  max-width: 900px;
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
  gap: 24px;
  width: 100%;
  justify-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.a`
  background-color: ${({ theme }) => theme.colors.lightNavy};
  width: 100%;
  max-width: 280px;
  min-height: 220px;
  padding: 20px;
  border-radius: 8px;
  color: inherit;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    background: white;
    max-height: 80px;
    width: auto;
    margin-bottom: 16px;
    object-fit: contain;
    padding: 8px;
    border-radius: 4px;
  }

  h3 {
    margin: 0;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.lightSlate};
    margin: 8px 0 0;
  }
`;

const contacts = [
  {
    name: "Email",
    description: "Reach out to me on email!",
    logo: "https://cdn-icons-png.flaticon.com/512/561/561127.png",
    url: "mailto:mnbrogan32@gmail.com"
  },
  {
    name: "LinkedIn",
    description: "Connect with me on LinkedIn",
    logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    url: "https://www.linkedin.com/in/michaelbr0gan/"
  },
  {
    name: "GitHub",
    description: "Check out my GitHub projects",
    logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    url: "https://github.com/mnbrog"
  }
];

const Contact = () => (
  <Section id="contact">
    <Title>Contact</Title>
    <Grid>
      {contacts.map((contact, index) => (
        <Card key={index} href={contact.url} target="_blank" rel="noopener noreferrer">
          <img src={contact.logo} alt={contact.name} />
          <h3>{contact.name}</h3>
          <p>{contact.description}</p>
        </Card>
      ))}
    </Grid>
  </Section>
);

export default Contact;
