import React from 'react';
import {
  HowtoHelpWrapper,
  HowToHelpSubtitle,
  HowToHelpBtn,
  HowToHelpBtnWrapper,
} from './HowToHelp.style';

const HowToHelp = () => {
  return (
    <HowtoHelpWrapper>
      <HowToHelpSubtitle>How can you help?</HowToHelpSubtitle>
      <HowToHelpBtnWrapper>
        <HowToHelpBtn to="/sponsors">Sponsors</HowToHelpBtn>
        <HowToHelpBtn to="/organisers">Organisers</HowToHelpBtn>
      </HowToHelpBtnWrapper>
    </HowtoHelpWrapper>
  );
};

export default HowToHelp;
