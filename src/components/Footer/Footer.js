import React from 'react';
import {
  FooterWrapper,
  FooterEmail,
  FooterSocials,
  FooterText,
} from './Footer.style';
import twitter from '../../assets/image/twitter-logo.svg';
import slack from '../../assets/image/slack-logo.svg';
import facebook from '../../assets/image/facebook-logo.svg';
import github from '../../assets/image/github-logo.svg';
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>
        <p>send us email at</p>
        <FooterEmail href="mailto:hello@codebar.io">
          hello@codebar.io
        </FooterEmail>
        <p>Registered UK and Wales charity no. 1187776</p>
        <p>© 2020 codebar</p>
      </FooterText>
      <FooterSocials>
        <img src={slack} />
        <img src={twitter} />
        <img src={facebook} />
        <img src={github} />
      </FooterSocials>
    </FooterWrapper>
  );
};

export default Footer;
