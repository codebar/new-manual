import React from 'react';
import logo from '../../assets/image/logo.png';
import { Nav, Logo, MenuLink, ExternalLink, DonateLink } from './Navbar.style';

const Navbar = () => {
  return (
    <Nav>
      <MenuLink to="/" className="Logo">
        <Logo src={logo} alt="codebar-logo" />
      </MenuLink>
      <MenuLink to="/about" className="About">
        About
      </MenuLink>
      <MenuLink to="/sponsors" className="Sponsors">
        Sponsors
      </MenuLink>
      <MenuLink to="/organisers" className="Organisers">
        Organisers
      </MenuLink>

      <ExternalLink
        href="https://codebar.io/"
        className="Codebar"
        target="_blank"
      >
        codebar.io
      </ExternalLink>

      <DonateLink
        href="https://codebar.enthuse.com/donate/#!/"
        className="Donate"
        target="_blank"
      >
        Donate
      </DonateLink>
    </Nav>
  );
};

export default Navbar;
