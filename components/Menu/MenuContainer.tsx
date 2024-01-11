import { useState } from "react";
import Menu from "./Menu";

const MenuContainer = () => {
  const navItems = [
    { title: "About me", href: "#s1" },
    { title: "Services", href: "#s2" },
    { title: "Portfolio", href: "#s3" },
    { title: "Skill", href: "#s4" },
    { title: "Contact", href: "#s5" },
  ];

  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index: number) => {
    setActiveLink(index);
  };

  return (
    <Menu
      navItems={navItems}
      activeLink={activeLink}
      clickHandler={handleLinkClick}
    />
  );
};

export default MenuContainer;
