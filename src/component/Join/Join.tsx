import React from "react";
import * as S from "./style";
import Header from "../common/header/Head";
import Bottom from "../common/bottom/Bottom";
import { Link } from "react-router-dom";

const Join = () => {
  return (
    <>
      <Header />
      <S.Div>
        <S.Alert>
          <S.Text>회원가입</S.Text>
          <S.Divide>
            <S.Info>아이디</S.Info>
            <S.Input />
          </S.Divide>
          <S.Divide>
            <S.Info>비밀번호</S.Info>
            <S.Input />
          </S.Divide>
          <S.Divide>
            <S.Info>이메일주소</S.Info>
            <S.Input />
          </S.Divide>
          <S.Divide>
            <S.Info>사용할 닉네임</S.Info>
            <S.Input />
          </S.Divide>
          <S.Divide>
            <S.Info>한줄 소개</S.Info>
            <S.Input />
          </S.Divide>
          <S.StyledLink to="/">
            <S.Button>가입하기</S.Button>
          </S.StyledLink>
        </S.Alert>
      </S.Div>
      <Bottom />
    </>
  );
};

export default Join;
