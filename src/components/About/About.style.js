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

const p = styled.p`
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
    grid-auto-flow: column;
    margin: 6rem 2rem 3rem 4rem;
    grid-template-columns: 800px 1000px;
    grid-column-gap: 10px;
    align-items: center;
`

const Contenttext = styled.p`
    font-size: 1.4rem;
    text-align: right;
    max-width: 400px;
    font-weight: lighter;
    line-height: 1.7;
`


const ContenttextAlt = styled.p`
    font-size: 1.4rem;
    max-width: 600px;
    font-weight: lighter;
    line-height: 1.7;
    text-align: right;
`

export {Heading, Subheading, Img, Introtext, p, Contentwrapper, Contenttext, ContenttextAlt };