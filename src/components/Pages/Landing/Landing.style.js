import styled from 'styled-components';

const fontWeight = 'font-weight: lighter;';
const zeroMargin = 'margin: 0';
const darkGrayAlt = '#3D4A54';

const LandingWrapper = styled.section`
  // padding: 0 2rem;
`;
const HeaderWrapper = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: auto;
`;

const HeaderText = styled.h1`
  ${fontWeight}
  font-size: 1.5rem;
  max-width: 50vw;
  line-height: 2.5rem;
`;

const HeaderImg = styled.img`
  display: inline;
  width: 1rem;
`;
const LandingSubtitles = styled.h2`
  ${fontWeight}
  font-size: 2.5rem;
`;

const LearnMore = styled.a`
  font-size: 1.25rem;
  margin: 3rem 0;
  display: inline-block;
  cursor: pointer;
  background-color: ${darkGrayAlt};
  padding: 1rem 2rem;
  color: white;
`;

const StatsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0.5em 0.5em;
  grid-template-areas: '. .' '. .' '. .';
  justify-items: center;
  margin: 3rem;
`;
const StatWrapper = styled.div`
  border-top: 1px solid black;
  min-width: 60%;
`;

const StatTitle = styled.h3`
  ${fontWeight}
  font-size: 0.9rem;
  letter-spacing: 0.025rem;
`;
const Statistic = styled.p`
  font-size: 4rem;
  font-weight: bolder;
  text-align: center;
  margin: 3rem 0 4.5rem 0;
`;

const ValuesWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 2em 2em;
  grid-template-areas: '. .' '. .' '. .' '. .' '. .';
`;

const ValueWrapper = styled.div`
padding: 10rem 0;
`;

const ValueContainer = styled.section`
  background-color: rgba(244, 244, 244, 1);
  padding: 6rem 10rem;
`;

const ValueNumber = styled.h3`
  ${fontWeight}
  font-size: 2rem;
  ${zeroMargin}
`;

const ValueSubtitle = styled.h4`
  ${fontWeight}
  font-size: 1.3rem;
  padding: 0.25rem 0 0.5rem 0;
  ${zeroMargin}
`;

const ValueText = styled.p`
  ${zeroMargin}
`;
const ImageWrapper = styled.div``;

const ValuesBold = styled.span`
  font-weight: normal;
`;
export {
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
};
