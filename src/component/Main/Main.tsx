import React from "react";
import * as S from "./style";
import Header from "../common/header/Head";
import Bottom from "../common/bottom/Bottom";
import { Link } from "react-router-dom";
import MainSwiper from "./slide";

const Main = () => {
  return (
    <>
      <Header />
      <S.Div>
        <S.Content>
          <MainSwiper />
          <S.study>
            <S.Data>
              <S.Titles>
                <S.Title>자료방</S.Title>
                <Link to="/archives">
                  <S.PageMove />
                </Link>
              </S.Titles>
              <S.list></S.list>
              <S.list></S.list>
              <S.list></S.list>
              <S.list></S.list>
              <S.list></S.list>
              <S.list></S.list>
            </S.Data>
            <S.Data>
              <S.Titles>
                <S.Title>게시판</S.Title>
                <Link to="/notice">
                  <S.PageMove />
                </Link>
              </S.Titles>
              <S.list></S.list>
              <S.list></S.list>
              <S.list></S.list>
              <S.list></S.list>
              <S.list></S.list>
              <S.list></S.list>
            </S.Data>
          </S.study>
        </S.Content>
      </S.Div>
      <Bottom />
    </>
  );
};

export default Main;
