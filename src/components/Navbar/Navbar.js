import React from 'react';
import logo from '../../assets/image/website-logo.png';
import { Nav, MenuLink } from './Navbar.style';
import { Logo } from './Navbar.style';
import Burger from './Burger';



const Navbar = () => {
  return (
    <Nav>
      <MenuLink to="/" className="logoContainer">
        <Logo className="logo" src={logo} alt="codebar-logo" />
      </MenuLink>
      <Burger />
    </Nav>
  )
}

export default Navbar;
