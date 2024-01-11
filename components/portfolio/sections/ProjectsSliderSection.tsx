import Image from "next/image";

const ProjectsSliderSection = () => {
  return (
    <>
      <div className="row gx-xxl-5">
        <div className="col-sm-6">
          <div
            className="arrow-block position-relative zn2 mt-20"
            data-aos="fade-right"
          >
            <Image
              src="/images/media/img_92.jpg"
              alt="media"
              className="lazy-img w-100"
              width={920}
              height={600}
            />
            <div className="hover-content tran3s position-absolute d-flex flex-column align-items-center justify-content-center">
              <div className="text-white fw-500 pg-title">Prev Project</div>
              <a href="#" className="arrow rounded-circle text-center tran3s">
                <i className="bi bi-arrow-left" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div
            className="arrow-block position-relative zn2 mt-20"
            data-aos="fade-left"
          >
            <Image
              src="/images/media/img_93.jpg"
              alt="media"
              className="lazy-img w-100"
              width={820}
              height={600}
            />
            <div className="hover-content tran3s position-absolute d-flex flex-column align-items-center justify-content-center">
              <div className="text-white fw-500 pg-title">Next Project</div>
              <a href="#" className="arrow rounded-circle text-center tran3s">
                <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsSliderSection;
