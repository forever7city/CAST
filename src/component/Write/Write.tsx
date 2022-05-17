import React from "react";
import * as S from "./style";
import Header from "../common/header/Head";
import Bottom from "../common/bottom/Bottom";
import { Link } from "react-router-dom";
import Board from "./board";

const Write = () => {
  return (
    <>
      <Header />
      <S.Div>
        <S.Content>
          <S.Title>글쓰기</S.Title>
          <S.WriteTitle placeholder="제목을 입력해주세요."></S.WriteTitle>
          <Board />
          <S.FileDivide>
            <S.FindFile>파일 올리기</S.FindFile>
            <S.File></S.File>
          </S.FileDivide>
          <Link to="/archives">
            <S.Finish>올리기</S.Finish>
          </Link>
        </S.Content>
      </S.Div>
      <Bottom />
    </>
  );
};

export default Write;
