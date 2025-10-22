import styled from "styled-components";

export const Button = styled.button`
    background-color: #000;
    border: 1.5px solid #6aff00ff;
    border-radius: 8px;
    padding: 12px;
    width: 320px;
    font-size: 12px;

    position: fixed;
    z-index: 2;
    bottom: 2px;
    right: 2px;

    margin: 20px;

    display: flex;
    align-items: center;
    text-align: start;
    gap: 14px;

    color: #fff;
    cursor: pointer;
    overflow: hidden;
    transition: color 0.3s ease;

    background-image: linear-gradient(to right, #6aff0096 0%, #6aff008b 0%, #000 100%);
    background-size: 200% 150%;
    background-position: right bottom;
    transition: background-position 0.4s ease-out, color 0.3s ease;

    h2 {
        font-size: 17px;
        color: #6aff00ff;
        transition: color 0.3s ease;
    }

    i {
        font-size: 30px;
        color: #6aff00ff;
        transition: color 0.3s ease;
    }

    &:hover {
        background-position: left bottom;
    }
`;
