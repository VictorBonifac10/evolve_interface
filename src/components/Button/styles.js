import styled from "styled-components";

export const ContainerButton = styled.button`
    background-color: #fff;
    border: none;
    border-radius: 5px;
    padding: 14px;
    width: 14%;
    font-size: 16px;

    position: relative;
    z-index: 2;

    margin: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    &:hover{
        background-color: #ffffffc4;
    }

    @media (max-width: 1085px) {
    width: 180px;
  }

`;