import styled from 'styled-components';
import { GlobalStyle } from '../../globalstyle/GlobalStyle';


const darkGray = '#808080';
const black = '#000000';


const Heading = styled.h1`
    font-family: ${GlobalStyle};
`

const Subheading = styled.p`
    font-family: ${GlobalStyle};
    color: ${darkGray};
    font-weight: lighter;
    font-size: 1.5rem
`

const p = styled.p`
    font-family: ${GlobalStyle};
    color: ${black};
    font-size: 1.4rem;
`



export {Heading, Subheading};