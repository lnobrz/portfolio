import Tools from "./Tools";

const ToolsContainer = () => {
  const toolNames = [
    "Adobe Photoshop",
    "Adobe XD",
    "Sketch App",
    "Adobe Premier",
    "Illustrator",
    "WordPress Dev",
    "Figma",
  ];

  return <Tools toolNames={toolNames} />;
};

export default ToolsContainer;
