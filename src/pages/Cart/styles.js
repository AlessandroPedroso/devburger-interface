import styled from "styled-components";
import Texture from '../../assets/texture.png'
import background from '../../assets/background.svg';

export const Container = styled.div`
    width: 100%;
    background-color:#f0f0f0;
    min-height:100vh; //minimo espaço disponivel
    background: linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)),url('${background}');

`
export const Banner = styled.div`
    background: url('${Texture}');
    background-color:#1f1f1f;
    background-size:cover;
    background-position:center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 180px;

    img{
        width:150px;
        max-width:100%;
    }

`  
export const Title = styled.div`
    font-size: 32px;
    font-weight:800px;
    padding-bottom:12px;
    color:#61a120;
    text-align:center;
    position: relative;
   
    &::after{
        position: absolute;
        left:calc(50% - 28px);
        bottom:0;
        content:'';
        width:56px; //56/2 = 28;
        height: 4px;
        background-color:#61a120;
    }

`  
export const Content = styled.div`

    display:grid;
    grid-template-columns: 1fr 30%;
    
    gap:40px;
    width: 100%;
    max-width:1280px;
    
    margin:0 auto;
    margin-top:20px;
`
