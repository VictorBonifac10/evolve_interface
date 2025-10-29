import styled from "styled-components";

export const ContainerCarousel = styled.div`

.mySwiper{
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 3px;
    padding: 20px;
    width: 600px;
    height: 400px;
  
}

.mySwiper .swiper-button-next,
.mySwiper .swiper-button-prev {
  color: #00aaff; /* cor da seta */
  transition: all 0.3s ease;
}

.mySwiper .swiper-button-next:hover,
.mySwiper .swiper-button-prev:hover {
  color: #0077cc; /* cor ao passar o mouse */
}

.mySwiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.clientCard{
  width: 400px;
  border: 1px solid rgba(255, 255, 255, 0.29);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  transition: 1s;
  background: linear-gradient(318deg, #2814da2b, #c012a627, #00aaff34, #1b1b1b3e, #0000002b);
  background-size: 1000% 1000%;
  
-webkit-animation: Coolgradient 41s linear infinite;
-moz-animation: Coolgradient 41s linear infinite;
-o-animation: Coolgradient 41s linear infinite;
animation: Coolgradient 41s linear infinite;

@-webkit-keyframes Coolgradient {
    0%{background-position:5% 0%}
    50%{background-position:96% 100%}
    100%{background-position:5% 0%}
}
@-moz-keyframes Coolgradient {
    0%{background-position:5% 0%}
    50%{background-position:96% 100%}
    100%{background-position:5% 0%}
}
@-o-keyframes Coolgradient {
    0%{background-position:5% 0%}
    50%{background-position:96% 100%}
    100%{background-position:5% 0%}
}
@keyframes Coolgradient { 
    0%{background-position:5% 0%}
    50%{background-position:96% 100%}
    100%{background-position:5% 0%}
}

&:hover{

      transform: scale(1.05);
      border: 1px solid #fff;

}

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