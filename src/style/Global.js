import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


 body{
    background-color: #000;
  }

  .react-overlay{
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: fixed;
        background-color: rgb(0,0,0,0.5);
    }
    .react-modal{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -75%);
        background-color: #d3d3d3;
        border-radius: 5px;
        width: 50%;
        height: 50%;
        max-width: 400px;
        max-height: 250px;
        border: #d1a436 2px solid;
    }

`