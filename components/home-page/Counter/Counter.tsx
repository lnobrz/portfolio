import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Image from "next/image";

type Props = {
  counters: {
    logo: string;
    title: string;
    percentage: number;
  }[];
};

const Counter = ({ counters }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <>
      {counters.map((counter, index) => (
        <div key={index} className="col-lg-3 col-sm-6">
          <div
            className="counter-block-one mt-40 text-center"
            ref={ref}
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
            <div className="main-count font-recoleta fw-light tx-dark mt-25 lg-mt-20">
              {inView ? (
                <CountUp end={counter.percentage} suffix="%" />
              ) : (
                <span>0%</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Counter;
