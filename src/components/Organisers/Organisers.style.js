import styled from 'styled-components';

const black = '#000000';
const white = '#FFFFFF';
const lightGrey = '#EDEDED'


const Wrapper = styled.div`
    color: ${black}
`

const IntroText = styled.div`
    color: ${black};
    margin: 5rem 5rem 4rem 5rem;
    max-width: 70%;
`
const Heading = styled.h1`
    font-weight: 600;
    text-align: center;
    margin-bottom: 4rem;
        @media screen and (max-width:400px){
            font-size: 2rem;
        }
`

const Subheading = styled.h2`
    font-weight: 550;
    color: ${black};
`
const SubheadingAlt = styled.h2`
    font-weight: 550;
    color: ${white};
`
const AnythingElseWrapper = styled.div`
    background-color: ${lightGrey};
    width: 100%;
    padding: 4rem 6rem 4rem 6rem;
`

const AnythingElseText = styled.p`
    max-width: 80%;
`
const EventWrapper = styled.div`
    color: ${black};
    padding-top: 2rem;
    padding-right: 4rem;
    margin-bottom: 4rem;
    margin-right: 3rem;
    margin-left: 3rem;
    margin-top: 2rem;
`

const EventList = styled.ul`
    list-style-type: circle;
`



const OtherInfoWrapper = styled.div`
    color: ${black};
    background-color: ${lightGrey};
    padding-top: 2rem;
    padding: 5rem 5rem 4rem 5rem;
`


export {
    Wrapper,
    IntroText,
    AnythingElseWrapper,
    AnythingElseText,
    EventWrapper, 
    OtherInfoWrapper, 
    Heading, 
    Subheading, 
    SubheadingAlt,
    EventList
};