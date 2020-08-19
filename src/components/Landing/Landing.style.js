import styled from 'styled-components';

const HeaderWrapper = styled.section`
  min-height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-basis: auto;
`;

const HeaderText = styled.h1`
  max-width: 50vw;
  font-weight: lighter;
  line-height: 2.5rem;
`;

const HeaderImg = styled.div``;

const LearnMore = styled.button`
  font-size: 1.25rem;
  margin: 1.5rem 0;
  border: none;
  font-weight: lighter;
  background-color: transparent;
  padding: 0;
  display: block;
  font-weight: lighter;
`;

const ValuesWrapper = styled.section`
  min-height: 100vh;
  background-color: rgba(244, 244, 244, 1);
`;

const ValueWrapper = styled.div``;

const StatsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1px 1px;
  grid-template-areas: '. .' '. .' '. .';
  justify-items: center;
  margin: 3rem;
`;
const StatWrapper = styled.div`
  border-top: 1px solid black;
  min-width: 60%;
`;

const StatTitle = styled.h3`
  font-weight: lighter;
  font-size: 0.9rem;
  letter-spacing: 0.025rem;
`;
const Statistic = styled.p`
  font-size: 4rem;
  font-weight: bolder;
  text-align: center;
  margin: 3rem 0 4.5rem 0;
`;

export {
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
};
