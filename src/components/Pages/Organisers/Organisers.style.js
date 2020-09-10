import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../../globalstyle/mediaQueries';
import { fontWeight } from '../../../globalstyle/GlobalStyle'

const black = '#000000';
const lightGrey = '#EDEDED';
const pink = '#FF036A';

const textDecoration = 'text-decoration: none;';

const Wrapper = styled.div`
    color: ${black}
    width: 80%;
    ${fontWeight};
`

const IntroText = styled.div`
    margin: 5rem 5rem 4rem 5rem;
    text-align: justify;
    max-width: 70%;
    font-size: 1rem;

    @media ${device.mobileS}{
        margin: 1rem 0.8rem 3rem 0.8em;
        max-width: 90%;
    }
    @media ${device.tablet}{
        margin: 1rem 2rem 3rem 2em;
    }
`
const Heading = styled.h1`
    ${fontWeight};
    text-align: center;
    margin-bottom: 4rem;
        @media ${device.mobileS}{
            font-size: 1.5rem;
            margin-bottom: 1rem;
            margin-left: 1rem;
        }
        @media ${device.tablet}{
            margin-bottom: 2rem;
        }
`
const HeadingAlt = styled.h1`
    ${fontWeight};
    text-align: left;
    @media ${device.mobileS}{
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
`
const InternalLink = styled(Link)`
        color: ${pink};
        ${textDecoration}
        text-decoration: none;
        margin-right: 2em;
        @media ${device.tablet}{
            font-size: 1rem;
        }
`

const InternaLinkWrapper = styled.div`
        display: flex;
        flex-direction: row;
        margin-right: 10rem;
        margin-left: 10rem;
        justify-content: space-between;
        @media ${device.mobileS}{
            margin-left: 2rem;
            margin-right: 0;
            flex-direction: column;
            text-align: center;
            font-size: 0.7rem;
        }
        @media ${device.tablet}{
            flex-direction: row;
        }
`

const Subheading = styled.h3`
    font-weight: 400;
    @media ${device.mobileS}{
        margin-top: 1rem;
    }
`
const SubheadingAlt = styled.h3`
    font-weight: 500;

`
const AnythingElseWrapper = styled.div`
    background-color: ${lightGrey};
    width: 100%;
    padding: 4rem 6rem 4rem 6rem;
    text-align: justify;
        @media ${device.mobileS}{
            font-size: 0.9rem;
            padding: 1rem 1rem 1rem 1em;
            max-width: 90%;
        }
        @media ${device.tablet}{
            padding: 4rem 0rem 4rem 0rem;
            width: 100%;
        }
`

const AnythingElseText = styled.p`
    @media ${device.mobileS}{
        margin: 0 auto;
        padding-bottom: 1rem;
    }
    @media ${device.mobileL}{
        max-width: 
        margin: 0 auto;
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 1rem;
    }
    @media ${device.tablet}{
        max-width: 100%;
        padding-bottom: 1rem;
    }
`
const EventWrapper = styled.div`
    color: ${black};
    padding: 2rem 4rem 2rem 4rem;
    margin: 2rem 3rem 4rem 3rem;
        @media ${device.mobileS}{
            margin: 0 0.5rem 2rem 0.5rem;
            padding: 2rem 0 2rem 1rem;
            line-height: 1.5;
        }
        @media ${device.mobileS}{
            margin: 0 1.5rem 2rem 1.5rem;
            text-align: justify;
            line-height: 1.5;
        }
    
        @media ${device.tablet}{
            padding: 2rem 1rem 2rem 2rem;
        }
`

const EventList = styled.ul`
    list-style-type: circle;
    @media ${device.mobileS}{
        padding: 0 0.5rem 0 0.5rem;
        text-align: justify;
        line-height: 1.5;
    }
`

const ListItem = styled.li`
    @media ${device.mobileS}{
        margin: 0 0 1rem 0;
    }
`


const Bold =styled.span`
    font-weight: bold;
    color: ${pink};
`

const GreyWrapper = styled.div`
    background-color: ${lightGrey};
    text-align: justify;
    @media ${device.mobileL}{
        padding: 2rem;
    }
    @media ${device.tablet}{
        padding: 2rem 4rem 2rem 4rem;
        margin: 4rem 4rem 0 4rem;
    }
    @media ${device.laptop}{
        padding: 3rem 2rem 2rem 2rem;
        margin: 4rem 0 0 0;
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
    HeadingAlt,
    Subheading, 
    SubheadingAlt,
    EventList,
    ListItem,
    Bold, 
    InternalLink,
    InternaLinkWrapper
};