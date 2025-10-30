import styled from "styled-components";

export const ContainerFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  align-items: center;
  text-align: center;
  width: 100%;
  padding-bottom: 40px;

  img{
    width: 250px;
  }

  ul{
    display: flex;
    gap: 20px;
    list-style: none;

  li{
    color: #fff;
    font-size: 14px;
    }
  }

  div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    i{
      color: #fff;
      font-size: 20px;
      transition: 0.5s;
      cursor: pointer;

      &:hover{
        transform: scale(1.5);
      }
    }
  }
`;

export const Text = styled.div`
    color: #fff;
    max-width: 500px;
`;
