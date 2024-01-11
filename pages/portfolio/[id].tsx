import Seo from "../../components/common/Seo";
import ProjectSlide from "@/components/portfolio/portfolio-details/ProjectSlide";
import CallToAction from "@/components/portfolio/CallToAction";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Item, items } from "@/data/portfolio";
import PortfolioDetailsTitle from "../../components/portfolio/portfolio-details/PortfolioDetailsTitle";
import Footer from "@/components/home-page/Footer";
import ProjectAboutSection from "@/components/portfolio/sections/ProjectAboutSection";
import ProjectResumeSection from "@/components/portfolio/sections/ProjectResumeSection";
import ProjectDetailsSection from "@/components/portfolio/sections/ProjectDetailsSection";
import ProjectResultSection from "@/components/portfolio/sections/ProjectResultSection";
import ProjectsSliderSection from "@/components/portfolio/sections/ProjectsSliderSection";
import PortfolioGalleryContainer from "@/components/portfolio/portfolio-details/PortfolioGallery/PortfolioGalleryContainer";
import HeaderContainer from "@/components/home-page/Header/HeaderContainer";

const DynamicPortfolioDetails = () => {
  const router = useRouter();
  const [portfolio, setPortfolio] = useState<Item | undefined>(undefined);
  const [isLoading, setLoading] = useState(true);
  const id = router.query.id;

  useEffect(() => {
    const numericId = Number(id);

    if (!id || isNaN(numericId)) {
      setLoading(true);
      return;
    }
    const foundPortfolio = items.find((item) => item.id === numericId);
    setPortfolio(foundPortfolio);
    setLoading(false);
  }, [id]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Seo pageTitle="Portfolio Details" />
      <HeaderContainer />
      {portfolio && <PortfolioDetailsTitle portfolio={portfolio} />}
      <div className="portfolio-details-two pt-70 pb-50 lg-pb-10 md-pt-10">
        <div className="project-desctiption">
          <div className="container">
            <div className="row">
              {portfolio && <ProjectSlide slide={portfolio} />}
              {portfolio && <ProjectResumeSection portfolio={portfolio} />}
            </div>
            <div className="col-xl-9  mt-120 lg-mt-80">
              <ProjectAboutSection />
              <ProjectDetailsSection />
              <PortfolioGalleryContainer />
              <ProjectResultSection />
            </div>
            <ProjectsSliderSection />
          </div>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </>
  );
};

export default DynamicPortfolioDetails;
