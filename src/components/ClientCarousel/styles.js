import styled from "styled-components";

export const ContainerCarousel = styled.div`
  width: 100%;
  padding: 0 100px; 
  margin: 0 auto;
  
  @media (max-width: 850px) {
    padding: 10px 10px; 
  }

.mySwiper {
    width: 100%;
    padding-top: 50px; /* Para dar espaço ao efeito coverflow */
    padding-bottom: 50px;
  }

  .swiper-slide {
  background-position: center;
  background-size: cover;
  width: 450px; /* Largura padrão (Desktop) */
  
  @media (max-width: 650px) {
    /* Mude de 95% para uma largura MÁXIMA mais razoável em mobile. */
    /* Usar 90% aqui é mais seguro, ou uma largura máxima em pixels. */
    width: 90%; 
    max-width: 350px; /* Garante que o slide não fique muito grande */
  }
}

.swiper-button-next,
  .swiper-button-prev {
      color: #fff; /* Cor das setas */
      
      @media (max-width: 650px) {
          /* Move as setas para mais perto do centro da tela em mobile, 
             para que elas não "vazem" ou fiquem muito perto das bordas. */
          top: 35%; /* Ajusta a altura da seta */
          
          /* As setas se adaptam à nova largura do contêiner */
          &::after {
              font-size: 1.5rem !important; /* Diminui o ícone */
          }
      }
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
  max-width: 400px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.29);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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

    @media (max-width: 650px) {
      width: 55%; /* Ocupa 90% da largura do contêiner disponível */
      padding: 10px;
    }
  }

  p{
    color: #fff;
    text-align: center;
    font-size: 16px;

    @media (max-width: 650px) {
      padding: 10px;
    }
  }

  h3{

    font-size: 14px;
    color: #fff;
    
      span{
        font-weight: bold;
      }
  }

  @media (max-width: 850px) {
    padding: 0 20px; /* Padding menor em telas menores */
  }

}

`;