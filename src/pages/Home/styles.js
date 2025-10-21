import styled from 'styled-components'

export const ContainerTop = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0px 50px 50px 50px;
    
    img{
        position: relative;
        z-index: 2;

        margin-bottom: 30px;

        @media (max-width: 1085px) {
            max-width: 200px;
            margin-bottom: 20px;
        }
    }

    .containerBanner{

        display: flex;
        align-items: center;

        @media (max-width: 1085px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            gap: 25px;

            margin-top: 100px;
        }
    }
`;

export const Banner = styled.div`

    video{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        object-fit: cover;
        z-index: 0;
    }

    .mask{
        background: linear-gradient(109deg, rgba(10, 12, 16, 0.90) 15%, rgba(10, 12, 16, 0.60) 50%, rgba(10, 12, 16, 0.90) 85%);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 1;
    }

`

export const ContentLeft = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    z-index: 2;

    @media (max-width: 1085px) {
        align-items: center;
    }
`

export const FirstDescription = styled.p`
    max-width: 65%;

    color: #fff;
    font-size: 50px;

    position: relative;
    z-index: 2;

    margin-bottom: 20px;
    line-height: 50px;

    @media (max-width: 1085px) {
        font-size: 28px;
        line-height: 34px;
        max-width: 90%;
        text-align: center;
    }
`

export const SecondDescription = styled.p`
    max-width: 50%;

    color: #fff;
    font-size: 20px;

    position: relative;
    z-index: 2;

    margin-bottom: 10px;

    @media (max-width: 1085px) {
        font-size: 15px;
        max-width: 70%;
    }

`

export const ContentRight = styled.div`
    position: relative;
    z-index: 2;

    display: flex;
    flex-direction: column;
    gap: 15px;

    i{
        color: #fff;
        font-size: 25px;
    }

    @media (max-width: 1085px) {
        flex-direction: row;
        justify-content: center;

    }

`