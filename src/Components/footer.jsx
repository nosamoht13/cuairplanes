// Components/Footer.jsx
import React from "react";
import styled from "styled-components";
import LinkedInIcon from "../Images/linkedin.png";
import InstagramIcon from "../Images/instagram.png";

const FooterContainer = styled.footer`
  background: #2D2C5E;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px; /* space between icons */
`;

const IconLink = styled.a`
  display: inline-block;

  img {
    width: 36px;   /* size of the icon */
    height: 36px;
    transition: transform 0.2s ease;
  }

  &:hover img {
    transform: scale(1.15); /* subtle hover zoom */
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <IconLink
        href="https://www.instagram.com/columbia_airplanes/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={InstagramIcon} alt="Instagram" />
      </IconLink>
      <IconLink
        href="https://www.linkedin.com/company/cuaiaa/posts/?feedView=all"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={LinkedInIcon} alt="LinkedIn" />
      </IconLink>
    </FooterContainer>
  );
};

export default Footer;
