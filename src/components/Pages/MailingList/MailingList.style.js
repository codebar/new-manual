import styled from 'styled-components';
import { device } from '../../../globalstyle/mediaQueries';

const black = '#000000';
const blue = '4BAFFF';

const Wrapper = styled.div`
  color: ${black};
  font-weight: lighter;
  justify-content: center;
  text-align: center;
  @media ${device.mobileS} {
    margin: 1rem 1rem 2rem 1rem;
  }
  @media ${device.mobileL} {
    width: 100%;
    margin: 2rem 1.5rem 2rem 1.5rem;
  }
  @media ${device.tablet} {
    margin: 2rem 1.5rem 2rem 1.5rem;
  }
`;

const IntroText = styled.div`
  line-height: 1.8;
  text-align: justify;
  @media ${device.laptopL} {
    margin: 5rem 5rem 1rem 6rem;
    width: 80%;
  }
  @media ${device.desktop} {
    margin: 5rem 5rem 1rem 8rem;
  }
`;

const List = styled.ul`
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
  line-height: 1.8;
  text-align: justify;
`;
const ExtLink = styled.a`
  text-decoration: none;
  color: ${blue};
`;
export { List, Wrapper, IntroText, ListItem, ExtLink };
