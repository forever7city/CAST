import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../component/Main/Main";
import Login from "../component/Login/Login";
import MyPage from "../component/MyPage/MyPage";
import { Join } from "../component";
import Archives from "../component/Archives/Archives";
import Notice from "../component/Notice/Notice";
import Write from "../component/Write/Write";
import Revise from "../component/Revise/Revise";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/write" element={<Write />} />
        <Route path="/revise" element={<Revise />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
