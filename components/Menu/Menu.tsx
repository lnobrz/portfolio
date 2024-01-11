import Image from "next/image";
import Link from "next/link";

type Props = {
  navItems: { title: string; href: string }[];
  clickHandler: (index: number) => void;
  activeLink: number;
};

const Menu = ({ navItems, clickHandler, activeLink }: Props) => {
  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#one-page-nav"
        aria-controls="one-page-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      <div className="collapse navbar-collapse" id="one-page-nav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <Image
                  src="/images/logo/logo_04.png"
                  alt="logo"
                  width={90}
                  height={25}
                />
              </Link>
            </div>
          </li>
          {navItems.map((navItem, i) => (
            <li key={i} className="nav-item">
              <a
                className={`nav-link ${activeLink === i ? "active" : ""}`}
                href={navItem.href}
                onClick={() => clickHandler(i)}
              >
                {navItem.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
