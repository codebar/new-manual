import React from 'react';
import {
  FooterWrapper,
  FooterEmail,
  FooterSocials,
  FooterTextWrapper,
  FooterImg,
  FooterText,
  FooterLink,
  FooterTextLink
} from './Footer.style';
import twitter from '../../assets/image/twitter-logo.svg';
import slack from '../../assets/image/slack-logo.svg';
import facebook from '../../assets/image/facebook-logo.svg';
import github from '../../assets/image/github-logo.svg';
// import Mailing from '../../components/Pages/MailingList';
// import { link } from 'react-router-dom';
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTextWrapper>
        <FooterText>send us email at</FooterText>
        <FooterEmail className="email" href="mailto:hello@codebar.io">
          hello@codebar.io
        </FooterEmail>
        <FooterText className="charityNo">
          Registered UK and Wales charity no. 1187776
        </FooterText>
        {/* <FooterTextLink to="/mailing-list">Mailing List Policy </FooterTextLink> */}
        <FooterText>© 2020 codebar</FooterText>
      </FooterTextWrapper>
      <FooterSocials>
        <FooterLink href="https://slack.codebar.io/" target="_blank">
          <FooterImg src={slack} art="slack-logo" />
        </FooterLink>
        <FooterLink href="https://github.com/codebar" target="_blank">
          <FooterImg src={github} alt="github-logo" />
        </FooterLink>
        <FooterLink href="https://twitter.com/codebar" target="_blank">
          <FooterImg src={twitter} alt="twitter-logo" />
        </FooterLink>
        <FooterLink href="https://www.facebook.com/codebarHQ" target="_blank">
          <FooterImg src={facebook} alt="facebook-logo" />
        </FooterLink>
      </FooterSocials>
    </FooterWrapper>
  );
};

export default Footer;
