import React from "react";
import styled, { keyframes } from "styled-components";
import FAQ from "../Components/FAQ";
import EventImage1 from "../Images/FirstMeeting.jpg";
import EventImage2 from "../Images/alma.jpg";
import Video from "../Videos/CUACExperienceVideo.mp4";
import Footer from "../Components/footer";
import Navbar from "../Components/navbar";

/* animations */
const dropIn = keyframes`
  0%   { opacity: 0; transform: translateY(20px) scale(0.98); filter: blur(6px); }
  60%  { opacity: 1; transform: translateY(0)    scale(1.00); filter: blur(0); }
  100% { opacity: 1; transform: translateY(0)    scale(1.00); filter: blur(0); }
`;
const trackingIn = keyframes`
  0%   { letter-spacing: -0.06em; }
  100% { letter-spacing: 0.02em; }
`;

/* optional wrapper to give comfy gutters on phones / cap width on desktop */
const Page = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(12px, 3vw, 24px);
`;

const HeaderText = styled.h1`
  font-weight: 800;
  font-size: clamp(32px, 6vw, 64px);
  text-align: center;
  color: #2D2C5E;
  animation: ${dropIn} 700ms ease-out both, ${trackingIn} 900ms ease-out both;
  text-shadow: 0 2px 0 rgba(0,0,0,0.05);
`;

const SubheaderText = styled.h2`
  font-weight: 800;
  font-size: clamp(28px, 5.5vw, 40px);
  text-align: center;
  color: #2D2C5E;
  margin: 32px 16px;
  animation: ${dropIn} 700ms ease-out both, ${trackingIn} 900ms ease-out both;
`;

const EventImage = styled.img`
  width: 100%;
  height: auto;               /* was 100% — lets it shrink naturally */
  object-fit: cover;
  object-position: center;
  display: block;
  margin: 0 auto;
  border-radius: 4px;
  animation: ${dropIn} 700ms ease-out both, ${trackingIn} 900ms ease-out both;
`;

const InformationContainer = styled.div`
  background-color: #c6dced; /* light blue */
  padding: clamp(16px, 3vw, 2rem) clamp(16px, 4vw, 4rem);
  margin: 0 clamp(12px, 3vw, 3rem) clamp(20px, 3vw, 3rem);
  font-size: 1.2rem;
  animation: ${dropIn} 700ms ease-out both, ${trackingIn} 900ms ease-out both;
`;

/* 3-tile row (image • button • image) */
const Columns = styled.div`
  display: flex;
  gap: 2rem;
  margin: 3rem 0;
  justify-content: space-between;
  flex-wrap: wrap;
  animation: ${dropIn} 700ms ease-out both, ${trackingIn} 900ms ease-out both;

  /* keep nice side gutters consistent with Page on tiny screens */
  @media (max-width: 640px) {
    gap: 1rem;
    margin: 1.5rem 0;
  }
`;

const Column = styled.div`
  /* allow wrapping with sensible minimums; keeps 3-up on desktop, 1-up on small phones */
  flex: 1 1 280px;
  min-width: 0;
  height: 200px;
  background-color: ${props => props.bg || "#eee"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 6px;
  overflow: hidden;

  @media (max-width: 640px) {
    height: 180px;
  }
`;

const ButtonColumn = styled(Column)`
  background-color: #2b2b5a;
  color: white;
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  cursor: pointer;
  transition: transform 0.1s ease;

  &:hover { transform: scale(1.02); }
  &:active { transform: scale(0.98); }
`;


const LeftColumn = styled.div`
  flex: 2 1 420px;
  align-items: stretch;
  min-width: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 640px) {
    align-items: center;      /* center children horizontally */
    text-align: center;       /* center text inside */
  }
`;

const RightColumn = styled.div`
  flex: 1 1 320px;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  overflow: hidden;
  min-width: 0;

  & > video {
    width: 100%;
    height: 100%;          /* fill height of container */
    object-fit: cover;
  }

  @media (max-width: 640px) {
    height: 350px;         /* set a sensible tall height on phones */
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
  max-width: 100%;
  flex: 1;
`;

const Card = styled.div`
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.08);
`;

const CardTitle = styled.div`
  background-color: #2D2C5E;
  color: white;
  font-size: 1.6rem;
  font-weight: 800;
  padding: 1rem;
  text-align: center;
`;

const CardDescription = styled.div`
  background-color: #c6dced;
  color: #000;
  font-size: 1.1rem;
  padding: 1.25rem 1.5rem;
  line-height: 1.5;
`;

const FAQTitle = styled.h2`
  background: #2b2b5a;
  color: white;
  padding: clamp(16px, 3vw, 2rem) clamp(16px, 4vw, 4rem);
  margin: 3rem 0 1rem 0;
  font-size: clamp(28px, 6vw, 40px);
  font-weight: 800;
  text-align: center;
`;

const JoinPage = () => {
  return (
    <>
      <Navbar />
      <Page>
        <HeaderText>JOIN US</HeaderText>

        <InformationContainer>
          <SubheaderText>Want to see your ideas take flight?</SubheaderText>
          <p>
            If so, CUAC is the perfect place to gain hands-on experience in aircraft design,
            manufacturing, and testing. We welcome students from any year or major, with no
            application process and no prior experience required — we’ll teach you everything
            you need to know. New members can join year-round, so you can start learning and 
            building with us any time!
          </p>
          <p>
            If you want to receive regular updates from our club, click the button 
            below to join our mailing list.
          </p>
        </InformationContainer>

        <Columns>
          <Column bg="#ddd">
            <EventImage src={EventImage1} alt="CUAC First GBM" />
          </Column>

          <ButtonColumn
            onClick={() =>
              window.open(
                "https://listserv.cuit.columbia.edu/scripts/wa.exe?SUBED1=CUAIRPLANECLUB&A=1",
                "_blank"
              )
            }
          >
            Join our mailing list!
          </ButtonColumn>

          <Column bg="#ddd">
            <EventImage src={EventImage2} alt="CUAC Gliders" />
          </Column>
        </Columns>

        <Columns>
          <LeftColumn>
            <SubheaderText style={{ textAlign: "left", marginLeft: 0, marginTop: "1rem" }}>
              CUAC Events
            </SubheaderText>

            <CardContainer>
              <Card>
                <CardTitle>Cookies and CAD</CardTitle>
                <CardDescription>
                  Kick off the semester with some cookies and an introduction to Computer Aided 
                  Design! We’ll cover the basics in the first session, then move onto more 
                  advanced features in the second.
                </CardDescription>
              </Card>

              <Card>
                <CardTitle>CUAC and Guac</CardTitle>
                <CardDescription>
                  Come enjoy some chips and guacamole while we break down the competition 
                  rules and develop a game plan for the year.
                </CardDescription>
              </Card>

              <Card>
                <CardTitle>Pretzels and Prototyping</CardTitle>
                <CardDescription>
                  Join us for a session focused on prototype design, where you can twist your 
                  ideas into shape (while eating pretzels, of course!)
                </CardDescription>
              </Card>

              <Card>
                <CardTitle>Fruit and FEA</CardTitle>
                <CardDescription>
                  We’ll teach you how to evaluate and improve your designs using Finite Element 
                  Analysis, accompanied by fresh fruit. We know engineers don’t get enough of 
                  that.
                </CardDescription>
              </Card>
            </CardContainer>
          </LeftColumn>

          <RightColumn>
            <video
              src={Video}
              controls
              autoPlay={false}
              loop={false}
              muted={false}
            />
          </RightColumn>
        </Columns>

        <FAQTitle>Frequently Asked Questions</FAQTitle>
        <FAQ/>
      </Page>
      <Footer />
    </>
  );
};

export default JoinPage;
