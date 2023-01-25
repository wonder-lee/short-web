import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/pagination";

const WebList = () => {
  return (
    <WebListWrap>
      <Swiper
        className="swiper"
        direction={"vertical"}
        modules={[Mousewheel, Pagination]}
        mousewheel={true}
        loop={true}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </WebListWrap>
  );
};

export default WebList;

const WebListWrap = styled.section`
  padding-bottom: 25px;
  .swiper {
    border: 1px solid blue;
    height: 55vh;
  }
`;
