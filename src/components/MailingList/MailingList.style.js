import styled from 'styled-components';


const black = '#000000';
const blue = '4BAFFF';

const Wrapper = styled.div`
    color: ${black};
    font-weight: lighter;
    // margin: 8rem;
    margin-left: 8rem;
    margin-right: 8rem;
    padding-left: 8rem;
    padding-right: 6rem;
    text-align: center;
    // width: 90%;
    @media screen and (max-width: 400px){
        width: auto;
    }
`

const IntroText = styled.div`
    color: ${black};
    // margin: 5rem 5rem 1rem 4rem;
    // max-width: 70%;
    
    text-align: justify;
        @media screen and (max-width:400px){
        font-size: 1rem;
        margin: 1rem 0.8rem 3rem 0.8em;
        max-width: 90%;
       
    }

`

const List = styled.ul`
    // margin: 6rem;
    margin: 0 6rem 6rem 3rem;
    justify-content: center;
    max-width: 75%;
`

const ListItem = styled.li`
    line-height: 1.8;
    margin-bottom: 0.25%;
    // max-width: 70%;
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