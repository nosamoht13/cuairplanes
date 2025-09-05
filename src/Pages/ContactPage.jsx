import React from "react";
import styled, { keyframes } from "styled-components";
import Footer from "../Components/footer";
import Navbar from "../Components/navbar";

/* --- animations (must be defined before any styled component uses them) --- */
const dropIn = keyframes`
  0%   { opacity: 0; transform: translateY(20px) scale(0.98); filter: blur(6px); }
  60%  { opacity: 1; transform: translateY(0)    scale(1.00); filter: blur(0); }
  100% { opacity: 1; transform: translateY(0)    scale(1.00); filter: blur(0); }
`;

const trackingIn = keyframes`
  0%   { letter-spacing: -0.06em; }
  100% { letter-spacing: 0.02em; }
`;

/* --- styled components (original styles kept; minimal responsive tweaks) --- */
const HeaderText = styled.h1`
  font-weight: 800;
  font-size: clamp(32px, 6vw, 64px);
  text-align: center;
  color: #2D2C5E;
  margin: 32px 16px;
  animation: ${dropIn} 700ms ease-out both, ${trackingIn} 900ms ease-out both;
  text-shadow: 0 2px 0 rgba(0,0,0,0.05);
`;

const SubheaderText = styled.h2`
  font-weight: 800;
  font-size: clamp(32px, 6vw, 40px);
  text-align: center;
  color: #2D2C5E;
  margin: 32px 16px;
  animation: ${dropIn} 700ms ease-out both, ${trackingIn} 900ms ease-out both;
`;

const ContactPageImageContainer = styled.img`
  width: 60%;
  height: 60%;
  object-fit: cover;
  display: block;
  margin: 16px auto 32px;
  max-width: 100%;
  border: 5px solid #000;
  border-radius: 12px;
  animation: ${dropIn} 700ms ease-out both, ${trackingIn} 900ms ease-out both;

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

const ContactList = styled.div`
  width: min(100%, 26rem);            /* responsive: was fixed 26rem */
  display: flex;
  flex-direction: column;
  animation: ${dropIn} 700ms ease-out both, ${trackingIn} 900ms ease-out both;
`;

const ContactRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  gap: 12px;

  @media (max-width: 520px) {
    flex-direction: column;          /* stack on small phones */
    align-items: flex-start;
    gap: 6px;
  }
`;

const ContactType = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  color: #2b2b5a;
  width: 150px;
  flex-shrink: 0;
  text-align: left;                  /* <- semicolon fixed */

  @media (max-width: 520px) {
    width: auto;
    font-size: 1.2rem;
  }
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: #007bff;
  transition: color 0.2s;
  flex: 1;
  word-break: break-word;
  overflow-wrap: anywhere;           /* long URLs won’t overflow */
  text-align: left;                  /* <- semicolon fixed */

  &:hover { color: #0056b3; }
`;

const ContactContainer = styled.div`
  align-items: center;
  padding: 0 clamp(12px, 4vw, 3rem); /* leaner on phones */
  margin: clamp(16px, 3vw, 3rem) 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;

const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #ccc;
  margin: 0.25rem 0;
`;

const InformationContainer = styled.div`
  background-color: #c6dced;
  padding: clamp(16px, 3vw, 2rem) clamp(16px, 4vw, 4rem);
  margin: 0 clamp(12px, 3vw, 3rem) clamp(20px, 3vw, 3rem);
  font-size: 1.2rem;
  text-align: center;
  animation: ${dropIn} 700ms ease-out both, ${trackingIn} 900ms ease-out both;
`;

const BoardTitle = styled.h2`
  background: #2b2b5a;
  color: white;
  padding: clamp(16px, 3vw, 2rem) clamp(16px, 4vw, 4rem);
  margin: clamp(20px, 3vw, 3rem) clamp(12px, 3vw, 3rem) 1rem;
  font-size: clamp(28px, 6vw, 40px);
  font-weight: 800;
  text-align: center;
  animation: ${dropIn} 700ms ease-out both, ${trackingIn} 900ms ease-out both;
`;

const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0rem;
  row-gap: 1rem;
  margin: 0 clamp(12px, 6vw, 15rem) 3rem;  /* big margins remain on desktop, trimmed on phones */
  justify-items: center;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    & > * { grid-column: auto !important; } /* ignore any inline grid placement */
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  /* center a single last card on wide screens */
  @media (min-width: 901px) {
    & > :last-child { grid-column: 2; }
  }
`;

const BoardCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
  width: 100%;
  max-width: 260px;
  box-shadow: 0 3px 5px rgba(0,0,0,0.1);
`;

const BoardName = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
`;

const BoardPosition = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
`;

const EmailButton = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: #2b2b5a;
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s;

  &:hover {
    background-color: #444488;
  }
`;

/* --- data (unchanged) --- */
const contacts = [
  { type: "Email", link: "mailto:aiaa@columbia.edu", text: "aiaa@columbia.edu"},
  { type: "Linktree", link: "https://linktr.ee/columbia_airplanes", text: "linktr.ee/columbia_airplanes"},
  { type: "LinkedIn", link: "https://www.linkedin.com/company/cuaiaa", text: "linkedin.com/company/cuaiaa"},
  { type: "Instagram", link: "https://www.instagram.com/columbia_airplanes", text: "instagram.com/columbia_airplanes"},
];

const boardMembers = [
  { name: "Arantxa Mendiola", position: "President", email: "am5993@columbia.edu" },
  { name: "Sophie Kloppenburg", position: "Vice President", email: "sck2192@columbia.edu" },
  { name: "Olivia Hall", position: "Treasurer", email: "oah2117@columbia.edu" },
  { name: "Zoee Nocom", position: "Chief Design Engineer", email: "zvn2000@columbia.edu" },
  { name: "Samuel Thomason", position: "Chief Manufacturing Engineer", email: "smt2218@columbia.edu" },
  { name: "Pierce Bader", position: "Quality Control Engineer", email: "ptb2121@columbia.edu" },
  { name: "Casey Roman", position: "Social Chair", email: "cr3324@columbia.edu" },
];

/* --- component (this was missing in your last paste) --- */
const ContactPage = () => {
  return (
    <>
      <Navbar />
      <HeaderText>CONTACT US</HeaderText>

      <InformationContainer>
        <SubheaderText>We'd love to hear from you!</SubheaderText>
        <p>
          Whether you’re a potential member, sponsor, or simply curious about our work,
          our team is always excited to connect.
        </p>
      </InformationContainer>

      <ContactContainer>
        <ContactList>
          {contacts.map((contact, index) => (
            <React.Fragment key={index}>
              <ContactRow>
                <ContactType>{contact.type}</ContactType>
                <ContactLink
                  href={contact.link}
                  target={contact.link.startsWith("mailto:") ? "_self" : "_blank"}
                  rel={contact.link.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                >
                  {contact.text}
                </ContactLink>
              </ContactRow>
              {index < contacts.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </ContactList>
      </ContactContainer>

      <BoardTitle>Contact the Board</BoardTitle>

      <BoardGrid>
        {boardMembers.map((member, index) => (
          <BoardCard key={index}>
            <BoardName>{member.name}</BoardName>
            <BoardPosition>{member.position}</BoardPosition>
            <p>{member.email}</p>
            {/* If you want a mailto button: 
            <EmailButton href={`mailto:${member.email}`}>Email</EmailButton> */}
          </BoardCard>
        ))}
      </BoardGrid>

      <Footer />
    </>
  );
};

export default ContactPage;
