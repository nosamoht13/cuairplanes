import React from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "../Components/navbar";
import HomepageImage from "../Images/HomepageImage.jpg";
import Countdown from "../Components/Countdown";


const dropIn = keyframes`
  0%   { opacity: 0; transform: translateY(20px) scale(0.98); filter: blur(6px); }
  60%  { opacity: 1; transform: translateY(0)    scale(1.00); filter: blur(0); }
  100% { opacity: 1; transform: translateY(0)    scale(1.00); filter: blur(0); }
`;
const trackingIn = keyframes`
  0%   { letter-spacing: -0.06em; }
  100% { letter-spacing: 0.02em; }
`;

const HeaderText = styled.h1`
  font-family: "FONTSPRING DEMO - Lupio ExtBd", sans-serif;
  font-weight: 800;
  font-size: clamp(32px, 6vw, 64px);
  text-align: center;
  color: #2D2C5E;
  margin: 32px 16px;

  animation:
    ${dropIn} 700ms ease-out both,
    ${trackingIn} 900ms ease-out both;

  text-shadow: 0 2px 0 rgba(0,0,0,0.05);
`;

const HomePageImageContainer = styled.img`
  width: 60%;
  height: 60%;
  object-fit: cover;
  display: block;
  margin: 16px auto 32px;
  max-width: 100%;
  border: 5px solid #000;
  border-radius: 12px; /* subtle polish */
  
  animation:
    ${dropIn} 700ms ease-out both,
    ${trackingIn} 900ms ease-out both;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center;       
  justify-content: center;  
  gap: 400px;                 
  padding: 20px;
  border-radius: 8px;
`;

const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const CountdownContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: center;
  margin: 60px auto;
  padding: 48px 32px;   /* give it a touch more breathing room */
  width: 92%;           /* was 85% */
  max-width: 1200px;    /* was 1000px */

  background: linear-gradient(135deg, #314E82, #24375e);
  border-radius: 18px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);

  text-align: center;
  overflow: hidden;

  transform: translateY(20px);
  opacity: 0;
  animation: fadeUp 0.9s ease-out forwards;

  @keyframes fadeUp {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;


const CountdownHeaderText = styled.h2`
  font-family: "FONTSPRING DEMO - Lupio ExtBd", sans-serif;
  font-weight: 800;
  font-size: clamp(28px, 4vw, 42px);
  color: #cfe1fa;
  margin-bottom: 28px;

  letter-spacing: 0.04em;
  text-transform: uppercase;

  /* Soft glowing text effect */
  text-shadow: 0 2px 6px rgba(0,0,0,0.4),
               0 0 12px rgba(207,225,250,0.4);
`;

const Homepage = () => {
  return (
    <>
      <Navbar/>
      <HeaderText>COLUMBIA UNIVERSITY AIRPLANE CLUB</HeaderText>
      <HomePageImageContainer src={HomepageImage} alt="Homepage" />

    <InformationContainer>
        <SectionContainer>
            <HeaderText>What We Do</HeaderText>
            <p> This is Text</p>
        </SectionContainer>

        <SectionContainer>
            <HeaderText>Competition</HeaderText>
            <p> This is Text</p>
        </SectionContainer>
    </InformationContainer>

        <CountdownContainer>
    <CountdownHeaderText>COUNTDOWN to DBF 2026:</CountdownHeaderText>
    <Countdown targetDate="2026-04-15T09:00:00-04:00" />
    </CountdownContainer>
    </>
  );
};

export default Homepage;
