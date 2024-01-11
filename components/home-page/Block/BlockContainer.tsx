import Block from "./Block";
import strings from "@/data/strings";

const BlockContainer = () => {
  const blocks = [
    {
      iconSrc: "/images/icon/computer-icon.svg",
      bgColor: "#EBF8F8",
      title: strings.experienceSection.experienceFields[0],
    },
    {
      iconSrc: "/images/icon/brain-icon.svg",
      bgColor: "#FFF8F8",
      title: strings.experienceSection.experienceFields[1],
    },
    {
      iconSrc: "/images/icon/basket-icon.svg",
      bgColor: "#F3F5FF",
      title: strings.experienceSection.experienceFields[2],
    },
  ];
  return <Block blocks={blocks} />;
};

export default BlockContainer;
