import styled from "styled-components";
import { Link } from "react-router-dom";

export const Div = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Img = styled.img`
  width: 330px;
  height: 93px;
  cursor: pointer;
`;

export const Login = styled.div`
  width: 108px;
  height: 30px;
  color: #000000;
  font-weight: 400;
  font-size: 25px;
  text-decoration-line: none;
  cursor: pointer;
`;

export const Divide = styled.div`
  width: 100%;
  height: 10px;
  background: #afadfc;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
