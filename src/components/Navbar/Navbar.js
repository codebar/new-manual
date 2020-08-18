import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../assets/image/website-logo.png";
import Logo from "./Navbar.style"
const Navbar = () => {
    return (
      <>
        <Link to="/">
          <Logo src={logo} alt="codebar-logo" />
        </Link>
        <Link to="/about">About</Link>
        <Link to="/sponsors">Sponsors</Link>
        <Link to="/organisers">Organisers</Link>
        <a href="https://codebar.enthuse.com/donate/#!/">Donate</a>
        <a href="https://codebar.io/">Codebar</a>
      </>
    );
}


export default Navbar;