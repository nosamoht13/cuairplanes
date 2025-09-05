import React from "react";
import { Menu, Button } from "antd";
import styled from "styled-components";
import PlaneClubLogo from "../Images/PlaneClubLogo.png";
import { Link } from "react-router-dom";
const Bar = styled.div`
  background: #c6dced;        /* light blue strip */
  border-bottom: 1px solid rgba(0,0,0,0.08);
`;

const NavbarContainer = styled.div`
  max-width: 1440;
  margin: 0 auto;
  height: 96px;            /* thicker navbar if you want */
  display: flex;           /* flex layout */
  align-items: center;     /* vertical centering */
  padding: 0 40px;         /* space from edges */
`;

const LogoWrap = styled.a`
  margin-right: auto;      /* pushes menu + JOIN to the far right */
  display: inline-flex;
  align-items: center;

  img {
    height: 90px;          /* bigger logo */
    width: auto;
    display: block;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  margin-right: 10px; 
`;



const StyledMenu = styled(Menu)`
  background: transparent !important;
  border-bottom: none !important;
  font-weight: 900;
  font-family: "FONTSPRING DEMO - Lupio ExtBd", system-ui, sans-serif;
  font-size: 18px;
  letter-spacing: 0.02em;
  color: #2D2C5E !important; 

  .ant-menu-item {
    padding: 0 22px !important;
    color: #2D2C5E !important; 
  }
`;


const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const JoinBtn = styled(Link)`
  border-radius: 999px;
  padding: 8px 22px;
  font-size: 18px;
  font-weight: 900;
  font-family: "FONTSPRING DEMO - Lupio ExtBd", system-ui, sans-serif;
  background: white;
  color: #1f2547;
  border: 1px solid rgba(0,0,0,.15);
  text-decoration: none; /* remove underline */
  display: inline-block;

  &:hover {
    background: #f0f0f0;
    text-decoration: none;
  }
`;






const items = [
  {
    label: <Link to="/">HOME</Link>,
    key: "home",
  },
  {
    label: <Link to="/team">MEET THE TEAM</Link>,
    key: "team",
  },
  {
    label: <Link to="/contact">CONTACT US</Link>,
    key: "contact",
  },
  {
    label: <Link to="/history">HISTORY</Link>,
    key: "history",
  },
  {
    label: <Link to="/sponsors">SPONSORS</Link>,
    key: "sponsors",
  },
];

export default function Navbar() {
  return (
    <>
      <Bar>
        <NavbarContainer>
          <LogoWrap href="/columbiauniversityplaneclub">
            <img src={PlaneClubLogo} alt="CU Airplane Club" />
          </LogoWrap>

          <Flex>
            <StyledMenu mode="horizontal" items={items} selectable={false} disabledOverflow />
          </Flex>

          <Right>
            <JoinBtn to="/join">JOIN</JoinBtn>
          </Right>
        </NavbarContainer>
      </Bar>
    
    </>
  );
}
