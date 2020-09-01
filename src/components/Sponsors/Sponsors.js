import React from "react";
import {
    WhyWrapper,
    ReasonWrapper,
    ReasonsWrapper,
    ReasonNumber,
    ReasonSubtitle,
    ReasonText
  } from './Sponsors.style';

const Sponsors = () => {
    return (
        <>
        <WhyWrapper>
            <h1>Why should you sponsor a workshop?</h1>
            <ReasonsWrapper>
          <ReasonWrapper>
            <ReasonNumber>01</ReasonNumber>
            <ReasonSubtitle>
            Be part of a diverse community.
            </ReasonSubtitle>
            <ReasonText>
            As a codebar sponsor, you will be part of the vibrant community facilitating the growth of a diverse community. We have a strict yet simple code of conduct that includes more detailed information.
            </ReasonText>
          </ReasonWrapper>

          <ReasonWrapper>
            <ReasonNumber>02</ReasonNumber>
            <ReasonSubtitle>
            Be part of a diverse community.
            </ReasonSubtitle>
            <ReasonText>
            You will be helping to promote diversity within the tech sector and be part of an exciting community committed to narrowing the skills gap. Not only that, but you will also be contributing to the growth of much-needed technical skills and giving a further boost to the post-recession economy.
            </ReasonText>
          </ReasonWrapper>

          <ReasonWrapper>
            <ReasonNumber>03</ReasonNumber>
            <ReasonSubtitle>
            Be part of a diverse community.
            </ReasonSubtitle>
            <ReasonText>
            Your sponsorship will enable more women, LGBTQ and people from under-represented minority groups to get started in development, or raise their skills to the next level. You will also have contact with developers of all levels at our workshops. Many of codebar’s students have found jobs as a direct result of the time they have invested to learn and develop their coding skills with us.
            </ReasonText>
          </ReasonWrapper>

          <ReasonWrapper>
            <ReasonNumber>04</ReasonNumber>
            <ReasonSubtitle>
            Be part of a diverse community.
            </ReasonSubtitle>
            <ReasonText>
            Whatever investment you choose, your logo will appear on the codebar website along with a link to your site. You are also welcome to give a 5 minute talk at the beginning of an evening workshop you host on a topic you think our students will find interesting and informative.
            </ReasonText>
          </ReasonWrapper>
          </ReasonsWrapper>
    
        </WhyWrapper>
        </>
    )
}

export default Sponsors;
