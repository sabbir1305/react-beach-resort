import styled from 'styled-components';
import defaultImg from '../images/room-10.jpeg';

const StyledHero = styled.header`
        min-height: calc(100vh - 66px);
        background: url(${props=>props.image ? props.image : defaultImg }) center/cover no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;

`;

export default StyledHero;