import styled from 'styled-components';
// import { GlobalStyle } from '../../globalstyle/GlobalStyle';

const fontWeight = 'font-weight: lighter;';
const zeroMargin = 'margin: 0';

const darkGray = '#808080';
const darkGrayAlt = '#3D4A54';
const lightGray = '#F7F7F7';
const black = '#000000';

const AboutWrapper = styled.body`
  margin: 0;
  padding: 0;
`;

const Heading = styled.h1`
  font-weight: lighter;
  line-height: 1.5;
  font-size: 4rem;

  @media (max-width: 400px) {
    font-size: 2rem;
  }
`;
const Introtext = styled.div`
  // max-width: 80%;
  // @media (max-width: 400px) {
  //     max-width: 900px;
  //     }
`;

const Contentwrapper = styled.div`
  margin: 5rem;

  @media (max-width: 400px) {
    margin: 2rem;
  }
`;

const ContentwrapperAlt = styled.div`
  // display: grid;
  // grid-template-columns: 2fr 1fr;
  // grid-template-areas:
  //     "Img Text";
  // margin-top: 6rem;
  // margin-bottom: 4rem;
  // margin-left: 2rem;
  // align-items: center;
  // grid-column-gap: 10px;
`;

const Text = styled.p`
  // font-size: 1.4rem;
  // text-align: right;
  line-height: 2rem;
  font-weight: lighter;
`;

const TextWrapper = styled.div`
  // display: flex;
  // flex-direction: column;
`;

const SubheadingAlt = styled.h2`
  color: ${black};
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  padding-top: 4rem;
  margin: 0 auto;
  grid-area: SubheadingAlt;
`;

const HowtoHelpWrapper = styled.div`
  background-color: ${lightGray};
  height: 40vh;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 38px 20px;
  grid-template-areas:
    'SubheadingAlt SubheadingAlt SubheadingAlt SubheadingAlt'
    '. ButtonA ButtonB .'
    '. . . .';
`;

export {
  Heading,
  Introtext,
  Contentwrapper,
  Text,
  ContentwrapperAlt,
  TextWrapper,
  SubheadingAlt,
  HowtoHelpWrapper,
  AboutWrapper,
  darkGrayAlt,
};
