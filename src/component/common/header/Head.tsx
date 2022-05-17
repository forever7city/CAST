import React from "react";
import * as S from "./style";
import { logo } from "../../../assests";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <S.Div>
        <Link to="/">
          <S.Img src={logo} alt="" />
        </Link>
        <S.StyledLink to="/login">
          <S.Login>Login</S.Login>
        </S.StyledLink>
      </S.Div>
      <S.Divide />
    </>
  );
};

export default Header;
