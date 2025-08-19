import React from "react";
import { Menu, Button } from "antd";
import styled from "styled-components";
import PlaneClubLogo from "../Images/PlaneClubLogo.png"; // Import the logo image

const NavbarContainer = styled.div`
  background-color: #C6DCED;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  display: flex;
  align-items: center;

  img {
    height: 40px;
    margin-right: 10px;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;

  .ant-menu {
    background-color: #C6DCED;
    border-bottom: none;
  }

  .join-button {
    margin-left: 20px;
    background-color: #fff;
    color: #000;
    border-radius: 20px;
    padding: 5px 15px;
    font-weight: bold;
  }
`;

const Navbar = () => {
  const items = [
    {
      label: "Meet the Team",
      key: "meet-the-team",
    },
    {
      label: "Contact Us",
      key: "contact-us",
    },
    {
      label: "History",
      key: "history",
    },
    {
      label: "Sponsors",
      key: "sponsors",
    },
  ];

  return (
    <NavbarContainer>
      {/* Logo on the left */}
      <Logo>
        <img src={PlaneClubLogo} alt="PlaneClub Logo" />
      </Logo>

      {/* Menu and Join button on the right */}
      <MenuContainer>
        <Menu mode="horizontal" items={items} />
        <Button className="join-button">Join</Button>
      </MenuContainer>
    </NavbarContainer>
  );
};

export default Navbar;