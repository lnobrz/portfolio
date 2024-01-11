import { useEffect, useState } from "react";
import Header from "./Header";

const HeaderContainer = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY <= 10) {
      setNavbar(false);
      return;
    }
    setNavbar(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return <Header navBar={navbar} />;
};

export default HeaderContainer;
