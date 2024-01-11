import strings from "@/data/strings";

type Props = {
  skills: {
    name: string;
    bgColor: string;
  }[];
};

const Skills = ({ skills }: Props) => {
  return (
    <ul className="d-flex flex-wrap align-items-center style-none skils-list">
      {skills.map((skill, index) => (
        <li key={index}>
          <span style={{ backgroundColor: skill.bgColor }}>{skill.name}</span>
        </li>
      ))}
      <li>{strings.skillsSection.postSkillsText}</li>
    </ul>
  );
};

export default Skills;
