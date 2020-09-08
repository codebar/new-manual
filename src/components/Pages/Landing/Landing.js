import React, { useRef } from 'react';
import {
  LandingWrapper,
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
  LandingSubtitles,
  ValueContainer,
  ValueNumber,
  ValueSubtitle,
  ValueText,
  ImageWrapper,
  ValuesBold,
} from './Landing.style';
import HowToHelp from '../../HowToHelp/HowToHelp';

const Landing = () => {
  const ref = useRef();

  const executeScroll = () =>
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

  return (
    <LandingWrapper>
      <HeaderWrapper>
        <HeaderText>
          codebar is a registered charity that facilitates the growth of a
          diverse tech community by running regular programming workshops.
        </HeaderText>
        <LearnMore onClick={executeScroll}>Learn more</LearnMore>
        <HeaderImg />
      </HeaderWrapper>

      <ValueContainer className="valueSection" ref={ref}>
        <LandingSubtitles>
          We’re a community built on the following values
        </LandingSubtitles>

        <ValuesWrapper>
          <ImageWrapper>hey</ImageWrapper>
          <ValueWrapper>
            <ValueNumber>01</ValueNumber>
            <ValueSubtitle>
              codebar is <ValuesBold>friendly and encouraging.</ValuesBold>
            </ValueSubtitle>
            <ValueText>
              The atmosphere should be one of co-operation and non-judgement.
              People should help each other out, peer-to-peer.
            </ValueText>
          </ValueWrapper>

          <ValueWrapper>
            <ValueNumber>02</ValueNumber>
            <ValueSubtitle>
              codebar is <ValuesBold>accessible.</ValuesBold>
            </ValueSubtitle>
            <ValueText>All codebar workshops are free.</ValueText>
          </ValueWrapper>
          <ImageWrapper>hey</ImageWrapper>

          <ImageWrapper>hey</ImageWrapper>
          <ValueWrapper>
            <ValueNumber>03</ValueNumber>
            <ValueSubtitle>
              codebar aims to{' '}
              <ValuesBold>help people learn from scratch.</ValuesBold>
            </ValueSubtitle>
            <ValueText>
              We want our students to understand why and how things work. We
              want to teach them the basics and encourage them to practise a
              language before jumping into frameworks. We are not here to
              configure a blog or a server, nor to support a project. We want to
              help students learn how to do this on their own.
            </ValueText>
          </ValueWrapper>

          <ValueWrapper>
            <ValueNumber>04</ValueNumber>
            <ValueSubtitle>
              codebar <ValuesBold>exists to help the students.</ValuesBold>
            </ValueSubtitle>
            <ValueText>
              Any giveaways or special offers are only made available to our
              students. We don’t act as a mailing list for our coaches to
              promote their services unless there is a direct impact in helping
              promote diversity in the tech industry or teach people programming
              for free.
            </ValueText>
          </ValueWrapper>
          <ImageWrapper>hey</ImageWrapper>

          <ImageWrapper>hey</ImageWrapper>
          <ValueWrapper>
            <ValueNumber>05</ValueNumber>
            <ValueSubtitle>
              codebar is <ValuesBold>open source.</ValuesBold>
            </ValueSubtitle>
            <ValueText>
              Everyone is welcome to help. All of our workshops are organised
              and run by volunteers. Our website and tutorials are open source.
              If you have some time we would really appreciate your help! If you
              can’t find any open issues that you can work on, send us an email
              to hello@codebar.io we’ll be able to find something :)
            </ValueText>
          </ValueWrapper>
        </ValuesWrapper>
      </ValueContainer>

      <LandingSubtitles>Our impact so far..</LandingSubtitles>
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

      <HowToHelp />
    </LandingWrapper>
  );
};

export default Landing;
