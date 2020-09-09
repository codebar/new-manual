import React from 'react';
import logo from '../../assets/image/website-logo.png';
import { MenuLink, ExternalLink, DonateLink } from './Navbar.style';
import { Logo } from './Navbar.style';
import Burger from './Burger';
import styled from 'styled-components';
// const Navbar = () => {
//   return (
//     <Nav>
//       <MenuLink to="/" className="logoContainer">
//         <Logo className="logo" src={logo} alt="codebar-logo" />
//       </MenuLink>
//       <MenuLink to="/about" className="About">
//         About
//       </MenuLink>
//       <MenuLink to="/sponsors" className="Sponsors">
//         Sponsors
//       </MenuLink>
//       <MenuLink to="/organisers" className="Organisers">
//         Organisers
//       </MenuLink>

//       <ExternalLink
//         href="https://codebar.io/"
//         className="Codebar"
//         target="_blank"
//       >
//         codebar.io
//       </ExternalLink>

//       <DonateLink
//         href="https://codebar.enthuse.com/donate/#!/"
//         className="Donate"
//         target="_blank"
//       >
//         Donate
//       </DonateLink>
//     </Nav>
//   );
// };

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  font-size: 1.15rem;
  padding: 0 1rem;
  & .logoContainer {
    text-align: left;
    padding-top: 2.2rem;
    padding-left: 1rem;
  }
  .logo {
    width: 10rem;
  }
`

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
