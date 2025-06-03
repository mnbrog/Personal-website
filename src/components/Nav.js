// src/components/Nav.js
import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1200px;
  padding: 2rem 2rem 1rem;
  background-color: ${({ theme }) => theme.colors.navy};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 140px;
    width: auto;

    @media (max-width: 768px) {
      height: 100px;
    }

    @media (max-width: 480px) {
      height: 80px;
    }
  }
`;

const NavLinks = styled.ol`
  display: flex;
  list-style: none;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  text-align: center;
  margin: 0;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }
  @media (max-width: 768px) {
    gap: 1rem;
  }

  li {
    margin: 0;
  }

  a {
    position: relative; 
    color: ${({ theme }) => theme.colors.lightSlate};
    font-weight: 500;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s;

    /* Hand‑drawn squiggly underline */
    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 6px;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='6'><path d='M0 3 Q10 0 20 3 T40 3 T60 3 T80 3 T100 3' stroke='%233FD0C9' stroke-width='2' fill='none'/></svg>");
      background-repeat: repeat-x;
      background-size: 100px 6px;
      transition: width 0.3s ease;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
    &:hover::after {
      width: 100%;
    }
  }

  /* Slight manual offset for the Contact link */
  a.nav-contact {
    left: -2px; 
  }
`;

const Nav = () => (
  <StyledHeader>
    <Logo>
      <Link to="/" aria-label="home">
        <img src="/logo.png" alt="Michael Brogan Logo" />
      </Link>
    </Logo>
    <NavLinks>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#contact" className="nav-contact">
          Contact
        </a>
      </li>
    </NavLinks>
  </StyledHeader>
);

export default Nav;
