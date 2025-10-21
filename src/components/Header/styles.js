import styled from "styled-components";

export const CustomNavbar = styled.div`
  .navbar-toggler {
    border: none;
    background: transparent !important;
    margin-left: auto; /* joga o botão pro lado direito */

    /* remove sombra e focus padrão */
    &:focus {
      box-shadow: none;
    }

    /* tracinhos do ícone */
    .navbar-toggler-icon {
      background-image: none;
      width: 25px;
      height: 2px;
      background-color: white;
      position: relative;
    }

    /* cria os outros dois tracinhos */
    .navbar-toggler-icon::before,
    .navbar-toggler-icon::after {
      content: '';
      position: absolute;
      left: 0;
      width: 25px;
      height: 2px;
      background-color: white;
      transition: all 0.3s;
    }

    .navbar-toggler-icon::before {
      top: -7px;
    }

    .navbar-toggler-icon::after {
      top: 7px;
    }
  }
`;
