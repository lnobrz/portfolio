import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

type Props = {
  counters: {
    logo: string;
    title: string;
  }[];
};

const Counter = ({ counters }: Props) => {
  return (
    <div className="h-25 d-flex overflow-x-auto">
      <Swiper
        spaceBetween={50}
        slidesPerView={4.5}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
      >
        {counters.map((counter, index) => (
          <SwiperSlide key={index} className="col-lg-3 col-sm-6">
            <div
              className="counter-block-one mt-40 text-center"
              data-aos="fade-up"
              data-aos-delay={`${100 * index}`}
            >
              <div className="icon-bg">
                <div className="icon-img d-flex justify-content-center">
                  <Image
                    src={counter.logo}
                    alt="shape"
                    className="lazy-img"
                    width={99}
                    height={99}
                  />
                </div>
                <div className="icon-title text-uppercase fs-18 tx-dark mt-35 lg-mt-30">
                  {counter.title}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Counter;
