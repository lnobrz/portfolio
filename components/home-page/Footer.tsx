import Image from "next/image";
import Link from "next/link";
import Social from "./Social";

const Footer = () => {
  return (
    <div className="footer-style-four position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 mb-30 order-lg-0">
            <div className="logo d-flex justify-content-center justify-content-lg-start">
              <Link href="/">
                <Image
                  src="/images/logo/logo_04.png"
                  alt=""
                  width={77}
                  height={24}
                />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 mb-30 d-flex justify-content-center justify-content-lg-end order-lg-3">
            <a
              href="mailto:support@jano.com"
              className="mail d-flex align-items-center"
            >
              <span className="icon d-flex align-items-center justify-content-center rounded-circle">
                <i className="far fa-envelope" />
              </span>
              <span>support@jano.com</span>
            </a>
          </div>
          <div className="col-lg-4 mb-30 order-lg-2">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
