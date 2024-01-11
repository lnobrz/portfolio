import Skills from "./Skills";
import strings from "@/data/strings";

const SkillsContainer = () => {
  const skills = [
    { name: strings.skills[0], bgColor: "#FFF8F8" },
    { name: strings.skills[1], bgColor: "#E4FCF9" },
    { name: strings.skills[2], bgColor: "#E5F4FB" },
    { name: strings.skills[3], bgColor: "#FFF9E6" },
    { name: strings.skills[4], bgColor: "#F9EDFF" },
    { name: strings.skills[5], bgColor: "#F0F9E0" },
    { name: strings.skills[6], bgColor: "#FFF0F0" },
  ];

  return <Skills skills={skills} />;
};

export default SkillsContainer;
