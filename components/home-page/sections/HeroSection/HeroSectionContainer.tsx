import HeroSection from "./HeroSection";

const HeroSectionContainer = () => {
  const images = [
    {
      src: "/images/shape/shape_56.svg",
      alt: "media",
      className: "lazy-img shapes shape-one",
    },
    {
      src: "/images/shape/shape_57.svg",
      alt: "media",
      className: "lazy-img shapes shape-two",
    },
    {
      src: "/images/shape/shape_58.svg",
      alt: "media",
      className: "lazy-img shapes shape-three",
    },
    {
      src: "/images/shape/shape_59.svg",
      alt: "media",
      className: "lazy-img shapes shape-four",
    },
  ];

  return <HeroSection images={images} />;
};

export default HeroSectionContainer;
