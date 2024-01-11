import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "../styles/index.scss";
import ScrollTopContainer from "@/components/common/ScrollTop/ScrollTopContainer";
import { AppProps } from "next/app";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="main-page-wrapper">
      <Component {...pageProps} />
      <ScrollTopContainer />
    </div>
  );
}
