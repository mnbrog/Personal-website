// src/pages/404.js
import React from "react";
import styled from "styled-components";

const NotFoundWrapper = styled.div`
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

const DogVideo = styled.video`
  max-width: 100%;
  width: 400px;               /* adjust as needed */
  height: auto;
  margin: 1.5rem 0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HomeLink = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.6em 1.4em;
  background-color: ${({ theme }) => theme.colors.teal};
  color: ${({ theme }) => theme.colors.darkNavy};
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightTeal};
  }
`;

const NotFoundPage = () => (
  <NotFoundWrapper>
    <Heading>404 – Oops! Page not found</Heading>
    <Message>I must’ve forgotten to route this page.</Message>
    <Message>While I fix that, here’s a little something to make up for it:</Message>
    {/* Replace "/Dog_Codes_Website_Video_Ready.mp4" with the correct public path */}
    <DogVideo
      src="/Dog_Codes_Website_Video_Ready.mp4"
      autoPlay
      loop
      muted
      playsInline
      aria-label="My dog reminding me to check my links"
    />
    <Message><em>(My dog, making sure I double-check my links!)</em></Message>
    <HomeLink href="/">← Go back home</HomeLink>
  </NotFoundWrapper>
);

export default NotFoundPage;
