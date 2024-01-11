import Seo from "../../components/common/Seo";
import Header from "@/components/home-page/Header";
import ExperienceSectionContainer from "@/components/home-page/sections/ExperienceSection/ExperienceSectionContainer";
import HeroSection from "@/components/home-page/sections/HeroSection";
import PortfolioSection from "@/components/home-page/sections/PortfolioSection";
import CurriculumSection from "@/components/home-page/sections/CurriculumSection";
import CounterSection from "@/components/home-page/sections/CounterSection";
import TestimonialsSection from "@/components/home-page/sections/TestimonialsSection";
import Footer from "@/components/home-page/Footer";

const Home = () => {
  return (
    <>
      <Seo pageTitle="Persoanl Portfolio" />
      <Header />
      <HeroSection />
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
