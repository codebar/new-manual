import styled from 'styled-components';

const black = '#000000';
const white = '#FFFFFF';
const lightGrey = '#EDEDED';
const pink = '#FF036A';


const Pink = styled.span`
    color: ${pink};
    font-weight: bold;
    font-size: 4rem;
    margin-right: 5%;
`
const NumberedList = styled.ol`
    color: ${black}; //remove this line

`
const NumberedListItem = styled.li`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    margin-bottom: 5%;
`
// wrap the numbers in a span, then apply styling//

export {
    Pink,
    NumberedList,
    NumberedListItem
};