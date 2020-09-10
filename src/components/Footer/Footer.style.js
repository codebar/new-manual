import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.footer`
  background-color: #3e4954;
  min-height: 35vh;
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem 0 4rem;
  margin: 0 -1rem 0 -1rem;
  color: white;
  bottom: 0;
  @media (max-width: 400px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const FooterEmail = styled.a`
  font-size: 2.15rem;
  font-weight: lighter;
  text-decoration: none;
  border-bottom: 1px solid white;
  padding: 0.1rem 0;
  color: white;
  width: 80%;
  padding-top: 0.75rem;
  @media (max-width: 400px) {
    width: 63%;
    font-size: 1.5rem;
  }
`;

const FooterTextWrapper = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.1fr 0.5fr 2.5fr 0.5fr;
  grid-template-areas: '.' '.' '.' '.';

  & .charityNo {
    padding-top: 2rem;
  }
  @media (max-width: 400px) {
    padding: 1rem;
  }
`;

const FooterText = styled.p`
  margin: 0;
`;

const FooterSocials = styled.div`
  @media (max-width: 400px) {
    padding: 1rem 0;
  }
`;
const FooterTextLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const FooterImg = styled.img`
  width: 2.5rem;
  padding: 0 1rem;
  @media (max-width: 400px) {
    width: 2rem;
  }
`;

const FooterLink = styled.a``;

export {
  FooterWrapper,
  FooterEmail,
  FooterSocials,
  FooterText,
  FooterTextWrapper,
  FooterImg,
  FooterLink,
  FooterTextLink
};
