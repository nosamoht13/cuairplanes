// Pages/Team.jsx
import React from "react";
import styled, { keyframes } from "styled-components";
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";

// TODO: replace with real headshots in /src/Images/
import p1 from "../Images/sam.jpg";
import p2 from "../Images/sophie.jpg";
import p3 from "../Images/olivia.jpg";
import p4 from "../Images/zoee.jpg";
import p5 from "../Images/sam.jpg";
import p6 from "../Images/casey.jpg";
import p7 from "../Images/pierce.jpg";

const dropIn = keyframes`
  0%   { opacity: 0; transform: translateY(20px) scale(0.98); filter: blur(6px); }
  60%  { opacity: 1; transform: translateY(0)    scale(1.00); filter: blur(0); }
  100% { opacity: 1; transform: translateY(0)    scale(1.00); filter: blur(0); }
`;
const trackingIn = keyframes`
  0%   { letter-spacing: -0.06em; }
  100% { letter-spacing: 0.02em; }
`;

const COLORS = {
  navy: "#2D2C5E",
  light: "#C6DCED",
  copy: "#2D2C5E",
};

/* Page wrapper */
const Page = styled.main`
  color: ${COLORS.copy};
`;

/* Width + alignment match your Home image / info panel (75%) */
const Wrap = styled.div`
  width: 75%;
  margin: 0 auto;
`;

/* Page title */
const Title = styled.h1`
  font-family: "FONTSPRING DEMO - Lupio ExtBd", system-ui, sans-serif;
  font-weight: 800;
  font-size: clamp(28px, 5vw, 56px);
  color: ${COLORS.navy};
  text-align: center;
  margin: 48px 0 8px;

  animation:
    ${dropIn} 700ms ease-out both,
    ${trackingIn} 900ms ease-out both;
`;

/* Intro panel (light blue block) */
const Intro = styled.section`
  background: ${COLORS.light};
  border: 0px solid ${COLORS.navy};
  box-sizing: border-box;
  padding: 24px 28px;
  margin: 16px 0 36px;
  text-align: center;
  line-height: 1.6;
  font-size: 1.05rem;

  animation:
    ${dropIn} 700ms ease-out both,
    ${trackingIn} 900ms ease-out both;
`;

/* Responsive grid: 3 / 2 / 1 */
const Grid = styled.section`
  display: grid;
  gap: 28px;
  grid-template-columns: 1fr;
  margin-bottom: 4rem;

  @media (min-width: 680px) { grid-template-columns: repeat(2, 1fr); }
  @media (min-width: 1024px){ grid-template-columns: repeat(3, 1fr); }

  animation:
    ${dropIn} 700ms ease-out both,
    ${trackingIn} 900ms ease-out both;
`;

/* Team card */
const Card = styled.article`
  background: ${COLORS.light};
  border: 0px solid ${COLORS.navy};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 12px;
  transition: transform .2s ease, box-shadow .2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(0,0,0,.15);
  }
`;

const Portrait = styled.img`
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  display: block;
  border: 0px solid ${COLORS.navy};
  box-sizing: border-box;
`;

const Body = styled.div`
  padding: 14px 10px 6px;
  text-align: center;
`;

const Name = styled.h3`
  font-family: "FONTSPRING DEMO - Lupio ExtBd", system-ui, sans-serif;
  font-weight: 800;
  font-size: 1.25rem;
  margin: 6px 0 2px;
  color: ${COLORS.navy};
`;

const Role = styled.div`
  font-size: .95rem;
  letter-spacing: .02em;
  opacity: .85;
  margin-bottom: 8px;
`;

const Blurb = styled.p`
  font-size: .98rem;
  line-height: 1.55;
  color: ${COLORS.copy};
  margin: 0;
`;

const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-top: 10px;

  a { color: ${COLORS.navy}; text-decoration: none; font-weight: 700; }
  a:hover { text-decoration: underline; }
`;
/* ---------- Subteams overview panel ---------- */
const SubteamsInfoSection = styled.section`
  width: 75%;
  text-align: center;
  margin: 2.5rem auto 1.5rem;
  border: 0px solid ${COLORS.navy};
  box-sizing: border-box;
  background: ${COLORS.light};
`;

/* Navy bar title */
const SubteamsInfoHeader = styled.div`
  background: ${COLORS.navy};
  color: #fff;
  padding: 12px 20px;
  font-family: "FONTSPRING DEMO - Lupio ExtBd", system-ui, sans-serif;
  font-weight: 800;
  font-size: clamp(20px, 3.2vw, 34px);
`;

/* Content area */
const SubteamsInfoBody = styled.div`
  padding: 20px 22px;
  display: grid;
  gap: 18px;

  /* Two columns on wide screens */
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 24px 28px;
  }
`;

/* One item (title + description) */
const SubteamInfoItem = styled.div`
  background: rgba(255,255,255,0.4);
  padding: 14px 16px;
`;

/* Bold subteam name at start of sentence */
const SubteamInfoTitle = styled.span`
  display: inline;
  font-weight: 800;
  color: ${COLORS.navy};
`;

const SubteamsSection = styled.section`
  width: 75%;
  margin: 3rem auto 4rem;
  background: ${COLORS.light};
  border: 0px solid ${COLORS.navy};
  box-sizing: border-box;
  padding: 28px;
`;

const SubteamsTitle = styled.h2`
  font-family: "FONTSPRING DEMO - Lupio ExtBd", system-ui, sans-serif;
  font-weight: 800;
  font-size: clamp(22px, 4vw, 40px);
  color: ${COLORS.navy};
  text-align: center;
  margin-bottom: 24px;
  border-bottom: 0px solid ${COLORS.navy};
`;

const SubteamGroup = styled.div`
  margin-bottom: 50px;
  
`;

const SubteamName = styled.h3`
  font-family: "FONTSPRING DEMO - Lupio ExtBd", system-ui, sans-serif;
  font-size: 1.6rem;
  color: ${COLORS.navy};
  text-align: center;
  margin-bottom: 20px;
  border-bottom: 3px solid ${COLORS.navy};
  padding-bottom: 8px;
`;

const MemberList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;

  li {
    font-size: 1.2rem;
    line-height: 2.2;
    color: ${COLORS.copy};
    border-bottom: 1px solid ${COLORS.navy};
    padding: 6px 0;
    margin: 0 auto;
    width: 100%;
  }
`;

const TEAM = [
  { img: p1, name: "Arantxa Mendiola", role: "President",
    blurb: "I’m Arantxa, a senior majoring in Mechanical Engineering with a minor in Aerospace Engineering, and I currently serve as President of CUAC. I’m originally from Tijuana, Mexico, right across the border from San Diego, CA. Outside of CUAC, I enjoy playing tennis, reading, and Legos (my dream set is the Concorde).",
    ig: "", li: "" },
  { img: p2, name: "Sophie Kloppenburg", role: "Vice President",
    blurb: "I’m a Sustainable Development major with a concentration in Chemistry. I’ve always loved aviation and want to earn my private pilot's license after graduation. I’ve worked on the structures and electrical subteams, and have a particular interest in sustainable aviation fuel. Outside of CUAC, I swim for Columbia and enjoy traveling, creative endeavors, and of course spending time with my family, friends, and cats.",
    ig: "", li: "" },
  { img: p3, name: "Olivia Hall", role: "Treasurer",
    blurb: "My name is Olivia and I’m currently a junior in Mechanical Engineering with an Aerospace Engineering minor. I am the 2025-2026 Treasurer and I primarily work on the structures subteam. I have a passion for teaching and iterative design, and a research interest in manufacturing techniques.  Outside of CUAC, I enjoy board games, flea markets, and underground concerts.",
    ig: "", li: "" },
  { img: p4, name: "Zoee Nocom", role: "Chief Design Engineer",
    blurb: "I’m Zoee, a senior studying Mechanical Engineering and this year’s Chief Design Engineer for CUAC. My family is from the Philippines and I grew up in Hong Kong. In my free time, I enjoy crocheting, playing the guitar, and doing the NYT crossword!",
    ig: "", li: "" },
  { img: p5, name: "Sam Thomason", role: "Chief Manufacturing Engineer",
    blurb: "I’m Sam, a senior studying Mechanical Engineering with a minor in Computer Science and the Chief Manufacturing Engineer for CUAC. I love working on airplanes, biking around the city, and listening to Brazilian music.",
    ig: "", li: "" },
  { img: p6, name: "Casey Roman", role: "Social Chair",
    blurb: "I’m Casey, a sophomore majoring in Computer Science with a minor in Aerospace Engineering and I’m the current Social Chair for CUAC. As a native New Yorker, I love to represent my city and Columbia at competition! I have a passion for all things colorful and creative, and I’m especially fond of the satisfaction of completing something challenging.",
    ig: "", li: "" },
  { img: p7, name: "Pierce Bader", role: "Quality Control Engineer",
    blurb: "I’m Pierce, a sophomore studying Mechanical Engineering and CUAC’s Chief Quality Control Engineer. I’m originally from Seattle and am passionate about autonomous aerial robotics, e-aviation, and foreign policy. Outside of CUAC, I enjoy running, tennis, and exploring NYC’s culinary scene.",
    ig: "", li: "" },
];
const SUBTEAMS = {
  Structures: [
    "Marco Giordano",
    "Olivia Hall",
    "Theo Lack",
    "April Li",
    "Arantxa Mendiola",
    "Zoee Nocom",
    "Casey Roman",
    "Sam Thomason",
    "Jay Yadav",
    "Max Zeng",
  ],
  Electrical: [
    "Pierce Bader",
    "William Chen",
    "Oscar Espinoza",
    "Shaylee Gill",
    "Jeffrey Hernandez",
    "Alvin Jo",
    "Sophie Kloppenburg",
    "Zachary Silver",
  ],
  Aerodynamics: [
    "Eytan Abramowitz",
    "Liam Birkenstock-Smith",
    "Yasser Espinoza-Gutierrez",
    "Maryam Naser",
    "Luca Nashabeh",
  ],
  Payload: [
    "Kevin Arista Solis",
    "Ian Chen-Adamczyk",
    "Ethan Matzner",
    "Sarai Zarate",
  ],
};

/* ---------- Page ---------- */
export default function Team() {
  return (
    <Page>
      <Navbar />

      <Title>MEET THE TEAM</Title>

      <Wrap>
        <Intro>
          We’re a student-run board that designs, builds, and flies our DBF aircraft.
          Meet the leads who organize everything!
        </Intro>

        <Grid aria-label="Board members">
          {TEAM.map(({ img, name, role, blurb, ig, li }) => (
            <Card key={name}>
              <Portrait src={img} alt={`${name} – ${role}`} />
              <Body>
                <Name>{name}</Name>
                <Role>{role}</Role>
                <Blurb>{blurb}</Blurb>

                {(ig || li) && (
                  <SocialRow>
                    {ig && <a href={ig} target="_blank" rel="noreferrer">IG</a>}
                    {li && <a href={li} target="_blank" rel="noreferrer">LinkedIn</a>}
                  </SocialRow>
                )}
              </Body>
            </Card>
          ))}
        </Grid>
      </Wrap>
      <SubteamsInfoSection>
  <SubteamsInfoHeader>Subteams</SubteamsInfoHeader>

  <SubteamsInfoBody>
    <SubteamInfoItem>
      <p>
        <SubteamInfoTitle>Aerospace</SubteamInfoTitle> — designs the wings and
        empennage to optimize flight stability and control, using Computational
        Fluid Dynamics (CFD) to guide decisions.
      </p>
    </SubteamInfoItem>

    <SubteamInfoItem>
      <p>
        <SubteamInfoTitle>Electrical</SubteamInfoTitle> — integrates avionics,
        wiring, batteries, power distribution, radio links, and propeller/motor
        specs to deliver reliable performance and efficiency.
      </p>
    </SubteamInfoItem>

    <SubteamInfoItem>
      <p>
        <SubteamInfoTitle>Structures</SubteamInfoTitle> — engineers and
        manufactures the airframe (spars, ribs, joints, gear mounts, fuselage),
        balancing weight, strength, and manufacturability.
      </p>
    </SubteamInfoItem>

    <SubteamInfoItem>
      <p>
        <SubteamInfoTitle>Payloads</SubteamInfoTitle> — works with aerospace,
        electrical, and structures to implement DBF-specific systems such as
        banners, deploy/release mechanisms, foldable wings, and other mission
        hardware.
      </p>
    </SubteamInfoItem>

    <SubteamInfoItem style={{ gridColumn: "1 / -1" }}>
      <p>
        <SubteamInfoTitle>Operations &amp; Development</SubteamInfoTitle> —
        community building, recruiting, sponsorships, branding, alumni
        relations, website maintenance, documentation, and event logistics.
      </p>
    </SubteamInfoItem>
  </SubteamsInfoBody>
</SubteamsInfoSection>
<SubteamsSection>
  <SubteamsTitle>Current Members</SubteamsTitle>

  {Object.entries(SUBTEAMS).map(([teamName, members]) => (
    <SubteamGroup key={teamName}>
      <SubteamName>{teamName}</SubteamName>
      <MemberList>
        {members.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </MemberList>
    </SubteamGroup>
  ))}
</SubteamsSection>
      <Footer />
    </Page>
  );
}
