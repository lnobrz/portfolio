import Image from "next/image";
import Counter from "../Counter";

const CounterSection = () => {
  return (
    <>
      <div className="p-30">
        <div className="counter-section-one position-relative pt-80 pb-100 lg-pt-50 lg-pb-60">
          <Image
            src="/images/shape/shape_64.svg"
            alt="shape"
            className="lazy-img shapes shape-one"
            width={20}
            height={20}
          />
          <Image
            src="/images/shape/shape_65.svg"
            alt="shape"
            className="lazy-img shapes shape-two"
            width={20}
            height={20}
          />
          <Image
            src="/images/shape/shape_66.svg"
            alt="shape"
            className="lazy-img shapes shape-three"
            width={20}
            height={20}
          />
          <Image
            src="/images/shape/shape_67.svg"
            alt="shape"
            className="lazy-img shapes shape-four"
            width={20}
            height={20}
          />
          <div className="container">
            <div className="row">
              <Counter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterSection;
