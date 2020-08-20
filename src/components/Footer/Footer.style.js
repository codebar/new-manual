import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #3e4954;
  min-height: 30vh;
  display: flex;
  color: white;
  bottom: 0;
`;

const FooterEmail = styled.a`
  font-size: 2rem;
  font-weight: lighter;
  text-decoration: none;
  border-bottom: 1px solid white;
  padding: 0.1rem 0;
  color: white;
`;

const FooterText = styled.div``;
const FooterSocials = styled.div``;
export { FooterWrapper, FooterEmail, FooterSocials, FooterText };
