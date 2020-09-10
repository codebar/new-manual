import styled from 'styled-components';

const fontWeight = 'font-weight: lighter;';
const zeroMargin = 'margin: 0';
const lightGrey = 'rgba(244, 244, 244, 1)';
const lineHeight = 'line-height: 2rem';
const textLightGrey = '#5b5b5b';

const SponsorSection = styled.section`
  margin: 4rem 9rem;
  // min-width: 100vw;
  font-weight: lighter;
  @media screen and (max-width: 400px) {
    margin: 0 0;
  }
`;

const ReasonWrapper = styled.div`
  padding: 3rem 0;
  @media screen and (max-width: 400px) {
    padding: 0;
  }
`;

const ReasonsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0em 7em;
  grid-template-areas: '. .' '. .';

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas: '.';
  }
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
  color: #5b5b5b;
  line-height: 2rem;
  ${zeroMargin}
`;

const WhyText = styled.p`
  font-size: 1.15rem;
  ${fontWeight}
  // font-weight: 400;
  line-height: 2.5rem;
`;
const WhyEmphasise = styled.span`
// ${fontWeight}
font-size: 1.5rem;
`;

const FoodOptions = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 10em;
  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${lightGrey};
  border-radius: 1rem;
  padding: 2rem;
`;

const OptionImg = styled.img`
  max-width: 8rem;
  padding: 2rem 0;
`;

const OptionText = styled.p`
  line-height: 2rem;
`;

const OptionSub = styled.h4`
  ${zeroMargin}
`;

const PackagesWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1em 3em;

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

const Package = styled.div`
  background-color: ${lightGrey};
  padding: 2.5rem;
  border-radius: 1rem;
  ${lineHeight}
`;

const PackagePrice = styled.h3`
  font-weight: 400;
  font-size: 1.5rem;
`;

const InReturnText = styled.p`
  color: ${textLightGrey};
  line-height: 2rem;
`;

const PackageBenefit = styled.li`
  list-style-type: circle;
`;

const PackageBenefits = styled.ul`
  padding-left: 0;
`;

const SponsorsText = styled.p`
  color: ${textLightGrey};
  line-height: 2rem;
`;
const SponsorTitles = styled.h1`
  ${fontWeight}
  font-size: 3rem;
  @media screen and (max-width: 400px) {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

const GreyedBackground = styled.div`
  background-color: ${lightGrey};
`;

const SponsoredCompanies = styled.div`
  text-align: center;
  padding: 2rem 5rem;
  @media screen and (max-width: 400px) {
    padding: 0;
  }
`;

const CompaniesLogo = styled.img`
  max-width: 6rem;
  margin: auto;
  padding: 1rem 0;
  @media screen and (max-width: 400px) {
    max-width: 3rem;
  }
`;

const BronzeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 1px 1px;

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const CompaniesSubtitle = styled.h2`
  font-weight: 400;
`;

const CompaniesSection = styled.section`
  margin: 0;
`;

const CompaniesText = styled.div`
  margin: 4rem 9rem;
  @media screen and (max-width: 400px) {
    margin: 0;
  }
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
  OptionImg,
  PackagesWrapper,
  Package,
  PackagePrice,
  InReturnText,
  PackageBenefit,
  PackageBenefits,
  SponsorsText,
  GreyedBackground,
  SponsoredCompanies,
  CompaniesLogo,
  BronzeGrid,
  CompaniesSubtitle,
  CompaniesSection,
  CompaniesText,
};
