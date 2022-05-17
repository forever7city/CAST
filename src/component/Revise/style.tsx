import styled from "styled-components";
import { Link } from "react-router-dom";

export const Div = styled.div`
  width: 100%;
  height: 955px;
  background: rgba(241, 194, 245, 0.15);
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 970px;
  height: 955px;
  background-color: white;
  text-align: center;
`;

export const ChangeImage = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  justify-content: space-evenly;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;

export const Button = styled.div`
  width: 280px;
  height: 55px;
  background-color: #ffff00;
  border-radius: 50px;
  font-weight: 400;
  font-size: 38px;
  padding: 10px 0;
  margin-top: 60px;
  cursor: pointer;
`;

export const Modify = styled.div`
  width: 100%;
  margin-top: 40px;
  padding: 0 150px;
  display: flex;
  flex-direction: column;
`;

export const ModifyText = styled.div`
  width: 180px;
  height: 24px;
  margin-left: -20px;
  font-weight: 400;
  font-size: 36px;
`;

export const Input = styled.input`
  width: 600px;
  height: 70px;
  margin-top: 30px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  font-size: 22px;
`;

export const Finish = styled.button`
  width: 220px;
  height: 60px;
  margin-top: 40px;
  background: rgba(79, 113, 235, 0.5);
  color: rgba(0, 0, 0, 0.5);
  border: none;
  font-weight: 40;
  font-size: 38px;
  text-align: center;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 0;
  height: 0;
`;
