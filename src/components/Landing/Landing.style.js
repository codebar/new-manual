import styled from 'styled-components';

const HeaderWrapper = styled.section`
  min-height: 80vh;
  //   background-color: yellow;
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
  background-color: trasparent;
  display: block;
`;

const ValuesWrapper = styled.div`
  min-height: 100vh;
  background-color: rgba(244, 244, 244, 1);
`;

export { HeaderWrapper, HeaderText, HeaderImg, LearnMore, ValuesWrapper };
