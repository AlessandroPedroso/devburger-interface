import styled from 'styled-components';
import BackgroundLogin from '../../assets/background-login.svg';
import Background from '../../assets/background.svg';

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`;

export const LeftContainer = styled.div`
    background: url('${BackgroundLogin}');
    background-size: cover;
    background-position: center;

    height: 100%;
    width: 100%;
    max-width: 50%;
    
    display:flex;
    align-items: center;
    justify-content: center;

    img{
        width: 60%;
    }
`;

export const RigthContainer = styled.div`
    height: 100%;
    width: 100%;
    max-width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: url('${Background}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #1e1e1e;

    p{
        color:#ffffff;
        font-size:18px;
        font-weight:800;
    }

    a{
        text-decoration:underline;
    }

`;

export const Titile = styled.h2`
   font-family: "Road Rage", sans-serif;
   font-size: 40px;
   color:#9758A6;
`;

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   gap: 20px;
   padding: 20px;
   width: 100%;
   max-width: 400px;
`;

export const InputContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 5px;
   width: 100%;

   input{
        width: 100%;
        border: none;
        height: 52px;
        border-radius: 5px;
        padding: 0 16px;
   }

   label{
    font-size: 18px;
    font-weight: 600;
    color:#ffffff;
   }

   p{
    font-size: 14px;
    line-height: 80%;
    color:#cf3057;
    font-weight: 600;
    height: 10px;
   }
`;

export const Button = styled.button`
   
`;