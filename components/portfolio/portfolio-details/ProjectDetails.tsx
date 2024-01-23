import { Item, ProjectInfo } from "@/data/portfolio";

const ProjectDetails = ({ details }: { details: ProjectInfo }) => {
  return (
    <>
      {details && (
        <>
          <div className="col-12 mb-35">
            <div className="pt-title fw-bold tx-dark text-uppercase">Date</div>
            <div className="pt-text">{details.date}</div>
          </div>
          <div className="col-12 mb-35">
            <div className="pt-title fw-bold tx-dark text-uppercase">
              Client Name
            </div>
            <div className="pt-text">{details.clientName}</div>
          </div>
          <div className="col-12 mb-35">
            <div className="pt-title fw-bold tx-dark text-uppercase">
              Project Type
            </div>
            <div className="pt-text">{details.projectType}</div>
          </div>
        </>
      )}
    </>
  );
};

export default ProjectDetails;
