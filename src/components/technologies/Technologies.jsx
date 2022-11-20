import React from "react";
import "./Technologies.css";
import tech from "../../tech";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Technologies = () => {
  return (
    <section id="technologies">
      <h5>What I Usually Use</h5>
      <h2>Technologies</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="container technologies__container"
      >
        {tech.map(({ icon }, index) => {
          return (
            <SwiperSlide key={index} className="technologies">
              <div className="technologies__icon">
                {icon}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Technologies;
