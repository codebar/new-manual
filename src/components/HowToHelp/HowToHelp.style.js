import styled from 'styled-components';
import { Link } from 'react-router-dom';

const lightGray = '#F4F4F4';
const darkGrayAlt = '#3D4A54';
// const middleGray = "#586776";

const HowToHelpBtn = styled(Link)`
  background-color: ${darkGrayAlt};
  padding: 1rem 2rem;
  color: white;
  text-decoration: none;
  margin: 3rem;
  @media (max-width: 400px) {
    margin: 1rem;
  }
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
  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

const HowToHelpBtnWrapper = styled.div`
  @media (max-width: 400px) {
    display: flex;
  }
`;

export {
  HowtoHelpWrapper,
  HowToHelpSubtitle,
  HowToHelpBtnWrapper,
  HowToHelpBtn,
};
