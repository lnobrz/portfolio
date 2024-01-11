import Block from "./Block";

const BlockContainer = () => {
  const blocks = [
    {
      iconSrc: "/images/icon/icon_39.svg",
      bgColor: "#EBF8F8",
      title: "Product & Brand Designer",
    },
    {
      iconSrc: "/images/icon/icon_40.svg",
      bgColor: "#FFF8F8",
      title: "Coding & Programming",
    },
    {
      iconSrc: "/images/icon/icon_41.svg",
      bgColor: "#F3F5FF",
      title: "Online Marketing",
    },
  ];
  return <Block blocks={blocks} />;
};

export default BlockContainer;
