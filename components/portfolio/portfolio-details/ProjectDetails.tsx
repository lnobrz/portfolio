import { Item, ProjectInfo } from "@/data/portfolio";
import strings from "@/data/strings";

const ProjectDetails = ({ details }: { details: ProjectInfo }) => {
  return (
    <>
      {details && (
        <>
          <div className="col-12 mb-35">
            <div className="pt-title fw-bold tx-dark text-uppercase">
              {strings.portfolio.resumeSection.date}
            </div>
            <div className="pt-text">{details.date}</div>
          </div>
          <div className="col-12 mb-35">
            <div className="pt-title fw-bold tx-dark text-uppercase">
              {strings.portfolio.resumeSection.clientName}
            </div>
            <div className="pt-text">{details.clientName}</div>
          </div>
          <div className="col-12 mb-35">
            <div className="pt-title fw-bold tx-dark text-uppercase">
              {strings.portfolio.resumeSection.projectType}
            </div>
            <div className="pt-text">{details.projectType}</div>
          </div>
        </>
      )}
    </>
  );
};

export default ProjectDetails;
