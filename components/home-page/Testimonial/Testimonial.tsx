import React from "react";
import Slider from "react-slick";
import Image from "next/image";

type Props = {
  settings: {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    arrow: boolean;
    responsive: {
      breakpoint: number;
      settings: {
        slidesToShow: number;
      };
    }[];
  };
  testimonialData: {
    id: number;
    name: string;
    location: string;
    rating: number;
    content: string;
    color: string;
    icon: string;
  }[];
};

const Testimonial = ({ settings, testimonialData }: Props) => {
  return (
    <Slider {...settings} arrows={false}>
      {testimonialData.map((testimonial) => (
        <div className="item" key={testimonial.id}>
          <div className="feedback-block-four position-relative">
            <div className="icon rounded-circle d-flex align-items-center justify-content-center">
              <Image src={testimonial.icon} alt="icon" width={24} height={22} />
            </div>
            <p className="tx-dark">{testimonial.content}</p>
            <div className="d-flex align-items-center justify-content-between">
              <h6 className="name fs-20 fw-500 m0 tx-dark">
                {testimonial.name}
                <span className="fw-normal opacity-50 fs-16">
                  {" "}
                  {testimonial.location}
                </span>
              </h6>
              <ul className="style-none d-flex rating">
                {[...Array(testimonial.rating)].map((star, index) => (
                  <li key={index}>
                    <i className="bi bi-star-fill" />
                  </li>
                ))}
              </ul>
            </div>
            <span
              className="ribbon position-absolute"
              style={{ background: testimonial.color }}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonial;
