import styled from 'styled-components';

const black = '#000000';
const white = '#FFFFFF';
const lightGrey = '#EDEDED';
const pink = '#FF036A';


const Pink = styled.span`
    color: ${pink};
`
const NumberedList = styled.ol`
    color: ${black}; //remove this line

`
const NumberedListItem = styled.li`
    list-style-type: none;
`
// wrap the numbers in a span, then apply styling//

export {
    Pink,
    NumberedList,
    NumberedListItem
};