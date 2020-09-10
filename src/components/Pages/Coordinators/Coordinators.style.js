import styled from 'styled-components';
import { device } from '../../../globalstyle/mediaQueries';

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
    @media ${device.mobileS}{
        margin-left: 0rem;
    }
    @media ${device.tablet}{
        margin-bottom: 3rem;
    }
    @media ${device.laptop}{
        padding-left: 40px;
        margin-bottom: 5rem;
    }
`
const NumberedListItem = styled.li`
    list-style-type: none;
    display: inline-block;
    vertical-align: middle;
    // padding: 2.5% 0;
    
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