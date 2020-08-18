import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../assets/image/website-logo.png";

const Navbar = () => {
    return (
      <>
        <Link to="/">
          <img src={logo} alt="codebar-logo" />
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