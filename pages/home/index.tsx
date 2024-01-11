import Seo from "../../components/common/Seo";
import Header from "@/components/home-page/Header/Header";
import ExperienceSectionContainer from "@/components/home-page/sections/ExperienceSection/ExperienceSectionContainer";
import HeroSectionContainer from "@/components/home-page/sections/HeroSection/HeroSectionContainer";
import PortfolioSection from "@/components/home-page/sections/PortfolioSection";
import CurriculumSection from "@/components/home-page/sections/CurriculumSection";
import CounterSection from "@/components/home-page/sections/CounterSection";
import TestimonialsSection from "@/components/home-page/sections/TestimonialsSection";
import Footer from "@/components/home-page/Footer";
import HeaderContainer from "@/components/home-page/Header/HeaderContainer";

const Home = () => {
  return (
    <>
      <Seo pageTitle="Persoanl Portfolio" />
      <HeaderContainer />
      <HeroSectionContainer />
      <ExperienceSectionContainer />
      <PortfolioSection />
      <CurriculumSection />
      <CounterSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
};

export default Home;
