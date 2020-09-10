import styled from 'styled-components';
import { device } from '../../../globalstyle/mediaQueries';

const black = '#000000';
const lightGrey = '#EDEDED';
const pink = '#FF036A';


const Wrapper = styled.div`
    color: ${black}
    width: 80%;
    @media screen and (max-width: 400px){
        width: auto;
    }

`

const IntroText = styled.div`
    color: ${black};
    font-weight: 300;
    @media ${device.mobileS}{
        margin: 1rem 0.8rem 1rem 0.8em;
        max-width: 90%;
        text-align: justify;
    }
    @media ${device.tablet}{
        margin: 5rem 5rem 0rem 1rem;
        max-width: 100%;
    }
`
const Heading = styled.h1`
    font-weight: 350; 
    color: ${black};
        @media screen and (max-width:400px){
        font-size: 1.4rem;
        margin-top: 1rem;
        text-align: center;
    }
`

const Subheading = styled.h2`
    font-weight: 350;
    @media ${device.mobileS}{
        text-align: left; 
    }
`


const AnythingElseText = styled.p`
    font-weight: 300;
`
const ListWrapper = styled.div`
    font-weight: 300;
    color: ${black};
    padding: 2rem 2rem 2rem 2rem;
    margin: 2rem 3rem 4rem 3rem;
     @media ${device.mobileS}{
            margin: 0 0.5rem 2rem 0.5rem;
            padding: 2rem 0 2rem 1rem;
            line-height: 1.5;
    }
    @media ${device.tablet}{
        max-width: 90%;
    }
`

const List = styled.ul`
    list-style-type: circle;
    text-align: justify;
    font-weight: 300;
    @media ${device.mobileS}{
        padding: 0 0 0 3rem;
        margin: 0 2rem 0 0
    }
`

const ListItem = styled.li`
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
    AnythingElseText,
    ListWrapper, 
    GreyWrapper, 
    Heading, 
    Subheading, 
    List,
    ListItem,
    Bold, 
};
