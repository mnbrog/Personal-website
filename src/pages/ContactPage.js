import React from "react";
import styled from "styled-components";

const ContactWrapper = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkNavy};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1`
  font-size: clamp(36px, 8vw, 60px);
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.2em;
  margin: 0.5rem 0;
`;

const DownloadLink = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.6em 1.4em;
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightSlate};
  }
`;



const ContactPage = () => (
  <ContactWrapper>
    <Heading>Contact Me</Heading>
    <Message>Need my easy to save phone contact? 
      Click my contact card below.</Message>
    <DownloadLink href="/Brogan_Michael.vcf" download>
      📇 Save Contact Card
    </DownloadLink>
  </ContactWrapper>
);

export default ContactPage;
