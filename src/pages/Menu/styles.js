import styled from 'styled-components';

import { Link } from 'react-router-dom';
import background from '../../assets/background.svg';
import BannerHamburguer from '../../assets/banner-hamburguer.svg';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;
    background: linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)),url('${background}');

`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
    width: 100%;
    position: relative;

    background: url('${BannerHamburguer}') no-repeat;
    background-color:#1f1f1f;
    background-position: center;
    background-size: cover;

    h1{
        font-family: "Road Rage", sans-serif;
        font-size: 80px;
        line-height: 60px;
        color:#ffffff;
        position: absolute;
        right: 20%;
        top: 25%;
    }

    span{
        display: block;
        color:#fff;
        font-size: 20px;
        
    }

`;

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${(props) => (props.$isActiveCategory ? '#9758a6' : '#696969')};
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && '3px solid #9758a6'};
`;

export const ProductsContainer = styled.div`

    display: grid;
    grid-template-columns: repeat(3,315px);
    padding: 20px;
    grid-gap: 50px;
    row-gap: 80px;
    justify-content: center;
    align-items: center;
    max-width: 1280px;
    margin: 50px auto 0;
`;