import { Item } from "@/data/portfolio";
import ProjectDetails from "../portfolio-details/ProjectDetails";

const ProjectResumeSection = ({ portfolio }: { portfolio: Item }) => {
  return (
    <div className="col-lg-4" data-aos="fade-left">
      <div className="sidebar ms-xl-5">
        <h3 className="mb-20">About</h3>
        <p className="border-bottom pb-40 mb-35 lg-pb-20">
          The Internet advertising famous today behaved lately.
        </p>
        <div className="row">
          <ProjectDetails details={portfolio} />
        </div>
      </div>
    </div>
  );
};

export default ProjectResumeSection;
