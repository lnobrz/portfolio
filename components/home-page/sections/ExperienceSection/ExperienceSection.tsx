import Image from "next/image";
import Block from "../../Block";

type Props = {
  decorations: {
    id: number;
    src: string;
    classname: string;
  }[];
};

const ExperienceSection = ({ decorations }: Props) => {
  return (
    <>
      <div
        className="fancy-feature-twelve position-relative mt-300 xl-mt-200 md-mt-120"
        id="s2"
      >
        <div className="container">
          <div className="row">
            <div
              className="col-xl-2 col-lg-3 text-center"
              data-aos="fade-right"
            >
              <div className="main-count">
                0<span className="counter">7</span>+
              </div>
              <h2 className="title fw-500 tx-dark">
                Years Experience in field
              </h2>
            </div>
          </div>
          <div className="block-wrapper md-mt-10">
            <div className="row gx-xxl-5">
              <Block />
            </div>
          </div>
        </div>
      </div>
      <div
        className="portfolio-gallery-one position-relative mt-150 pt-100 xl-pt-50 md-mt-80"
        id="s3"
        data-aos="fade-up"
      >
        {decorations.map((decoration) => {
          return (
            <Image
              key={decoration.id}
              src={decoration.src}
              className={`lazy-img shapes ${decoration.classname}`}
              alt="shape media"
              width={20}
              height={20}
            />
          );
        })}
      </div>
    </>
  );
};

export default ExperienceSection;
