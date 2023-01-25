import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import styled, { css } from "styled-components";
import { bannerData } from "./bannersData";
import "swiper/css";
import "swiper/css/pagination";

const Banners = () => {
  return (
    <BannersWrap>
      <Swiper
        className="swiper"
        modules={[Pagination, Autoplay]}
        pagination={true}
        autoplay={{
          delay: 10000,
        }}
        spaceBetween={30}
        loop={true}
      >
        {bannerData.map((banner, index) => {
          return (
            <SwiperSlide className="slide" key={banner.title + index}>
              <h3>{banner.title}</h3>
              <p>{banner.content}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </BannersWrap>
  );
};

export default Banners;

const BannersWrap = styled.section`
  ${({ theme }) => {
    const { width, padding, colors } = theme;
    return css`
      .swiper {
        max-width: ${width.default};
        height: 90px;

        .slide {
          display: flex;
          flex-direction: column;
          gap: 10px;
          background-color: ${colors.black.light};
          border-radius: 15px;
          font-size: 12px;
          padding: 15px 20px;

          h3 {
            color: ${colors.black.gray};
          }

          p {
            font-size: 15px;
          }
        }

        .swiper-pagination-bullet-active {
          background-color: ${colors.pink.default};
        }
        .swiper-pagination-bullet {
          background-color: ${colors.pink.default};
        }
      }
    `;
  }}
`;
