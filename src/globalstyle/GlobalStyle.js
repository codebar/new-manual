import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from './mediaQueries';
require('typeface-open-sans');

const GlobalStyle = styled.div`
  font-family: open sans;
  padding: 0;
  margin: 0;
  color: #1f1f1f;
`;

// const primaryDarkgreyColor = 'rgba(67, 78, 89, 1)';
const primaryBlueColor = 'rgba(75, 175, 255, 1)';
// const primaryPinkColor = 'rgba(255, 3, 106, 1)';
// const primaryGreenColor = '#19F3BE';

const black = '#000000';
const lightGrey = '#EDEDED';
const pink = '#FF036A';

const fontWeight = 'font-weight: 380';

const textDecoration = 'text-decoration: none;';

const Wrapper = styled.div`
    color: ${black}
    width: 80%;
    @media ${device.mobileS}{
        margin: 1rem 1rem 2rem 1rem;
        
    }
    @media ${device.mobileL}{
        width: 100%;
        margin: 2rem 1.5rem 2rem 1.5rem;
    }
    @media ${device.tablet}{
        margin: 2rem 1.5rem 2rem 1.5rem;
    }
`;

const IntroText = styled.div`
  color: ${black};
  line-height: 1.8;
  text-align: justify;
  font-weight: 300;
  @media ${device.mobileS} {
    margin: 1rem 0.8rem 3rem 0.8em;
  }
  @media ${device.tablet} {
    margin: 2rem 6rem 3rem 5rem;
    width: 80%;
  }
  @media ${device.laptopL} {
    margin: 5rem 5rem 3rem 6rem;
    width: 80%;
  }
  @media ${device.desktop} {
    margin: 5rem 5rem 3rem 8rem;
  }
`;
const Title = styled.h1`
  ${fontWeight};
  text-align: center;
  margin-bottom: 4rem;
  margin-top: 4rem;
  @media screen and (max-width: 400px) {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
`;

const InternalLink = styled(Link)`
  color: ${pink};
  ${textDecoration}
  text-decoration: none;
  margin-right: 4em;
`;

const InternalLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${device.mobileS} {
    margin-left: 2rem;
    margin-right: 0;
    flex-direction: column;
    text-align: center;
    font-size: 0.8rem;
  }
  @media ${device.tablet} {
    flex-direction: row;
  }
  @media ${device.laptop} {
    margin-left: 4rem;
    margin-right: 4rem;
    font-size: 1rem;
  }
  @media ${device.laptopL} {
    margin-right: 10rem;
    margin-left: 10rem;
  }
`;


const Heading = styled.h2`
  font-weight: 350;
  color: ${black};
  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
    margin-top: 1rem;
    text-align: center;
  }

`;
const AnythingElseWrapper = styled.div`
  background-color: ${lightGrey};
  width: 100%;
  padding: 4rem 6rem 4rem 6rem;
  @media screen and (max-width: 400px) {
    font-size: 0.9rem;
    padding: 1rem 1rem 1rem 1em;
    max-width: 90%;
    text-align: justify;
  }
`;

const AnythingElseText = styled.p`
  max-width: 90%;
  @media screen and (max-width: 400px) {
    margin: 0 auto;
    padding-bottom: 1rem;
  }
`;
const ListWrapper = styled.div`
    color: ${black};
    padding: 2rem 4rem 2rem 4rem;
    margin: 2rem 3rem 4rem 3rem;
        @media screen and (max-width: 400px){
        margin: 0 0.5rem 2rem 0.5rem;
        padding: 2rem 0 2rem 1rem;
        line-height: 1.5;
`;

const List = styled.ul`
  list-style-type: circle;
  @media ${device.mobileS} {
    max-width: 65%;
  }
  @media ${device.mobileL} {
    max-width: 75%;
    margin: 2rem 3.5rem 2rem 4.5rem;
  }
  @media ${device.tablet} {
    max-width: 70%;
    margin-left: 5rem;
  }
  @media ${device.laptopL} {
    margin-left: 8rem;
  }
`;

const ListItem = styled.li`
  @media screen and (max-width: 500px) {
    margin: 0 0 1rem 0;
  }
`;

const Bold = styled.span`
  font-weight: 500;
  color: ${pink};
`;

const GreyWrapper = styled.div`
  background-color: ${lightGrey};
  text-align: justify;
  font-weight: 300;
  @media ${device.mobileS}{
      margin: 0 -1rem 0 -1rem;
      padding: 2rem;
  }
  @media ${device.tablet}{
      padding: 2rem 3rem 2rem 3rem;
      margin: 4rem -1rem 0 -1rem;
  }
  @media ${device.laptop}{
      padding: 3rem 3rem 2rem 3rem;
      margin: 2rem -1rem 0 -1rem;
  }
`;

export {
  GlobalStyle,
  Wrapper,
  IntroText,
  AnythingElseWrapper,
  AnythingElseText,
  ListWrapper,
  GreyWrapper,
  Title,
  Heading,
  List,
  ListItem,
  Bold,
  InternalLink,
  InternalLinkWrapper,
  primaryBlueColor,
  fontWeight,
};
