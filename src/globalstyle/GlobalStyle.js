import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { device } from './mediaQueries';
require('typeface-open-sans');

const GlobalStyle = styled.body`
  font-family: open sans;
  padding: 0;
  margin: 0;
  color: #1f1f1f;
`;


// const primaryDarkgreyColor = 'rgba(67, 78, 89, 1)';
// const primaryBlueColor = 'rgba(75, 175, 255, 1)';
// const primaryPinkColor = 'rgba(255, 3, 106, 1)';
// const primaryGreenColor = '#19F3BE';


const black = '#000000';
const white = '#FFFFFF';
const lightGrey = '#EDEDED';
const pink = '#FF036A';

const fontWeight = 'font-weight: lighter;';

const textDecoration = 'text-decoration: none;';

const Wrapper = styled.div`
    color: ${black}
    width: 80%;
    // @media screen and (max-width: 400px){
    //     width: auto;
    // }
    @media ${device.mobileS}{
        margin: 1rem 1rem 2rem 1rem;
        
    }
    @media ${device.mobileL}{
        width: 100%;
        margin: 2rem 1.5rem 2rem 1.5rem;
    }
    @media ${device.tablet}{
        margin: 2rem 1.5rem 2rem 1.5rem;
    }
`

const IntroText = styled.div`
    color: ${black};
    // margin: 5rem 5rem 4rem 5rem;
    // max-width: 70%;
    //     @media screen and (max-width:400px){
    //     font-size: 1rem;
    //     margin: 1rem 0.8rem 3rem 0.8em;
    //     max-width: 90%;
    //     text-align: justify;
    // }
    line-height: 1.8;
    text-align: justify;
    @media ${device.mobileS}{
        margin: 1rem 0.8rem 3rem 0.8em;
    }
    @media ${device.tablet}{
        margin: 2rem 6rem 3rem 5rem;
        width: 80%;
    }
    @media ${device.laptopL}{
        margin: 5rem 5rem 3rem 6rem;
        width: 80%;
    }
    @media ${device.desktop}{
        margin: 5rem 5rem 3rem 8rem;
    }

`
const Title = styled.h1`
    ${fontWeight};
    text-align: center;
    margin-bottom: 4rem;
        @media screen and (max-width:400px){
            font-size: 1.6rem;
            margin-bottom: 1rem;
        }
`

const InternalLink = styled(Link)`
        color: ${pink};
        ${textDecoration}
        text-decoration: none;
        margin-right: 4em;
`

const InternaLinkWrapper = styled.div`
        // display: flex;
        // flex-direction: row;
        // justify-content: space-between;
        // @media screen and (max-width:400px){
        //     flex-direction: column;
        //     text-align: center;
        //     margin-left: 0;
        //     margin-right: 0;
        //     max-width: 90%;
        //     font-size: 0.7rem;
        // }
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        @media ${device.mobileS}{
            margin-left: 2rem;
            margin-right: 0;
            flex-direction: column;
            text-align: center;
            font-size: 0.8rem;
        }
        @media ${device.tablet}{
            flex-direction: row;
        }
        @media ${device.laptop}{
            margin-left: 4rem;
            margin-right: 4rem;
        }
        @media ${device.laptopL}{
            margin-right: 10rem;
            margin-left: 10rem;
        }
`

const Heading = styled.h2`
    font-weight: 550;
    color: ${black};
        @media screen and (max-width:400px){
        font-size: 1.4rem;
        margin-top: 1rem;
        text-align: center;
    }
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
const ListWrapper = styled.div`
    color: ${black};
    padding: 2rem 4rem 2rem 4rem;
    margin: 2rem 3rem 4rem 3rem;
        @media screen and (max-width: 400px){
        margin: 0 0.5rem 2rem 0.5rem;
        padding: 2rem 0 2rem 1rem;
        line-height: 1.5;
`

const List = styled.ul`
    list-style-type: circle;
    // @media screen and (max-width: 500px){
    //     padding: 0 0.5rem 0 0.5rem;
    //     text-align: justify;
    //     line-height: 1.5;
    // }
    @media ${device.mobileS}{
        max-width: 65%;
    }
    @media ${device.mobileL}{
        max-width: 75%;
        margin: 2rem 3.5rem 2rem 4.5rem;
    }
    @media ${device.tablet}{
        max-width: 70%;
        margin-left: 5rem;
    }
    @media ${device.laptopL}{
        margin-left: 8rem;
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
    padding: 4rem 5rem 1rem 5rem;
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
    GlobalStyle,
    Wrapper,
    IntroText,
    AnythingElseWrapper,
    AnythingElseText,
    ListWrapper, 
    GreyWrapper, 
    Title, 
    Heading, 
    List,
    ListItem,
    Bold, 
    InternalLink,
    InternaLinkWrapper, 
    fontWeight
};

