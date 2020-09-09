import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../globalstyle/colors';
import { device } from '../../globalstyle/mediaQueries';
import { Link } from 'react-router-dom';
import {DonateLink, ExternalLink } from './Navbar.style'


const NavWrapper = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    li {
    padding: 18px 10px;
    }
    @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #4BAFFF;
    opacity: 95%;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    // transition: transform 0.3s ease-in-out;

    li {
        padding: 18px 10px;
        background-color: 
    }
`;

const textDecoration = 'text-decoration: none;';

const MenuLink = styled(Link)`
  ${textDecoration}
  color: black;
  @media (max-width: 768px){
      color: white;
      
  }
`;

const RightNav = ({ open }) => {
    return (
        <NavWrapper open={open}>
            <li>
            <MenuLink to="/about" className="About">
            About
            </MenuLink>
            </li>
            <li>
            <MenuLink to="/sponsors" className="Sponsors">
            Sponsors
             </MenuLink>
            </li>
            <li>
            <MenuLink to="/organisers" className="Organisers">
            Organisers
             </MenuLink>
            </li>
            <li>
            <ExternalLink
            href="https://codebar.io/"
            className="Codebar"
            target="_blank"
        >
            codebar.io
        </ExternalLink>
            </li>

            <li>
            <DonateLink
            href="https://codebar.enthuse.com/donate/#!/"
            className="Donate"
            target="_blank"
        >
            Donate
        </DonateLink>
            </li>

     
        </NavWrapper>
    )
}


export default RightNav;