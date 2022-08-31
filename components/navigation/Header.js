import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// Component imports
import Hamburger from "./Hamburger";
import SideNav from "./SideNav";
// External imports
import styled from "styled-components";

const Navbar = styled.nav`
  padding: 0 ${(props) => props.theme.standardPadding};
  width: 100vw;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  background-color: #f2ab5e;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  z-index: 100;

  @media (max-width: 768px) {
    padding: 0 ${(props) => props.theme.mobilePadding};
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  object-fit: contain;
`;

const NavList = styled.ul`
  height: 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

const NavItem = styled.li`
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  height: 80%;
  display: none;
  transition: background-color 0.3s ease;
  border-radius: 3px;
  color: #000112;

  &:hover {
    color: #fff;
    cursor: pointer;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    padding: 0 2rem;
    font-size: 1.333rem;
    height: 100%;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

export default function Header() {
  const [sideNavigationOpen, setSideNavigationOpen] = useState(false);

  const openHandler = () => {
    setSideNavigationOpen(!sideNavigationOpen);
  };

  return (
    <Navbar>
      <LogoContainer>
        <Image src='/imgs/logo.png' width='275' height='48' />
      </LogoContainer>
      <NavList>
        <NavItem>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </NavItem>

        <NavItem>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </NavItem>

        <NavItem>
          <Link href='/services'>
            <a>Services</a>
          </Link>
        </NavItem>

        <NavItem>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </NavItem>

        <Hamburger
          openHandler={openHandler}
          sideNavigationOpen={sideNavigationOpen}
        />
      </NavList>
      <SideNav sideOpen={sideNavigationOpen} openHandler={openHandler} />
    </Navbar>
  );
}
