import React from "react";
import * as S from "./style";
import Header from "../common/header/Head";
import Bottom from "../common/bottom/Bottom";
import { user } from "../../assests";
import { Link } from "react-router-dom";
const MyPage = () => {
  return (
    <>
      <Header />
      <S.Div>
        <S.Content>
          <S.User>
            <S.Image src={user} alt="" />
            <S.Divide>
              <Link to="/revise">
                <S.Modify>수정하기</S.Modify>
              </Link>
              <S.Divide>
                <S.Info>수능 잘보고 대학가자~!</S.Info>
                <S.Info>닉네임 : 수능짱</S.Info>
              </S.Divide>
            </S.Divide>
          </S.User>
          <S.ListText>등록한 글</S.ListText>
          <S.Kinds>
            <S.Number>번호</S.Number>
            <S.Title>제목</S.Title>
            <S.KindDivide>
              <S.Writer>작성자</S.Writer>
              <S.Date>작성일</S.Date>
              <S.Check>조회</S.Check>
            </S.KindDivide>
          </S.Kinds>
          <S.Lists>
            <S.ListNumber>1</S.ListNumber>
            <S.ListTitle>제목입니다</S.ListTitle>
            <S.ListDivide>
              <S.Writer>작성자</S.Writer>
              <S.Date>12일전</S.Date>
              <S.ListCheck>1</S.ListCheck>
            </S.ListDivide>
          </S.Lists>
          <S.SelectDivide>
            <S.SelectLeftBox>＜ </S.SelectLeftBox>
            <S.SelectNumberBox>1</S.SelectNumberBox>
            <S.SelectRightBox>＞</S.SelectRightBox>
          </S.SelectDivide>
        </S.Content>
      </S.Div>
      <Bottom />
    </>
  );
};

export default MyPage;
