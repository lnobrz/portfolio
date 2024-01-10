import Awards from "../Awards";
import Education from "../Education";
import ProjectBanner from "../ProjectBanner";
import Skills from "../Skills";
import Tools from "../Tools";

const CurriculumSection = () => {
  return (
    <div
      className="fancy-feature-thirteen position-relative mt-250 mb-150 lg-mt-120 lg-mb-100"
      id="s4"
    >
      <div className="fancy-text">Development</div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div
              className="title-style-five pe-xxl-5 mb-110 lg-mb-70"
              data-aos="fade-right"
            >
              <h2 className="main-title font-recoleta fw-500 tx-dark">
                My
                <span className="d-inline-block position-relative">
                  Expereince
                  <span
                    className="mark-bg"
                    style={{ backgroundColor: "#FFDBDB" }}
                  />
                </span>
                &amp; skills.
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-xxl-5 col-lg-6 "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="block-title fw-500 tx-dark pb-30 lg-pb-10">
              Skills
            </h3>
            <Skills />
          </div>
          <div
            className="col-xl-5 col-lg-6 ms-auto "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="block-title fw-500 tx-dark pb-20 md-mt-50 md-pb-10">
              Award
            </h3>
            <Awards />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6 " data-aos="fade-up">
            <h3 className="block-title fw-500 tx-dark pb-30 mt-150 md-pb-20 md-mt-60">
              Education
            </h3>
            <Education />
          </div>
          <div
            className="col-lg-3 col-sm-6 ps-xl-5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="block-title fw-500 tx-dark pb-30 mt-150 md-pb-20 md-mt-60">
              Tools
            </h3>
            <Tools />
          </div>
          <div
            className="col-lg-6 col-md-7 col-sm-10 m-auto"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <ProjectBanner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumSection;
