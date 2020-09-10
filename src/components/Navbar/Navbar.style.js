import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { primaryBlueColor } from '../../globalstyle/GlobalStyle';

const Logo = styled.img``;

const textDecoration = 'text-decoration: none;';

const ExternalLink = styled.a`
  ${textDecoration}
  color: ${primaryBlueColor};
`;

const Nav = styled.nav`
  max-width: 100vw;
  height: 55px;
  margin: 3rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  font-size: 1.15rem;
  padding: 0 1rem;
  @media (max-width: 800px) {
    margin: 0;
  }
  & .logoContainer {
    text-align: left;
    padding-top: 2.2rem;
  }
  .logo {
    width: 10rem;
  }
`;

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  padding: 2.2rem;
  color: #4bafff;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 800px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    padding: 2rem 0 0 0;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? 'white' : '#4BAFFF')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const NavWrapper = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    li {
    padding: 18px 10px;
    }
    @media (max-width: 800px) {
    flex-flow: column nowrap;
    background-color: #4BAFFF;
    opacity: 95%;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
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

const DonateLink = styled.a`
  ${textDecoration}
  background-color: ${primaryBlueColor};
  color: white;
  border-radius: 50px;
  padding: 0.35rem 1rem 0.45rem 1rem;
  margin-bottom: 2rem;
  max-width: 6rem;
  letter-spacing: 0.025rem;
  text-transform: uppercase;
  @media (max-width: 800px){
    background-color: white;
    color: ${primaryBlueColor};
  }
`;

const MenuLink = styled(Link)`
  ${textDecoration}
  color: black;
  @media (max-width: 800px) {
    color: white;
  }
`;

export {
  Nav,
  NavWrapper,
  StyledBurger,
  Logo,
  DonateLink,
  ExternalLink,
  MenuLink,
};
