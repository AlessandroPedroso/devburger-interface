import styled from 'styled-components';
import background from '../../assets/background.svg';
import BannerHome from '../../assets/banner-home.svg';

export const Banner = styled.div`
    background: url('${BannerHome}');
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
    height:460px;

    h1{
        font-family: "Road Rage", sans-serif;
        font-size: 80px;
        color: #f4f4f4;
        position: absolute;
        right: 20%;
        top:10%;
    }
`;

export const Container = styled.section`
    background: linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)),url('${background}');
    
`;

export const Content = styled.div`
padding-bottom: 70px;

`;
