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
  height: 850px;
  margin-top: 70px;
  background: #ffffff;
  border: 1px solid black;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0 120px;
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

export const Divide = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const Info = styled.div`
  width: 100%;
  height: 24px;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
`;

export const Input = styled.input`
  width: 540px;
  height: 70px;
  margin-top: 20px;
  backgournd: #ffffff;
  border: 1px solid black;
  box-sizing: border-box;
  font-size: 25px;
`;

export const Button = styled.button`
  width: 240px;
  height: 50px;
  margin-top: 40px;
  margin-left: 150px;
  background-color: yellow;
  font-weight: 400;
  font-size: 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 0;
  height: 0;
`;
