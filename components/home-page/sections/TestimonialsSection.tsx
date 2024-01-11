import TestimonialContainer from "../Testimonial/TestimonialContainer";

const TestimonialsSection = () => {
  return (
    <div className="feedback-section-four position-relative mt-150 lg-mt-120">
      <div className="container">
        <div
          className="title-style-five text-center mb-75 lg-mb-40"
          data-aos="fade-up"
        >
          <div className="sc-title text-uppercase">TESTIMONIALS</div>
          <h2 className="main-title font-recoleta fw-500 tx-dark">
            Client
            <span className="d-inline-block position-relative">
              Feedback
              <span
                className="mark-bg"
                style={{ backgroundColor: "#FFE9B0" }}
              />
            </span>
          </h2>
        </div>
      </div>
      <div className="slider-wrapper p-30">
        <div className="feedback_slider_four">
          <TestimonialContainer />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
