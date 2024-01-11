import Link from "next/link";
import Image from "next/image";
import MenuContainer from "../../Menu/MenuContainer";

type Props = {
  navBar: boolean;
};

const Header = ({ navBar }: Props) => {
  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-four ${
        navBar ? "fixed" : ""
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
          <MenuContainer />
        </div>
      </div>
    </header>
  );
};

export default Header;
