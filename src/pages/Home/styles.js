import { styled } from 'styled-components'

export const ContainerBody = styled.div`
    background-color: rgba(5, 6, 8, 1);
    background-image: radial-gradient(#1C1C1C 0.7px, transparent 0.7px);
    background-size: 25px 25px;
  `;

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
      background: linear-gradient(109deg, rgba(10, 12, 16, 0.90) 15%, rgba(10, 12, 16, 0.21) 50%, rgba(10, 12, 16, 0.90) 85%);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: 1;
    }

    .scroll-indicator {
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      font-family: 'Poppins', sans-serif;
    }

    .mouse {
      width: 25px;
      height: 42px;
      border: 2px solid #fff;
      border-radius: 15px;
      position: relative;
    }

    .wheel {
      width: 6px;
      height: 6px;
      background-color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      animation: scroll 1.5s infinite;
    }

    @keyframes scroll {
      0% { opacity: 0; transform: translate(-50%, 0); }
      40% { opacity: 1; }
      100% { opacity: 0; transform: translate(-50%, 20px); }
    }

`;

export const ContentLeft = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    z-index: 2;

    @media (max-width: 1085px) {
        align-items: center;
    }
`;

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
`;

export const SecondDescription = styled.p`
    max-width: 50%;

    color: #fff;
    font-size: 20px;

    position: relative;
    z-index: 2;

    margin-bottom: 20px;

    @media (max-width: 1085px) {
        font-size: 15px;
        max-width: 70%;
    }

`;

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
`;

export const ContainerMain = styled.main`
`;

export const ContainerAbout = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    gap: 120px;

  @media (max-width: 1300px) {
    flex-direction: column;
    gap: 90px;
  }

  .aboutText{
      @media (max-width: 1300px) {
        text-align: center;
      }
  }

  .aboutImage {
    position: relative;
    width: 450px;
    height: 450px;
}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    display: block;
  }

  /* animate circle */

  .rotating-container {
    position: absolute;
    top: -85px;   
    right: -75px;
    z-index: 2;
    width: 200px;
    height: 200px;
    animation: rotate-text 10s linear infinite;
  }

  .inner-circle {
    fill: #00fbff96;
  }

  #text-on-path {
    font-family: Arial, sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 5px;
    fill: #00fbff96;
  }

  @keyframes rotate-text {
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 600px) {
    .aboutImage {
      width: auto;
      height: 400px;
    }
    
    .rotating-container{
      right: 280px;
    }
}

`;

export const Text = styled.div`
    color: #fff;
    max-width: 500px;
`;

export const ContainerServices = styled.div`
    padding: 0px 150px 0px 150px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

export const ContainerPortfolio = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden; 
    margin: 140px 0 30px 0;
    padding: 20px 50px 15px 150px;
    color: #fff;

    video {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 0;
    }

    .content {
      position: relative;
      z-index: 2;
    }
    
`;

export const Mask = styled.div`
      background: linear-gradient(109deg, rgba(10, 12, 16, 0.90) 15%, rgba(10, 12, 16, 0.21) 50%, rgba(10, 12, 16, 0.90) 85%);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: 1;
`;

export const ContainerClients = styled.div`

    padding: 0px 150px 0px 150px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;


`


