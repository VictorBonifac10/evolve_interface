import styled from 'styled-components'

export const ContainerTop = styled.div`

    display: flex;
    align-items: center;

    width: 100%;
    height: 100vh;

    padding: 50px;

    
    img{
        position: relative;
        z-index: 2;

        margin-bottom: 20px;
    }

    .containerBanner{

        display: flex;
        align-items: center;

    }
`

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

export const ContentLeft = styled.div``

export const FirstDescription = styled.p`
    max-width: 65%;

    color: #fff;
    font-size: 50px;

    position: relative;
    z-index: 2;

    margin-bottom: 30px;
    line-height: 50px;
`

export const SecondDescription = styled.p`
    max-width: 50%;

    color: #fff;
    font-size: 20px;

    position: relative;
    z-index: 2;
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

`