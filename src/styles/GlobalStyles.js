import styled, { createGlobalStyle } from "styled-components";
import * as color from "../config/colors";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body{
    font-family: sans-serif;
    background: ${color.primaryDarkColor};
    //color: ${color.primaryColor};
  }

  html, body, #root{
    height: 100%;
  }

  button{
    cursor: pointer;
    background: ${color.primaryColor};
    border: none;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 300ms;
  }
  button:hover{
    filter: brightness(75%);
  }
  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

body .Toastify .Toastify__toast-container .Toastify__toast--success {
background: ${color.successColor};
color: #fff;

}
.Toastify__progress-bar--success {
  background: #fff;
}

.Toastify__toast--success .Toastify__toast-icon svg {
      fill: white; /* Muda a cor do símbolo */
}

body .Toastify .Toastify__toast-container .Toastify__toast--error {
background: ${color.errorColor};
color: #fff;

}
.Toastify__progress-bar--error {
  background: #fff;
}

.Toastify__toast--error .Toastify__toast-icon svg {
      fill: white; /* Muda a cor do símbolo */
}

`;

export const Container = styled.section`
  max-width: 480px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
