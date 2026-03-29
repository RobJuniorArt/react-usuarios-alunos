import styled from "styled-components";
import * as colors from "../../config/colors";

export const Title = styled.h1`
  text-align: center;
`;
export const Form = styled.form`
  label {
    width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    border: 3px dashed ${colors.primaryColor};
    margin: 30px auto;
    cursor: pointer;
    border-radius: 50%;
    overflow: hidden;
  }

  input {
    display: none;
  }

  img {
    width: 180px;
    height: 180px;
  }
`;

export const ContainerFotos = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  max-width: 500px;
  margin-top: 20px auto 0;
`;

export const OutraFoto = styled.div`
  width: 110px;
  height: 110px;
  flex-shrink: 0; //impede que o flexbox diminua a bolinha
  background: #eee;
  border: 3px dashed ${colors.primaryColor};
  cursor: pointer;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; //para a foto nao distorcer
  }
`;
