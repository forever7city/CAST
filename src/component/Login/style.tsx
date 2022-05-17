import styled from "styled-components";
import { Link } from "react-router-dom";

export const Div = styled.div`
  width: 100%;
  height: 955px;
  background: rgba(241, 194, 245, 0.15);
  display: flex;
  justify-content: center;
`;

export const Alert = styled.div`
  width: 780px;
  height: 660px;
  margin-top: 84px;
  background: #ffffff;
  border: 1px solid black;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 66px;
  line-height: 78px;
  margin-top: 32px;
  display: flex;
  justify-content: center;
`;

export const Write = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 64px;
`;

export const Input = styled.input`
  width: 540px;
  height: 70px;
  background: #ffffff;
  border: 1px solid black;
  box-sizing: border-box;
  display: flex;
  margin-left: 126px;
  font-size: 30px;
`;

export const Join = styled.div`
  width: 230px;
  height: 60px;
  margin-top: 45px;
  margin-left: 270px;
  font-weight: 400;
  font-size: 25px;
  background-color: white;
  border: none;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100px;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 0;
`;
