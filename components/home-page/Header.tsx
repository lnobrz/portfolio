import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PortfolioMenu from "../header/PortfolioMenu";

const Header = () => {
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

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-four ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="/" className="d-block">
              <Image
                src="/images/logo/logo_04.png"
                alt="logo"
                width={95}
                height={30}
              />
            </Link>
          </div>
          <PortfolioMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
