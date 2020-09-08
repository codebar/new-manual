import styled from 'styled-components';


const black = '#000000';
const blue = '4BAFFF';

const Wrapper = styled.div`
    color: ${black}
    margin: 8rem;
    width: 90%;
    @media screen and (max-width: 400px){
        width: auto;
    }
`

const IntroText = styled.div`
    color: ${black};
    margin: 5rem 5rem 1rem 12rem;
    max-width: 60%;
    text-align: justify;
        @media screen and (max-width:400px){
        font-size: 1rem;
        margin: 1rem 0.8rem 3rem 0.8em;
        max-width: 90%;
       
    }

`

const List = styled.ul`
    // margin: 6rem;
    margin: 0 6rem 6rem 12rem;
    max-width: 60%;
    justify-content: center;
`
const ListItem = styled.li`
    line-height: 1.6;
    margin-bottom: 0.25%;
    max-width: 95%;
    text-align: justify;
`
const ExtLink = styled.a`
    text-decoration: none;
    color: ${blue}
`
export {
    List,
    Wrapper,
    IntroText,
    ListItem,
    ExtLink
}