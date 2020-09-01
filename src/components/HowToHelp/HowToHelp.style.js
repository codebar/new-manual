import styled from 'styled-components';
import { Link } from 'react-router-dom';

const lightGray = '#F4F4F4';
const darkGrayAlt = '#3D4A54';
// const middleGray = "#586776";

const SponsorsBtn = styled(Link)`
  background-color: ${darkGrayAlt};
  padding: 1rem 2rem;
  color: white;
  text-decoration: none;
  margin: 3rem;
`;
const OrganisersBtn = styled(Link)`
  background-color: ${darkGrayAlt};
  padding: 1rem 2rem;
  color: white;
  text-decoration: none;
  margin: 2rem;
`;

const HowtoHelpWrapper = styled.div`
  background-color: ${lightGray};
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HowToHelpSubtitle = styled.h2`
  font-weight: lighter;
  font-size: 2.5rem;
  padding-bottom: 1rem;
`;

const HowToHelpBtnWrapper = styled.div``;

export {
  HowtoHelpWrapper,
  HowToHelpSubtitle,
  HowToHelpBtnWrapper,
  SponsorsBtn,
  OrganisersBtn,
};
