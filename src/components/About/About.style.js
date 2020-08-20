import styled from 'styled-components';
import { GlobalStyle } from '../../globalstyle/GlobalStyle';


const Wrapper = styled.body`
    margin: 0;
    padding:0;
`

const darkGray = '#808080';
const darkGrayAlt = '#3D4A54';
const lightGray = '#F7F7F7';
const black = '#000000';


const Heading = styled.h1`
    font-family: ${GlobalStyle};
    margin-left: 4rem;
    line-height: 1.5;
    font-size: 4rem;
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
    @media (max-width: 400px) {
        max-width: 900px;
        }
`

const VolunteerText = styled.p`
    font-family: ${GlobalStyle};
    color: ${black};
    font-size: 1.4rem;
`

const Img = styled.img`
    height: 50%;
    width: 75%;
    border-radius: 40%;
    @media screen (max-width: 400px) {
        width: 30%;
        height: 30%;
        }
`

const Contentwrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: 
        "Img Text"
        "TextAlt TextAlt";
    align-items: center;
    grid-column-gap: 10px;
`

const ContentwrapperAlt = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: 
        "Img Text";
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

const SubheadingAlt = styled.h2`
    color: ${black};
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    padding-top: 4rem;
    margin: 0 auto;
    grid-area: SubheadingAlt;
`

const HowtoHelpWrapper = styled.div`
    background-color: ${lightGray};
    height: 40vh;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 38px 20px;
    grid-template-areas: 
        'SubheadingAlt SubheadingAlt SubheadingAlt SubheadingAlt'
        '. ButtonA ButtonB .'
        '. . . .';
`



export { Heading, Subheading, Img, Introtext, VolunteerText , Contentwrapper, Text, TextAlt, ContentwrapperAlt, SponsorText, TextWrapper, SubheadingAlt, HowtoHelpWrapper, Wrapper, darkGrayAlt };