import React from 'react';
import {DonateLink, ExternalLink, MenuLink, NavWrapper } from './Navbar.style'

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