import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";
import { ImageGallery } from "@/data/portfolio";

const PortfolioGallery = ({ images }: { images: ImageGallery }) => {
  return (
    <div className="row">
      <Gallery>
        {images.map((image, index) => (
          <div
            className={`col-12 ${index === 2 ? "" : "col-sm-6"}`}
            key={index}
          >
            <div className="img-meta mt-30" data-aos="fade-right">
              <Item
                original={image.src}
                thumbnail={image.src}
                width="100%"
                height="100%"
              >
                {({ ref, open }) => (
                  <span
                    role="button"
                    className="fancybox d-block"
                    title="Click for large view"
                    ref={ref}
                    onClick={open}
                  >
                    <Image
                      width={460}
                      height={400}
                      layout="responsive"
                      src={image.src}
                      alt={image.alt}
                      className="lazy-img w-100"
                    />
                  </span>
                )}
              </Item>
            </div>
          </div>
        ))}
      </Gallery>
    </div>
  );
};

export default PortfolioGallery;
