import styled from "styled-components";
import { Link as LinkHeader } from "react-router-dom";

export const Container = styled.div`

    background-color:${props => props.theme.mainBlack};
    width:100%;
    height: 72px;
    display:flex;
    align-items:center;
`
export const Content = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;

    width:100%;
    max-width:1280px;
    margin:0 auto;
`
export const Navigation = styled.nav`
    display:flex;
    align-items:center;
    justify-content:center;
    height:72px;

    img{
        margin-left:56px;
    }

    div{
        padding-left:20px;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:20px;

        hr{
            height: 24px;
            border:1px solid #625e5e;
        }
    }
`
export const HeaderLink = styled(LinkHeader)`
    color:${props => props.$isActive ? '#9758a6' : '#FFF'};
    border-bottom: ${props=> props.$isActive? '1px solid #9758a6':''};
    text-decoration:none;
    font-size:14px;
    transition: color 200ms;

    &:hover{
        color:#9758a6;
    }

`

export const Options = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    gap:40px;

`

export const Profile = styled.div`
    
    display:flex;
    align-items:center;
    justify-content:center;
    gap:12px;
    font-size:14px;

    div{
        margin-top:15px;
    }

    p{
        color: #fff;
        line-height:90%;
        font-weight:300;
    }

    span{
        font-weight:700;
        color:#9758A6;
    }

`
export const Logout = styled.button`

    color:#ff3205;
    text-decoration:none;
    font-weight:700;
    background-color:transparent;
    border:none;
    transition: opacity 200ms;

    &:hover{
        opacity:0.6;
    }
`
export const LinkContainer = styled.div`
    margin-right:56px;

    display:flex;
    align-items:center;
    justify-content: center;
    gap:10px;
`

