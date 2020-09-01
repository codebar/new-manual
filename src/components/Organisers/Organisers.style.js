import styled from 'styled-components';
import { Link } from 'react-router-dom';

const black = '#000000';
const white = '#FFFFFF';
const lightGrey = '#EDEDED';
const pink = '#FF036A';

const textDecoration = 'text-decoration: none;';

const Wrapper = styled.div`
    color: ${black}
    width: 80%;
`

const IntroText = styled.div`
    color: ${black};
    margin: 5rem 5rem 4rem 5rem;
    max-width: 70%;
        @media screen and (max-width:500px){
        font-size: 1rem;
        margin: 1rem 0.8rem 3rem 0.8em;
        max-width: 90%;
        text-align: justify;
    }

`
const Heading = styled.h1`
    font-weight: 600;
    text-align: center;
    margin-bottom: 4rem;
        @media screen and (max-width:400px){
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
`

const InternalLink = styled(Link)`
        color: ${pink};
        text-decoration: none;
        margin-right: 2em;
`

const InternaLinkWrapper = styled.div`
        display: flex;
        flex-direction: row;
        margin-right: 10rem;
        margin-left: 10rem;
        justify-content: space-between;
        @media screen and (max-width:400px){
            flex-direction: column;
            text-align: center;
            margin-left: 0;
            margin-right: 0;
            max-width: 90%;
            font-size: 0.9rem;
        }
`

const Subheading = styled.h2`
    font-weight: 550;
    
    color: ${black};
        @media screen and (max-width:400px){
        font-size: 1rem;
        margin-top: 1rem;
        text-align: center;
    }
`
const SubheadingAlt = styled.h2`
    font-weight: 550;
    color: ${white};
`
const AnythingElseWrapper = styled.div`
    background-color: ${lightGrey};
    width: 100%;
    padding: 4rem 6rem 4rem 6rem;
        @media screen and (max-width:400px){
            font-size: 0.9rem;
            padding: 1rem 1rem 1rem 1em;
            max-width: 90%;
            text-align: justify;
        }
`

const AnythingElseText = styled.p`
    max-width: 90%;
    @media screen and (max-width: 400px){
        margin: 0 auto;
        padding-bottom: 1rem;
    }
`
const EventWrapper = styled.div`
    color: ${black};
    padding: 2rem 4rem 2rem 4rem;;
    margin: 2rem 3rem 4rem 3rem
        @media screen and (max-width: 400px){
        margin: 2rem 0 2rem 0;
        padding-left: 0rem;
        padding-right: 0rem;
        text-align: justify;
        line-height: 1.5;
`

const EventList = styled.ul`
    list-style-type: circle;
    @media screen and (max-width: 500px){
        padding: 0 0.5rem 0 2rem;
        text-align: justify;
        line-height: 1.5;
    }
`

const ListItem = styled.li`
    @media screen and (max-width: 500px){
        margin: 0 0 1rem 0;
    }
`


const Bold =styled.span`
    font-weight: bold;
    color: ${pink};
`

const GreyWrapper = styled.div`
    color: ${black};
    background-color: ${lightGrey};
    padding-top: 2rem;
    padding: 5rem 5rem 4rem 5rem;
    @media screen and (max-width: 500px){
        // margin: 0 auto;
        padding-right: 0.5rem;
        padding-left: 0.5rem;
        line-height: 1.5;
        text-align: justify;
        padding: 1rem;
    }
`


export {
    Wrapper,
    IntroText,
    AnythingElseWrapper,
    AnythingElseText,
    EventWrapper, 
    GreyWrapper, 
    Heading, 
    Subheading, 
    SubheadingAlt,
    EventList,
    ListItem,
    Bold, 
    InternalLink,
    InternaLinkWrapper
};