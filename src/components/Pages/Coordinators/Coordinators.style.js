import styled from 'styled-components';

const black = '#000000';
const white = '#FFFFFF';
const lightGrey = '#EDEDED';
const pink = '#FF036A';


const Pink = styled.span`
    color: ${pink};
    font-weight: bold;
    font-size: 2.5rem;
    padding-right: 2rem;
    display: block;


`
const NumberedList = styled.ol`
    // margin: 4rem;
    

`
const NumberedListItem = styled.li`
    list-style-type: none;
    display: inline-block;
    vertical-align: middle;
    padding: 2.5% 0;
    
`
const NumberedListItemAlt = styled.li`
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    margin-bottom: 5%;
`
const Div = styled.div`
    display: flex;
    flex-direction: row;
`

export {
    Pink,
    NumberedList,
    NumberedListItem,
    NumberedListItemAlt,
    Div
};