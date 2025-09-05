import React from "react";
import styled, { keyframes } from "styled-components";
import FAQ from "../Components/FAQ"
import EventImage1 from "../Images/FirstMeeting.jpg";
import EventImage2 from "../Images/alma.jpg";
import Video from "../Videos/CUACExperienceVideo.mp4";
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
  font-weight: 800;
  font-size: clamp(32px, 6vw, 64px);
  text-align: center;
  color: #2D2C5E;

  animation:
    ${dropIn} 700ms ease-out both,
    ${trackingIn} 900ms ease-out both;

  text-shadow: 0 2px 0 rgba(0,0,0,0.05);
`;

const SubheaderText = styled.h2`
  font-weight: 800;
  font-size: clamp(32px, 6vw, 40px);
  text-align: center;
  color: #2D2C5E;
  margin: 32px 16px;

  animation:
    ${dropIn} 700ms ease-out both,
    ${trackingIn} 900ms ease-out both;
`;

const EventImage = styled.img`
  width: 100%;          
  height: 100%;     
  object-fit: cover; 
  object-position: center;      
  display: block;        
  margin: 0 auto;       

  animation:
    ${dropIn} 700ms ease-out both,
    ${trackingIn} 900ms ease-out both;
`;

const InformationContainer = styled.div`
  background-color: #c6dced; // light blue            
  padding: 2rem;
  padding-left: 4rem;
  padding-right: 4rem;
  margin: 3rem ;
  margin-top: 0rem;
  font-size: 1.2rem;

  animation:
    ${dropIn} 700ms ease-out both,
    ${trackingIn} 900ms ease-out both;
`;

const Columns = styled.div`
  display: flex;
  gap: 2rem;
  margin: 3rem;
  justify-content: space-between;
  flex-wrap: wrap;

  animation:
    ${dropIn} 700ms ease-out both,
    ${trackingIn} 900ms ease-out both;
`;

const Column = styled.div`
  flex: 1;
  height: 200px;
  background-color: ${props => props.bg || "#eee"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const ButtonColumn = styled(Column)`
  background-color: #2b2b5a;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(1.02); /* optional hover effect */
  }

  &:active {
    transform: scale(0.98); /* pressed effect */
  }
`;

const LeftColumn = styled.div`
  flex: 2; /* takes twice as much space as the right column */
  align-items: stretch;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;        /* spacing between cards */
  margin: 2rem auto;
  max-width: 100%; /* keep cards centered and not too wide */
  flex: 1;
`;

const Card = styled.div`
  overflow: hidden; /* ensures rounded corners wrap both title + body */
`;

const CardTitle = styled.div`
  background-color: #2D2C5E; /* dark blue */
  color: white;
  font-size: 1.75rem;
  font-weight: 800;
  padding: 1rem;
  text-align: center;
`;

const CardDescription = styled.div`
  background-color: #c6dced; /* light blue */
  color: #000;
  font-size: 1.2rem;
  padding: 1.5rem;
  line-height: 1.5;
`;

const RightColumn = styled.div`
  flex: 1; /* narrower column */
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FAQTitle = styled.h2`
  background: #2b2b5a;    /* dark blue */
  color: white;           /* white text */           
  padding: 2rem;
  padding-left: 4rem;
  padding-right: 4rem;
  margin: 3rem ;
  margin-top: 0rem;
  margin-bottom: 1rem;
  font-size: clamp(32px, 6vw, 40px);
  font-weight: 800;
  text-align: center;
`;

const JoinPage = () => {
  return (
    <>
    <Navbar />
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
        <EventImage src={EventImage1} alt="CUAC First GBM"/>
      </Column>
      <Column bg="#2b2b5a" style={{ color: "white" }}>
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
      </Column>
      <Column bg="#ddd">
          <EventImage src={EventImage2} alt="CUAC Gliders"/>
      </Column>
    </Columns>
    <Columns>
      <LeftColumn>
          <SubheaderText style={{textAlign:"left", marginLeft:"0rem", marginTop:"1rem"}}>CUAC Events</SubheaderText>
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
            controls               // shows play/pause bar
            autoPlay={false}       // true if you want autoplay
            loop={false}           // true if you want looping
            muted={false}          // true if autoplaying to avoid browser restrictions
            style={{
              width: "100%",       // fill the column width
              height: "100%",      // fill the column height
              objectFit: "cover",  // crop if needed without stretching
              display: "block",
            }}
          />
        </RightColumn>
    </Columns>
    <FAQTitle>Frequently Asked Questions</FAQTitle>
    <FAQ/>
    <Footer />        
    </>
  );
};

export default JoinPage;
