import Testimonial from "./Testimonial";

const TestimonialContainer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonialData = [
    {
      id: 1,
      name: "Martin Jonas",
      location: "USA",
      rating: 5,
      content:
        "The passage experienced a surgu popularity during the ios when Letraset used it on their lor bonord dry-transfer sheets &amp; again during the sample.",
      color: "#B67DFF",
      icon: "/images/icon/icon_42.svg",
    },
    {
      id: 2,
      name: "Rashed Ka",
      location: "USA",
      rating: 5,
      content:
        "The passage experienced a surgu popularity during the ios when Letraset used it on their lor bonord dry-transfer sheets &amp; again during the sample.",
      color: "#FFBC3A",
      icon: "/images/icon/icon_42.svg",
    },
    {
      id: 3,
      name: "Martin Jonas",
      location: "USA",
      rating: 5,
      content:
        "The passage experienced a surgu popularity during the ios when Letraset used it on their lor bonord dry-transfer sheets &amp; again during the sample.",
      color: "#49E5EF",
      icon: "/images/icon/icon_42.svg",
    },
    {
      id: 4,
      name: "Rashed Ka",
      location: "USA",
      rating: 5,
      content:
        "The passage experienced a surgu popularity during the ios when Letraset used it on their lor bonord dry-transfer sheets &amp; again during the sample.",
      color: "#8F6BF6",
      icon: "/images/icon/icon_42.svg",
    },
  ];

  return <Testimonial settings={settings} testimonialData={testimonialData} />;
};

export default TestimonialContainer;
