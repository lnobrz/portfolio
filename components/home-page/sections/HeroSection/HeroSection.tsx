import Image from "next/image";
import HeroSubtitleContainer from "./Subtitle/HeroSubtitleContainer";
import strings from "@/data/strings";

type Props = {
  images: { src: string; alt: string; className: string }[];
};

const HeroSection = ({ images }: Props) => {
  return (
    <div className="hero-banner-four text-center position-relative" id="s1">
      <div className="container">
        <Image
          src="/images/media/img_26.jpg"
          alt=""
          className="lazy-img avatar-img m-auto rounded-circle"
          data-aos="fade-up"
          width={90}
          height={90}
        />
        <HeroSubtitleContainer />
        <div className="row">
          <div
            className="col-xxl-11 col-lg-10 col-md-8 m-auto "
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h1 className="hero-heading fw-500 font-recoleta tx-dark mb-65 lg-mb-40">
              {strings.heroSection.title}
            </h1>
          </div>
          <div
            className="col-lg-6 col-md-8 m-auto "
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <p className="text-lg pe-xxl-4 ps-xxl-4 mb-75 lg-mb-50">
              {strings.heroSection.paragraph}
            </p>
          </div>
        </div>
        <a
          href="#s5"
          className="btn-eight"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {strings.heroSection.ctaButton}
        </a>
      </div>
      <div className="fancy-img-block fancy-block-one">
        <div className="r-shape-one position-absolute" />
        <div className="r-shape-two position-absolute rounded-circle" />
        <Image
          src="/images/media/img_27.jpg"
          alt="media"
          className="lazy-img main-img"
          width={369}
          height={671}
        />
      </div>
      <div className="fancy-img-block fancy-block-two">
        <div className="r-shape-three position-absolute rounded-circle" />
        <div className="r-shape-four position-absolute rounded-circle" />
        <Image
          src="/images/media/img_28.jpg"
          alt="media"
          className="lazy-img main-img"
          width={369}
          height={671}
        />
      </div>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          width={20}
          height={20}
          className={image.className}
        />
      ))}
    </div>
  );
};

export default HeroSection;
