import Seo from "../common/Seo";
import ProjectSlide from "@/components/portfolio/portfolio-details/ProjectSlide";
import CallToAction from "@/components/portfolio/CallToAction";
import PortfolioDetailsTitle from "./portfolio-details/PortfolioDetailsTitle";
import Footer from "@/components/home-page/Footer";
import ProjectAboutSection from "@/components/portfolio/sections/ProjectAboutSection";
import ProjectResumeSection from "@/components/portfolio/sections/ProjectResumeSection";
import ProjectDetailsSection from "@/components/portfolio/sections/ProjectDetailsSection";
import ProjectResultSection from "@/components/portfolio/sections/ProjectResultSection";
import ProjectsSliderSection from "@/components/portfolio/sections/ProjectsSliderSection";
import PortfolioGalleryContainer from "@/components/portfolio/portfolio-details/PortfolioGallery/PortfolioGalleryContainer";
import HeaderContainer from "@/components/home-page/Header/HeaderContainer";
import { Item } from "@/data/portfolio";

type Props = {
  portfolio: Item;
  isLoading: boolean;
};

const PortfolioDetails = ({ portfolio, isLoading }: Props) => {
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && (
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
      )}
    </>
  );
};

export default PortfolioDetails;
