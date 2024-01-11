import Skills from "./Skills";

const SkillsContainer = () => {
  const skills = [
    { name: "Great Interface", bgColor: "#FFF8F8" },
    { name: "Experienced", bgColor: "#E4FCF9" },
    { name: "Low Price", bgColor: "#E5F4FB" },
    { name: "Customizable", bgColor: "#FFF9E6" },
    { name: "Marketing", bgColor: "#F9EDFF" },
    { name: "Great Support", bgColor: "#F0F9E0" },
    { name: "Safe", bgColor: "#FFF0F0" },
  ];

  return <Skills skills={skills} />;
};

export default SkillsContainer;
