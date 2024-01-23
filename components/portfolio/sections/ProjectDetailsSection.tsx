import strings from "@/data/strings";

type Props = {
  title: string;
  content: string[];
};

const ProjectDetailsSection = ({ title, content }: Props) => {
  return (
    <>
      <div className="row">
        <div className="col-xl-8">
          <div
            className="title-style-twelve mb-45 pt-75 lg-pt-40 lg-mb-30"
            data-aos="fade-up"
          >
            <div className="sc-title fst-italic position-relative">
              {strings.portfolio.detailsSection.subtitle}
            </div>
            <h2 className="main-title fw-500 tx-dark">{title}</h2>
          </div>
        </div>
      </div>
      {content.map((paragraph, index) => {
        return (
          <p data-aos="fade-up" key={`detail-${index}`}>
            {paragraph}
          </p>
        );
      })}
    </>
  );
};

export default ProjectDetailsSection;
