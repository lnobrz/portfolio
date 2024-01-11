import ExperienceSection from "./ExperienceSection";

const ExperienceSectionContainer = () => {
  const decorations = [
    {
      id: 1,
      src: "/images/shape/shape_60.svg",
      classname: "shape-one",
    },
    {
      id: 2,
      src: "/images/shape/shape_61.svg",
      classname: "shape-two",
    },
    {
      id: 3,
      src: "/images/shape/shape_62.svg",
      classname: "shape-three",
    },
  ];

  return <ExperienceSection decorations={decorations} />;
};

export default ExperienceSectionContainer;
