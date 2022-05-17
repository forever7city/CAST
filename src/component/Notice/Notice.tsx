import React from "react";
import * as S from "./style";
import Header from "../common/header/Head";
import Bottom from "../common/bottom/Bottom";
import { Link } from "react-router-dom";

const Notice = () => {
  return (
    <>
      <Header />
      <S.Div>
        <S.SubjectBox>
          <S.SubTitle>게시판</S.SubTitle>
          <S.SubBind>
            <S.SubList />
            <S.SubJect>수학</S.SubJect>
          </S.SubBind>
          <S.SubBind>
            <S.SubList />
            <S.SubJect>영어</S.SubJect>
          </S.SubBind>
          <S.SubBind>
            <S.SubList />
            <S.SubJect>한국사</S.SubJect>
          </S.SubBind>
        </S.SubjectBox>
        <S.Content>
          <S.Title>수학 게시판</S.Title>
          <S.Kinds>
            <S.Number>번호</S.Number>
            <S.KindTitle>제목</S.KindTitle>
            <S.Bind>
              <S.Writer>작성자</S.Writer>
              <S.Date>작성일</S.Date>
              <S.Check>조회수</S.Check>
            </S.Bind>
          </S.Kinds>
          <S.List>
            <S.ListNumber>1</S.ListNumber>
            <S.ListTitle>이것은 테스트 과정의 제목입니다</S.ListTitle>
            <S.ListWriter>수능너무싫어</S.ListWriter>
            <S.ListDate>04/22</S.ListDate>
            <S.ListCheck>20</S.ListCheck>
          </S.List>
          <S.SelectDivide>
            <S.SelectLeftBox>＜ </S.SelectLeftBox>
            <S.SelectNumberBox>1</S.SelectNumberBox>
            <S.SelectNumberBox>2</S.SelectNumberBox>
            <S.SelectNumberBox>3</S.SelectNumberBox>
            <S.SelectNumberBox>4</S.SelectNumberBox>
            <S.SelectRightBox>＞</S.SelectRightBox>
          </S.SelectDivide>
          <Link to="/write">
            <S.Write>글쓰기</S.Write>
          </Link>
        </S.Content>
      </S.Div>
      <Bottom />
    </>
  );
};

export default Notice;
