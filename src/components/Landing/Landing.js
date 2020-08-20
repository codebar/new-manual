import React, { useRef } from 'react';
import {
  HeaderWrapper,
  HeaderText,
  HeaderImg,
  LearnMore,
  ValuesWrapper,
  ValueWrapper,
  StatsWrapper,
  StatWrapper,
  StatTitle,
  Statistic,
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
      <ValuesWrapper ref={ref}>
        <ValueWrapper></ValueWrapper>
        <ValueWrapper></ValueWrapper>
        <ValueWrapper></ValueWrapper>
        <ValueWrapper></ValueWrapper>
        <ValueWrapper></ValueWrapper>
      </ValuesWrapper>
      <StatsWrapper>
        <StatWrapper>
          <StatTitle>Founded</StatTitle>
          <Statistic>2013</Statistic>
        </StatWrapper>
        <StatWrapper>
          <StatTitle>Chapters</StatTitle>
          <Statistic>19</Statistic>
        </StatWrapper>
        <StatWrapper>
          <StatTitle>Students</StatTitle>
          <Statistic>7075</Statistic>
        </StatWrapper>
        <StatWrapper>
          <StatTitle>Coaches</StatTitle>
          <Statistic>2831</Statistic>
        </StatWrapper>
        <StatWrapper>
          <StatTitle>Workshops</StatTitle>
          <Statistic>807</Statistic>
        </StatWrapper>
        <StatWrapper>
          <StatTitle>Returning members</StatTitle>
          <Statistic>42.98%</Statistic>
        </StatWrapper>
      </StatsWrapper>
    </>
  );
};

export default Landing;
