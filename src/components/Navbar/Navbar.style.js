import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  primaryBlueColor,
  primaryPinkColor,
  primaryGreenColor,
  primaryDarkgreyColor,
} from '../../globalstyle/GlobalStyle';
import { COLORS } from '../../globalstyle/colors';

const Logo = styled.img``;

const textDecoration = 'text-decoration: none;';

const ExternalLink = styled.a`
  ${textDecoration}
  color: #4bafff;
`;

const DonateButton = styled.a`
  ${textDecoration}
  background-color: #4bafff;
  color: white;
  border-radius: 50px;
  padding: 0.75rem;
  max-width: 6rem;
  text-align: center;
`;

const MenuLink = styled(Link)`
  ${textDecoration}
  color: black;
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr 1fr;
  gap: 1px 1px;
  grid-template-areas: 'Logo Logo Logo about sponsors organisers donate codebar';
  margin: 1.5rem 1rem;
  align-items: center;
  font-size: 1.15rem;
  color: ${COLORS.green};
`;

export { Logo, Nav, MenuLink, ExternalLink, DonateButton };
