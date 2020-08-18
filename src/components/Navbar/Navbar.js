import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../assets/1234.png";

const Navbar = () => {
    return (
      <>
            {/* <Link to="/">
              <img src={logo} alt="codebar logo"></img>
            </Link> */}
            <Link to="/about">About</Link>
            <Link to="/sponsors">Sponsors</Link>

      </>
    );
}


export default Navbar;