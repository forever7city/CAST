import React from "react";
import * as S from "./style";
import Header from "../common/header/Head";
import Bottom from "../common/bottom/Bottom";
import { user } from "../../assests";

const Revise = () => {
  return (
    <>
      <Header />
      <S.Div>
        <S.Content>
          <S.ChangeImage>
            <S.Image src={user} alt="" />
            <S.Button>이미지 변경</S.Button>
          </S.ChangeImage>
          <S.Modify>
            <S.ModifyText>아이디</S.ModifyText>
            <S.Input />
          </S.Modify>
          <S.Modify>
            <S.ModifyText>비밀번호</S.ModifyText>
            <S.Input />
          </S.Modify>
          <S.Modify>
            <S.ModifyText>한줄소개</S.ModifyText>
            <S.Input />
          </S.Modify>
          <S.StyledLink to="/mypage">
            <S.Finish>수정완료</S.Finish>
          </S.StyledLink>
        </S.Content>
      </S.Div>
      <Bottom />
    </>
  );
};

export default Revise;
