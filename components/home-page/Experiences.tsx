import strings from "@/data/strings";

const Experiences = () => {
  return (
    <>
      <p className="text-xxl tx-dark mb-75 lg-mb-30">
        {strings.experiencesSection.title}
      </p>
      {strings.experiencesSection.experiences.map((experience) => {
        return (
          <>
            <div className="mb-1 tx-dark tx-sp1">{experience.role}</div>
            <div className="mb-1 fs-20 opacity-50">{experience.company}</div>
            <div className="mb-2 fs-20 opacity-50">{experience.workPeriod}</div>
          </>
        );
      })}
    </>
  );
};

export default Experiences;
