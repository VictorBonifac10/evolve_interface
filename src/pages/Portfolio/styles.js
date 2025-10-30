import styled from "styled-components";

export const PortfolioContainer = styled.div`

`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProductCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15%;
  width: 100%;
  margin: 80px;
  position: relative; 
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 40px;
  overflow: hidden;
  padding: 25px;
  color: #fff;
  transition: 1s;

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
    max-width: 550px;
  }

  .content-img{
    position: relative;
    z-index: 2;
  }

  .custom-button{
    width: 50%;
  }

  &:hover{
    transform: scale(1.02);
    border: 1px solid #fff;
}
  
  @media (max-width: 850px) {
      padding: 50px 20px;
      margin-top: 50px;
  }
`;

export const Mask = styled.div`
  background: linear-gradient(
    109deg,
    rgba(10, 12, 16, 0.9) 15%,
    rgba(10, 12, 16, 0.21) 50%,
    rgba(10, 12, 16, 0.9) 85%
  );
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Text = styled.p`  
  color: #fff;
  max-width: 500px;
`;

export const ImageProduct = styled.img`
  width: 400px;
`;

export const BenefitsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 30px 0px 30px 0px;

  .benefits{
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .benefit-icon{
    display: flex;
    align-items: center;
    gap: 8px;

    i{
      border: 1px solid #fff;
      border-radius: 50px;
      padding: 4px 8px;
    }

    p{
      margin: 0;
    }

  }

`;