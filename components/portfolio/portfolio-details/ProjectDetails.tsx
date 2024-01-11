import { Item } from "@/data/portfolio";

const ProjectDetails = ({ details }: { details: Item }) => {
  return (
    <>
      {details && details.projectInfo && (
        <>
          <div className="col-12 mb-35">
            <div className="pt-title fw-bold tx-dark text-uppercase">Date</div>
            <div className="pt-text">{details.projectInfo.date}</div>
          </div>
          <div className="col-12 mb-35">
            <div className="pt-title fw-bold tx-dark text-uppercase">
              Client Name
            </div>
            <div className="pt-text">{details.projectInfo.clientName}</div>
          </div>
          <div className="col-12 mb-35">
            <div className="pt-title fw-bold tx-dark text-uppercase">
              Project Type
            </div>
            <div className="pt-text">{details.projectInfo.projectType}</div>
          </div>
        </>
      )}
    </>
  );
};

export default ProjectDetails;
