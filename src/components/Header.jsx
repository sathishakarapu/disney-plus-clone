import React from "react";
import { Link } from "react-router-dom";
import disney from "../images/logo.svg";
import home from "../images/home-icon.svg";
import search from "../images/search-icon.svg";
import original from "../images/original-icon.svg";
import movies from "../images/movie-icon.svg";
import series from "../images/series-icon.svg";
import styled from "styled-components";


const MenuToggle = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    span {
      height: 2px;
      background: white;
      margin: 4px 0;
      width: 25px;
    }
  }
`;

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090913;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 1.6px;
  z-index: 3;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  max-height: 70px;
  margin-top: 4px;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 60px;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a{
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
      min-width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      text-transform: uppercase;
      line-height: 1.08;
      letter-spacing: 1.42;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;

      &::before {
        content: "";
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        height: 2px;
        left: 0px;
        width: auto;
        position: absolute;
        right: 0;
        transform-origin: left center;
        opacity: 0;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        visibility: hidden;
        transform: scale(0);
      }
    }

    &:hover {
      span::before {
        transform: scaleX(1);
        opacity: 1 !important;
        visibility: visible;
      }
    }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    position: absolute;
    top: 50px;
    right: 0;
    background-color: #090913;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    height: auto;
    width: auto;
    padding-top: 20px;
  }
`;

const DropDown = styled.div``;
const SignOut = styled.div`

  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = () => {

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Nav>
        <Logo>
          <Link to="/">
            <img src={disney} alt="disney" />
          </Link>
        </Logo>
        <MenuToggle onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </MenuToggle>
        <NavMenu open={open}>
          <a href="/">
            <img src={home} alt="Home" />
            <span>HOME</span>
          </a>
          <a href="#">
            <img src={search} alt="SEARCH" />
            <span>SEARCH</span>
          </a>
          <a href="/originals">
            <img src={original} alt="Original" />
            <span>ORIGINAL</span>
          </a>
          <a href="/trending">
            <img src={movies} alt="Movies" />
            <span>MOVIES</span>
          </a>
          <a href="/recommends">
            <img src={series} alt="Series" />
            <span>SERIES</span>
          </a>
        </NavMenu>
        <SignOut>
          <DropDown>
            <span>Sign Out</span>
          </DropDown>
        </SignOut>
      </Nav>
    </>
  );
};

export default Header;
