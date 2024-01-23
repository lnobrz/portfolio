type Props = {
  title: string;
  subtitle: string;
  content: string[];
};

const ProjectResultSection = ({ title, subtitle, content }: Props) => {
  return (
    <>
      <div
        className="title-style-twelve mb-45 mt-120 lg-mb-30 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="sc-title fst-italic position-relative">{subtitle}</div>
        <h2 className="main-title fw-500 tx-dark">{title}</h2>
      </div>
      {content.map((paragraph, index) => {
        return (
          <p data-aos="fade-up" key={`result-${index}`}>
            {paragraph}
          </p>
        );
      })}
    </>
  );
};

export default ProjectResultSection;
