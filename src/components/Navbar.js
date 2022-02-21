import React from 'react'
import styled from 'styled-components'
import Logo from '../images/logo.svg'
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background-color: #dedede;
  width: 100%;  
  height: 80px;
  /* position: fixed;
  top: 0;
  left: 0; */
`;
const NavbarContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const LogoContainer = styled(Link)`
  height: 25px;
  width: auto;
`;

const NavbarLogo = styled.img`
  height: 100%;
  width: 100%;
`;

const NavbarLinks = styled.div``;

const NavLink = styled(Link)`
  margin: 0 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 70%;
  font-weight: 700;
  color: #332E54;
  text-decoration: none;
  padding-bottom: .2rem;
  transition: all 0.3s ease;

  &:hover{
    border-bottom: 1px solid #000;
  }

`;
const NavbarActions = styled.div``;
const NavAction = styled(Link)`
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #332E54;
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 70%;
  font-weight: 700;
  color: #332E54;
  background: transparent;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover{
    background-color: #332E54;
    color: #fff;
  }
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <LogoContainer to=''>
            <NavbarLogo src={Logo} />
          </LogoContainer>
          <NavbarLinks>
            <NavLink to ='/'>Why Curology</NavLink>
            <NavLink to ='/'>Reviews</NavLink>
            <NavLink to ='/'>Community</NavLink>
          </NavbarLinks>
          <NavbarActions>
          <NavLink to ='/'>Log In</NavLink>
          <NavAction to ='/'>Start Trial</NavAction>
          </NavbarActions>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar