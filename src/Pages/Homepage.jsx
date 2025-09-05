import React from "react";
import styled, { keyframes } from "styled-components";
import HomepageImage from "../Images/HomepageImage.jpg";
import Countdown from "../Components/Countdown";
import Footer from "../Components/footer";
import Navbar from "../Components/navbar";



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
  margin: 60px 32px;

  animation:
    ${dropIn} 700ms ease-out both,
    ${trackingIn} 900ms ease-out both;

  text-shadow: 0 2px 0 rgba(0,0,0,0.05);
`;

const HomePageImageContainer = styled.img`
  width: 74%;
  height: auto;
  object-fit: cover;
  display: block;
  margin: 3rem auto;
  max-width: 100%;
  border: 5px solid #2D2C5E;

  
  animation:
    ${dropIn} 700ms ease-out both,
    ${trackingIn} 900ms ease-out both;
`;


const CountdownContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: center;
  margin: 60px auto;
  padding: 30px 0px;   
  width: 75%;           
  max-width: 1440;    

  background: #2D2C5E;
  border-radius: 0;
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
`;

const Section = styled.section`
max-width: 1100 px;
margin: 48px auto 24px;
padding: 0 24px;
`
// Wrap matches the photo width and centers it
const InfoPanel = styled.section`
  width: 75%;           /* ← same as HomePageImageContainer */
  margin: 2rem auto;    /* centers under the photo */
  background: #C6DCED;  /* light blue background */
  padding: 24px 28px;   /* breathing room inside */
  border: 5px solid #2D2C5E;   /* match image border */
  box-sizing: border-box;       /* include border in width */
`;

// Two-column layout inside the light-blue panel
const InformationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px;
  align-items: start;
  justify-items: center;

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr; /* side-by-side on desktop */
    gap: 48px;
  }
`;

const Subhead = styled.h2`
  font-family: "FONTSPRING DEMO - Lupio ExtBd", sans-serif;
  font-weight: 800;
  font-size: clamp(24px, 3.2vw, 40px);
  color: #2D2C5E;
  text-align: center;
  margin: 0 0 10px;
`;

const Blurb = styled.p`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  line-height: 1.6;
  font-size: 1.05rem;
  color: #2D2C5E;
`;


const Homepage = () => {
  return (
    <>
      <Navbar/>
      <HeaderText>COLUMBIA UNIVERSITY AIRPLANE CLUB</HeaderText>
      <HomePageImageContainer src={HomepageImage} alt="Homepage" />

  <InfoPanel>
  <InformationGrid>
    <div>
      <Subhead>What We Do</Subhead>
      <Blurb>
        We design, build, and fly airplanes for the annual AIAA Design/Build/Fly competition.
        Each year we take on a new challenge, working as a team to create and test an aircraft
        while gaining hands-on experience in engineering and aviation.
      </Blurb>
    </div>

    <div>
      <Subhead>Competition</Subhead>
      <Blurb>
        This year’s AIAA Design/Build/Fly mission is to create a banner-towing bush plane. Our aircraft must carry rubber duck “passengers” and hockey puck cargo, then successfully deploy and release a banner in flight. The challenge pushes us to balance payload capacity, structural design, and innovative deployment systems while staying within strict size and cost limits.
      </Blurb>
    </div>
  </InformationGrid>
</InfoPanel>



        <CountdownContainer>
    <CountdownHeaderText>COUNTDOWN to DBF 2026:</CountdownHeaderText>
    <Countdown targetDate="2026-04-16T10:00:00-05:00" />
    </CountdownContainer>
     <Footer />

    </>
  );
};

export default Homepage;
