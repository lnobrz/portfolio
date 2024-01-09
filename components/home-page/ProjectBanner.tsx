import Image from "next/image";

const ProjectBanner = () => {
  return (
    <div className="img-meta d-inline-block position-relative mt-80">
      <Image
        src="/images/shape/shape_63.svg"
        alt="shape"
        className="lazy-img"
        width={594}
        height={596}
      />
      <div className="text-meta w-100">
        <div className="tm-heading">Catch me</div>
        <h3 className="text-white font-recoleta fw-500">
          <span className="d-block">Any Project? </span>
          <a href="#s5" className="tran3s text-decoration-underline">
            Let’s Talk
          </a>
        </h3>
      </div>
      <div className="shapes shape-one rounded-circle" />
      <div className="shapes shape-two rounded-circle" />
    </div>
  );
};

export default ProjectBanner;
