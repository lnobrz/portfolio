import PortfolioGallery from "./PortfolioGallery";

const PortfolioGalleryContainer = () => {
  const images = [
    {
      src: "/images/media/img_89.jpg",
      width: 460,
      height: 400,
      alt: "media",
    },
    {
      src: "/images/media/img_90.jpg",
      width: 460,
      height: 400,
      alt: "media",
    },
    {
      src: "/images/media/img_91.jpg",
      width: 960,
      height: 510,
      alt: "media",
    },
  ];

  return <PortfolioGallery images={images} />;
};

export default PortfolioGalleryContainer;
