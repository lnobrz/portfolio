import Image from "next/image";
import ContactFormContainer from "../ContactForm/ContactFormContainer";
import strings from "@/data/strings";

const ContactSection = () => {
  return (
    <div className="fancy-short-banner-five p-30 mt-110" id="s5">
      <div className="bg-wrapper position-relative pt-180 pb-140 lg-pt-80 lg-pb-80">
        <Image
          src="/images/shape/shape_68.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
          width={20}
          height={20}
        />
        <Image
          src="/images/shape/shape_69.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
          width={20}
          height={20}
        />
        <Image
          src="/images/shape/shape_70.svg"
          alt="shape"
          className="lazy-img shapes shape-three"
          width={20}
          height={20}
        />
        <div className="r-shape-one position-absolute" />
        <div className="container">
          <div
            className="innner-content bg-white position-relative"
            data-aos="fade-up"
          >
            <div className="r-shape-two rounded-circle position-absolute" />
            <div className="row align-items-center">
              <div className="col-lg-5">
                <h2 className="title-xl font-recoleta fw-500 tx-dark">
                  {strings.contactSection.title[0]}
                  <span className="d-inline-block position-relative">
                    {strings.contactSection.title[1]}
                  </span>
                </h2>
                <p className="text-lg mt-35 md-mt-20">
                  {strings.contactSection.subtitle}
                </p>
              </div>
              <div className="col-lg-6 ms-auto">
                <div className="form-style-one md-mt-40">
                  <ContactFormContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
