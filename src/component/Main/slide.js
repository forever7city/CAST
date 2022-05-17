import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";
import banner from "../../assests/main/banner.svg";
import * as S from "./style";

SwiperCore.use([Pagination, Autoplay]);

const MainSwiper = () => {
  return (
    <main className="ExampleComponent">
      <div className="main-wrap">
        <Swiper
          style={{
            width: "950px",
            height: "400px",
            backgroundColor: "#FFF5F1",
          }}
          spaceBetween={8}
          initialSlide={1}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <S.Img src={banner} alt="" />
          </SwiperSlide>
          <SwiperSlide>슬라이더2</SwiperSlide>
          <SwiperSlide>슬라이더3</SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
};

export default MainSwiper;
