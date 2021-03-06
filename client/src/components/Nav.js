import React from "react";
import { Paw } from "styled-icons/fa-solid";
import styled from "styled-components";

import { Link } from "react-router-dom";

const iconFlex = 7;

const PawIconWrapperLink = styled(Link)`
display: flex;
align-items: center;
flex: ${iconFlex};
color: black;
text-decoration: none;
`;


const iconSize = 40;

const PawIcon = styled(Paw)`
margin-left: 5%;
  
  height: ${iconSize}px;
  width: ${iconSize}px;
`;

const Name = styled.h1`
  margin-left: 2%;
  font-family: 'Pacifico', cursive;
  font-weight: 400;
  text-transform: uppercase;

`;

const Navigation = styled.nav`
display: flex;
height: 50px;
  background-color: white;
`;

const NavList = styled.ul`
width: 100%;
  display: flex;
  justify-content: space-around;
  list-style: none;
  align-items: center;
  flex: ${10-iconFlex};
`;

const ListItem = styled.li`
`;


const Nav = () => {
  return (
    <header>
      <Navigation>
        <PawIconWrapperLink to="/">

        <PawIcon />
          <Name>Catabase</Name>
        </PawIconWrapperLink>
        <NavList>
          <ListItem>Home</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Contact</ListItem>
          <ListItem>Support</ListItem>
        </NavList>
      </Navigation>
    </header>
  );
};

export default Nav;
