import { Item, ProjectInfo } from "@/data/portfolio";
import ProjectDetails from "../portfolio-details/ProjectDetails";
import strings from "@/data/strings";

const ProjectResumeSection = ({ details }: { details: ProjectInfo }) => {
  return (
    <div className="col-lg-4" data-aos="fade-left">
      <div className="sidebar ms-xl-5">
        <h3 className="mb-20">{strings.portfolio.resumeSection.title}</h3>
        <p className="border-bottom pb-40 mb-35 lg-pb-20">{details.resume}</p>
        <div className="row">
          <ProjectDetails details={details} />
        </div>
      </div>
    </div>
  );
};

export default ProjectResumeSection;
