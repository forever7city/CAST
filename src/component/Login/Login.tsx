import React from "react";
import * as S from "./style";
import Header from "../common/header/Head";
import Bottom from "../common/bottom/Bottom";
import { login } from "../../assests/";

const Login = () => {
  return (
    <>
      <Header />
      <S.Div>
        <S.Alert>
          <S.Text>Login</S.Text>
          <S.Write>
            <S.Input placeholder="ID" />
            <S.Input placeholder="PassWord" />
          </S.Write>
          <S.StyledLink to="/Join">
            <S.Join>회원가입 하러가기</S.Join>
          </S.StyledLink>
          <S.Image src={login} alt="" />
        </S.Alert>
      </S.Div>
      <Bottom />
    </>
  );
};

export default Login;
