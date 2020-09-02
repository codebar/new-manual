import styled from 'styled-components';

const fontWeight = 'font-weight: lighter;';
const zeroMargin = 'margin: 0';
const lightGrey = 'rgba(244, 244, 244, 1)';

const SponsorSection = styled.section`
  margin: 4rem 9rem;
`;
const ReasonWrapper = styled.div`
  padding: 3rem 0;
`;

const ReasonsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0em 7em;
  grid-template-areas: '. .' '. .';
`;

const ReasonNumber = styled.h3`
  ${fontWeight}
  font-size: 2rem;
  ${zeroMargin}
`;

const ReasonSubtitle = styled.h4`
  ${fontWeight}
  font-weight: 400;
  font-size: 1.3rem;
  padding: 0.25rem 0 0.5rem 0;
  ${zeroMargin}
`;

const ReasonText = styled.p`
  line-height: 2rem;
  color: #5b5b5b;
  ${zeroMargin}
`;

const SponsorTitles = styled.h1`
  ${fontWeight}
  font-size: 3rem;
`;

const WhyText = styled.p`
  font-size: 1.15rem;
  ${fontWeight}
  font-weight: 400;
  line-height: 2.5rem;
`;
const WhyEmphasise = styled.span`
// ${fontWeight}
font-size: 1.5rem;
`;

const FoodOptions = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 15em;
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
`;

const OptionText = styled.p``;

const OptionSub = styled.h4`
  ${zeroMargin}
`;

const PackagesWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1em 3em;
`;

const Package = styled.div`
  background-color: ${lightGrey};
  padding: 2.5rem;
  line-height: 2rem;
`;

export {
  SponsorSection,
  ReasonWrapper,
  ReasonsWrapper,
  ReasonSubtitle,
  ReasonText,
  ReasonNumber,
  SponsorTitles,
  WhyText,
  WhyEmphasise,
  FoodOptions,
  Option,
  OptionText,
  OptionSub,
  PackagesWrapper,
  Package,
};
