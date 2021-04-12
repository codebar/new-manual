import React from 'react';
import {
  FooterWrapper,
  FooterEmail,
  FooterSocials,
  FooterTextWrapper,
  FooterImg,
  FooterText,
  FooterLink,
} from './Footer.style';
import twitter from '../../assets/image/twitter-logo.svg';
import slack from '../../assets/image/slack-logo.svg';
import facebook from '../../assets/image/facebook-logo.svg';
import github from '../../assets/image/github-logo.svg';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTextWrapper>
        <FooterText>Send us an email at</FooterText>
        <FooterEmail className="email" href="mailto:hello@codebar.io">
          hello@codebar.io
        </FooterEmail>
        <FooterText className="charityNo">
          Registered UK and Wales charity no. 1187776
        </FooterText>
        <FooterText>© 2020 codebar</FooterText>
      </FooterTextWrapper>
      <FooterSocials>
        <FooterLink href="https://slack.codebar.io/" target="_blank">
          <FooterImg src={slack} alt="Slack logo" />
        </FooterLink>
        <FooterLink href="https://github.com/codebar" target="_blank">
          <FooterImg src={github} alt="Github logo" />
        </FooterLink>
        <FooterLink href="https://twitter.com/codebar" target="_blank">
          <FooterImg src={twitter} alt="Twitter logo" />
        </FooterLink>
        <FooterLink href="https://www.facebook.com/codebarHQ" target="_blank">
          <FooterImg src={facebook} alt="Facebook logo" />
        </FooterLink>
      </FooterSocials>
    </FooterWrapper>
  );
};

export default Footer;
