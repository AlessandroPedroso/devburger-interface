import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding:20px;
    border-radius: 28px;
    background-color: #ffffff;
    position: relative;
    max-width: 315px;
    cursor: grab;
    box-shadow: 0px 4px 50px 0px #00000026;


    div{
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 5px;

        p{
            font-size: 18px;
            color:#FF8C05;
            font-weight: 700;
            line-height: 20px;
            margin-top: 40px;
            font-size: 18px;
        }

        strong{
            font-size: 18px;
            font-weight: 800;
            color:#363636;
            line-height: 20px;
        }
    }

`;

export const CardImage = styled.img`
    height: 100px;
    position: absolute;
    top:-50px;
`;
