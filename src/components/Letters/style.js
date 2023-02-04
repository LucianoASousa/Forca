import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 375px;

  button{
    margin: 2px;
    height: 30px;
    width: 30px;
    text-align: center;
    border: none;
    border-radius: 1px;
    background-color: #d1a436;
    text-shadow: 1px 1px 1px #fff;
 
    
    :disabled{
      color: #fff;
      text-shadow: 1px 1px 1px #000;
    }
  }

  @media (max-width: 768px) {
    width: 360px;
    button{
      margin: 2px;
      height: 28px;
      width: 28px;
      text-align: center;
    }
  }
  `

