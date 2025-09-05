// src/Components/navbar.jsx
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Menu, Button } from "antd";
import PlaneClubLogo from "../Images/PlaneClubLogo.png";

// --- colors
const NAVY = "#2D2C5E";
const BLUE = "#C6DCED";

// --- bar wrapper
const Bar = styled.header`
  background: ${BLUE};
  border-bottom: 1px solid rgba(0,0,0,0.08);
  position: sticky;
  top: 0;
  z-index: 50;
`;

// layout
const NavbarContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 96px;
  display: flex;
  align-items: center;
  padding: 0 16px;

  @media (min-width: 900px) {
    padding: 0 40px;
  }
`;

const LogoWrap = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-right: auto;

  img {
    height: 56px;
    width: auto;
    display: block;
  }

  @media (min-width: 900px) {
    img { height: 90px; }
  }
`;

const DesktopMenuWrap = styled.div`
  display: none;

  @media (min-width: 900px) {
    display: block;
  }
`;

const StyledMenu = styled(Menu)`
  background: transparent !important;
  border-bottom: none !important;
  font-weight: 900;
  font-family: "FONTSPRING DEMO - Lupio ExtBd", system-ui, sans-serif;
  font-size: 18px;
  letter-spacing: 0.02em;

  .ant-menu-item, .ant-menu-submenu-title {
    padding: 0 22px !important;
    color: ${NAVY} !important;
  }
`;

const Right = styled.div`
  display: none;
  @media (min-width: 900px) {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-left: 6px;
  }
`;

const JoinBtn = styled(Button)`
  border-radius: 999px !important;
  padding: 10px 22px !important;
  font-size: 18px !important;
  font-weight: 900 !important;
  font-family: "FONTSPRING DEMO - Lupio ExtBd", system-ui, sans-serif;
  text-decoration: none;
  background: #fff !important;
  color: ${NAVY} !important;
  border: 1px solid rgba(0,0,0,.15) !important;
`;

// --- hamburger for mobile
const Burger = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 44px;
  border-radius: 10px;
  border: 1px solid rgba(0,0,0,.12);
  background: #fff;
  margin-left: 8px;
  cursor: pointer;

  @media (min-width: 900px) {
    display: none;
  }

  span {
    position: relative;
    display: block;
    width: 20px;
    height: 2px;
    background: ${NAVY};
  }
  span::before, span::after {
    content: "";
    position: absolute;
    left: 0;
    width: 20px;
    height: 2px;
    background: ${NAVY};
    transition: transform 200ms ease, top 200ms ease, opacity 200ms ease;
  }
  span::before { top: -6px; }
  span::after  { top:  6px; }

  &[aria-expanded="true"] span {
    background: transparent;
  }
  &[aria-expanded="true"] span::before {
    top: 0;
    transform: rotate(45deg);
  }
  &[aria-expanded="true"] span::after {
    top: 0;
    transform: rotate(-45deg);
  }
`;

// --- mobile dropdown panel (uses transient prop `$open`)
const MobilePanel = styled.nav`
  @media (min-width: 900px) { display: none; }

  position: absolute;
  left: 0;
  right: 0;
  background: ${BLUE};
  border-bottom: 1px solid rgba(0,0,0,0.08);
  box-shadow: 0 12px 24px rgba(0,0,0,0.12);
  transform-origin: top;
  transform: ${({ $open }) => ($open ? "scaleY(1)" : "scaleY(0)")};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transition: transform 220ms ease, opacity 220ms ease;
  z-index: 45;
`;

const MobileList = styled.ul`
  list-style: none;
  margin: 8px 12px 16px;
  padding: 0;
`;

const MobileItem = styled.li`
  a {
    display: block;
    padding: 14px 12px;
    font-weight: 900;
    font-family: "FONTSPRING DEMO - Lupio ExtBd", system-ui, sans-serif;
    color: ${NAVY};
    text-decoration: none;
    border-radius: 10px;

    &:active { background: rgba(255,255,255,0.5); }
  }
`;

const MobileJoin = styled(JoinBtn)`
  width: 100%;
  margin: 8px 12px 16px;
`;

// dim background when open (also uses transient prop)
const Backdrop = styled.button`
  @media (min-width: 900px) { display: none; }
  display: ${({ $open }) => ($open ? "block" : "none")};
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.25);
  border: 0;
  padding: 0;
  margin: 0;
  z-index: 40;
`;

const items = [
  { label: <Link to="/">HOME</Link>, key: "home" },
  { label: <Link to="/team">MEET THE TEAM</Link>, key: "team" },
  { label: <Link to="/contact">CONTACT US</Link>, key: "contact" },
  { label: <Link to="/history">HISTORY</Link>, key: "history" },
  { label: <Link to="/sponsors">SPONSORS</Link>, key: "sponsors" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // close the mobile panel when route changes
  useEffect(() => { setOpen(false); }, [location.pathname]);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Bar>
      <NavbarContainer>
        <LogoWrap to="/">
          <img src={PlaneClubLogo} alt="CU Airplane Club" />
        </LogoWrap>

        {/* Desktop menu */}
        <DesktopMenuWrap>
          <StyledMenu mode="horizontal" items={items} selectable={false} disabledOverflow />
        </DesktopMenuWrap>

        <Right>
          <JoinBtn as={Link} to="/joinpage">JOIN</JoinBtn>
        </Right>

        {/* Mobile burger */}
        <Burger
          aria-label="Toggle navigation"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span />
        </Burger>
      </NavbarContainer>

      {/* Mobile dropdown */}
      <MobilePanel id="mobile-menu" $open={open}>
        <MobileList>
          {items.map(({ key, label }) => (
            <MobileItem key={key}>{label}</MobileItem>
          ))}
        </MobileList>
        <MobileJoin as={Link} to="/joinpage">JOIN</MobileJoin>
      </MobilePanel>

      <Backdrop $open={open} onClick={() => setOpen(false)} aria-hidden />
    </Bar>
  );
}
