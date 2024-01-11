import Education from "./Education";

const EducationContainer = () => {
  const educationItems = [
    {
      degree: "Bachelor Degree of design.",
      university: "University of Boston, USA",
    },
    {
      degree: "UI/UX Design",
      university: "University of Vegas, USA",
    },
  ];

  return <Education items={educationItems} />;
};

export default EducationContainer;
