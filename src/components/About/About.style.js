import styled from 'styled-components';
import { GlobalStyle } from '../../globalstyle/GlobalStyle';


const darkGray = '#808080';
const black = '#000000';


const Heading = styled.h1`
    font-family: ${GlobalStyle};
    margin-left: 4rem;
    line-height: 1.5;
`

const Subheading = styled.p`
    font-family: ${GlobalStyle};
    color: ${darkGray};
    font-weight: lighter;
    font-size: 1.5rem;
    margin-left: 4rem;
    line-height: 1.5;
`

const Introtext  = styled.div`
    max-width: 80%;
`

const VolunteerText = styled.p`
    font-family: ${GlobalStyle};
    color: ${black};
    font-size: 1.4rem;
`

const Img = styled.img`
    height: 491px;
    width: 675px;
    border-radius: 40%;
`

const Contentwrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: 
        "Img Text"
        "TextAlt TextAlt";
    margin-top: 6rem;
    margin-bottom: 4rem;
    margin-left: 2rem;
    align-items: center;
    grid-column-gap: 10px;
`

const ContentwrapperAlt = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: 
        "Img Text"
   
    margin-top: 6rem;
    margin-bottom: 4rem;
    margin-left: 2rem;
    align-items: center;
    grid-column-gap: 10px;
`


const Text = styled.p`
    font-size: 1.4rem;
    text-align: right;
    line-height: 1.7;
    width: 400px;

`
const SponsorText = styled.p`
    font-size: 1.4rem;
    text-align: left;
    line-height: 1.7;
    width: 600px;
`

const TextAlt = styled.p`
    font-size: 1.4rem;
    width: 80vw;
    font-weight: normal;
    line-height: 1.7;
    text-align: right;
    grid-area: TextAlt;
    margin-left: 10rem;
    margin-top: 2rem;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export {Heading, Subheading, Img, Introtext, VolunteerText , Contentwrapper, Text, TextAlt, ContentwrapperAlt, SponsorText, TextWrapper };