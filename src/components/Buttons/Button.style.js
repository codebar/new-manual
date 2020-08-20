import styled from 'styled-components';
import { Link } from 'react-router-dom';


const darkGrayAlt = '#3D4A54';

const ButtonA = styled(Link)`
    background-color: ${darkGrayAlt};
    padding: 15px 1.5rem 0 1.5rem;
    width: 8.5rem;
    color: white;
    text-decoration: none; 
    grid-area: ButtonA;
    text-align: center;
`
const ButtonB = styled(Link)`
    background-color: ${darkGrayAlt};
    padding: 15px 1.5rem 0 1.5rem;
    width: 8.5rem;
    color: white;
    text-decoration: none; 
    margin-right: 40px;
    grid-area: ButtonB;
    text-align: center;
`


export { ButtonA, ButtonB}