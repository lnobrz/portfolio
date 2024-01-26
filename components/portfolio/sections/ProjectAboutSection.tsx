import strings from "@/data/strings";

type Props = {
  projectName: string;
  content: string[];
};

const ProjectAboutSection = ({ projectName, content }: Props) => {
  console.log(content);
  return (
    <>
      <div className="title-style-twelve mb-45 lg-mb-30" data-aos="fade-up">
        <div className="sc-title fst-italic position-relative">
          {strings.portfolio.aboutSection.subtitle}
        </div>
        <h2 className="main-title fw-500 tx-dark">
          {strings.portfolio.aboutSection.title} {projectName}
        </h2>
      </div>
      <div></div>
      {content.map((paragraph, index) => {
        return (
          <p data-aos="fade-up" key={`about-${index}`}>
            {paragraph}
          </p>
        );
      })}
    </>
  );
};

export default ProjectAboutSection;
