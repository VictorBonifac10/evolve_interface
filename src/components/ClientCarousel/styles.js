import styled from "styled-components";


export const ContainerCarousel = styled.div`

.swiper{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    padding: 20px;
    width: 380px;
}

.clientCard{
  border: 1px solid rgba(255, 255, 255, 0.29);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background-color: #11222975;

  img{
    width: 130px;
    border-radius: 50%;
    margin-bottom: 15px;
  }

  p{
    color: #fff;
    max-width: 230px;
    text-align: center;
    font-size: 16px;
  }

  h3{

    font-size: 14px;
    color: #fff;
    
      span{
        font-weight: bold;
      }
  }

}

`;