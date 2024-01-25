import strings from "@/data/strings";
import React from "react";

const Experiences = () => {
  return (
    <>
      <p className="text-xxl tx-dark mb-75 lg-mb-30">
        {strings.experiencesSection.title}
      </p>
      {strings.experiencesSection.experiences.map((experience, index) => {
        return (
          <React.Fragment key={`experience-${index}`}>
            <div className="mb-1 tx-dark tx-sp1">{experience.role}</div>
            <div className="mb-1 fs-20 opacity-50">{experience.company}</div>
            <div className="mb-2 fs-20 opacity-50">{experience.workPeriod}</div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Experiences;
