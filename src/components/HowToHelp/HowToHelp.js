import React from 'react';
import {
  HowtoHelpWrapper,
  HowToHelpSubtitle,
  SponsorsBtn,
  OrganisersBtn,
  HowToHelpBtnWrapper,
} from './HowToHelp.style';

const HowToHelp = () => {
  return (
    <HowtoHelpWrapper>
      <HowToHelpSubtitle>How can you help?</HowToHelpSubtitle>
      <HowToHelpBtnWrapper>
        <SponsorsBtn to="/sponsors">Sponsors </SponsorsBtn>
        <OrganisersBtn to="/organisers">Organisers</OrganisersBtn>
      </HowToHelpBtnWrapper>
    </HowtoHelpWrapper>
  );
};

export default HowToHelp;
