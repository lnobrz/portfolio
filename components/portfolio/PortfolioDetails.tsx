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
import HeaderContainer from "@/components/home-page/Header/HeaderContainer";
import { Item } from "@/data/portfolio";
import PortfolioGallery from "./portfolio-details/PortfolioGallery/PortfolioGallery";
import strings from "@/data/strings";
import PortfolioLinks from "./PortfolioLinks";

type Props = {
  portfolio: Item;
  isLoading: boolean;
  length: number;
};

const PortfolioDetails = ({ portfolio, isLoading, length }: Props) => {
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && (
        <>
          <Seo pageTitle="Portfolio Details" />
          <HeaderContainer />
          <PortfolioDetailsTitle
            projectTag={portfolio.tag}
            projectName={portfolio.name}
          />
          <div className="portfolio-details-two pt-70 pb-50 lg-pb-10 md-pt-10">
            <div className="project-desctiption">
              <div className="container">
                <div className="row">
                  <ProjectSlide slide={portfolio.slide} />
                  <ProjectResumeSection details={portfolio.projectInfo} />
                </div>
                <div className="col-xl-9  mt-120 lg-mt-80">
                  <ProjectAboutSection
                    projectName={portfolio.name}
                    content={portfolio.projectInfo.about}
                  />
                  <ProjectDetailsSection
                    title={portfolio.projectInfo.detailsTitle}
                    content={portfolio.projectInfo.details}
                  />
                  <PortfolioGallery images={portfolio.imageGallery} />
                  <ProjectResultSection
                    subtitle={strings.portfolio.detailsSection.subtitle}
                    title={strings.portfolio.resultSection.title}
                    content={portfolio.projectInfo.finalResult}
                  />
                </div>
                <ProjectsSliderSection
                  currentId={portfolio.id}
                  itemsLength={length}
                />
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
