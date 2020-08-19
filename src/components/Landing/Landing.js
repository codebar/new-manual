import React, { useRef } from 'react';
import {
  HeaderWrapper,
  HeaderText,
  HeaderImg,
  LearnMore,
  ValuesWrapper,
} from './Landing.style';

const Landing = () => {
  const ref = useRef();

  const executeScroll = () =>
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

  return (
    <>
      <HeaderWrapper>
        <HeaderText>
          codebar is a registered charity that facilitates the growth of a
          diverse tech community by running regular programming workshops.
          <LearnMore onClick={executeScroll}>Learn more</LearnMore>
        </HeaderText>
        <HeaderImg>placeholder image</HeaderImg>
      </HeaderWrapper>
      <ValuesWrapper ref={ref}></ValuesWrapper>
    </>
  );
};

export default Landing;
