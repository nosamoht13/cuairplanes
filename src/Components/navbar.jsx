/ Components/Navbar.jsx
import React from "react";
import { Menu, Button } from "antd";
import styled from "styled-components";
import PlaneClubLogo from "../Images/PlaneClubLogo.png";

const Bar = styled.div`
  background: #c6dced;        /* light blue strip */
  border-bottom: 1px solid rgba(0,0,0,0.08);
`;

const NavbarContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 12px;
`;

const LogoWrap = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  img { height: 42px; width: auto; display: block; }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;                 /* center the menu */
`;

const StyledMenu = styled(Menu)`
  background: transparent !important;
  border-bottom: none !important;
  font-weight: 700;
  letter-spacing: .02em;

  & .ant-menu-item {
    padding: 0 18px !important;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const JoinBtn = styled(Button)`
  border-radius: 999px !important;
  padding: 6px 18px !important;
  font-weight: 800 !important;
  background: white !important;
  color: #1f2547 !important;
  border: 1px solid rgba(0,0,0,.15) !important;
  &:hover { filter: brightness(0.97); }
`;

// small red helper line under the bar (like the mock)
const HelperStrip = styled.div`
  background: #c6dced;
  color: #b80f0a;
  font-size: 12px;
  text-align: center;
  padding-bottom: 6px;
`;

const items = [
  { label: "MEET THE TEAM", key: "team" },
  { label: "CONTACT US", key: "contact" },
  { label: "HISTORY", key: "history" },
  { label: "SPONSORS", key: "sponsors" },
];

export default function Navbar() {
  return (
    <>
      <Bar>
        <NavbarContainer>
          <LogoWrap href="/">
            <img src={PlaneClubLogo} alt="CU Airplane Club" />
          </LogoWrap>

          <Flex>
            <StyledMenu mode="horizontal" items={items} selectable={false} />
          </Flex>

          <Right>
            <JoinBtn>JOIN</JoinBtn>
          </Right>
        </NavbarContainer>
      </Bar>

      <HelperStrip>
        will make these working buttons eventually, and even everything out
      </HelperStrip>
    </>
  );
}
