import Image from "next/image";
import { Item } from "@/data/portfolio";

const ProjectSlide = ({ slide }: { slide: Item }) => {
  const images = [slide?.image ?? "", slide?.image ?? "", slide?.image ?? ""];

  return (
    <div className="col-lg-8" data-aos="fade-right">
      <div
        id="gallery-carousel"
        className="carousel slide me-xxl-5 md-mb-40"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <Image
                width={824}
                height={654}
                layout="responsive"
                src={image}
                className="d-block w-100"
                alt="media"
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#gallery-carousel"
          data-bs-slide="prev"
        >
          <i className="bi bi-chevron-left"></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#gallery-carousel"
          data-bs-slide="next"
        >
          <i className="bi bi-chevron-right"></i>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectSlide;
