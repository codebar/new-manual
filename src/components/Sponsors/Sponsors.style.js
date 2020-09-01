import styled from 'styled-components';

const fontWeight = 'font-weight: lighter;';
const zeroMargin = 'margin: 0';

const WhyWrapper = styled.section`

`
const ReasonWrapper = styled.div``

const ReasonsWrapper = styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr;
gap: 2em 2em;
grid-template-areas: '. .' '. .';
`;

const ReasonNumber = styled.h3`
  ${fontWeight}
  font-size: 2rem;
  ${zeroMargin}
`;

const ReasonSubtitle = styled.h4`
  ${fontWeight}
  font-size: 1.3rem;
  padding: 0.25rem 0 0.5rem 0;
  ${zeroMargin}
`;

const ReasonText = styled.p`
  ${zeroMargin}
`;

export {
    WhyWrapper,
    ReasonWrapper,
    ReasonsWrapper,
    ReasonSubtitle,
    ReasonText,
    ReasonNumber,
}