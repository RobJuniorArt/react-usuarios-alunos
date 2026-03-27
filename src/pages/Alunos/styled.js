import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { primaryColor } from "../../config/colors";

export const Title = styled.h1`
  color: ${(props) => (props.isRed ? "red" : "blue")};
  background-color: green;
  small {
    font-size: 12pt;
    margin-left: 15px;
    color: #999;
  }
`;

export const Paragrafo = styled.p`
  font-size: 20px;
`;

export const AlunoContainer = styled.div`
  margin-top: 20px;
  padding: 8px;
  font-size: 14px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }
  div + div {
    border-top: 1px solid #eee;
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const EditLink = styled(Link)`
  svg {
    color: #000;
    &:hover {
      color: #ed3636;
    }
  }
`;

export const CloseLink = styled(Link)`
  svg {
    color: #f00;
    &:hover {
      color: #000;
    }
  }
`;

export const NovoAluno = styled(Link)`
  display: block;
  padding: 20px 0 10px 0;
  color: ${primaryColor};
  font-weight: bold;
`;
