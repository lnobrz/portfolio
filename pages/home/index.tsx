import Seo from "../../components/common/Seo";
import ExperienceSectionContainer from "@/components/home-page/sections/ExperienceSection/ExperienceSectionContainer";
import HeroSectionContainer from "@/components/home-page/sections/HeroSection/HeroSectionContainer";
import PortfolioSection from "@/components/home-page/sections/PortfolioSection";
import CurriculumSection from "@/components/home-page/sections/CurriculumSection";
import CounterSection from "@/components/home-page/sections/CounterSection";
import TestimonialsSection from "@/components/home-page/sections/TestimonialsSection";
import Footer from "@/components/home-page/Footer";
import HeaderContainer from "@/components/home-page/Header/HeaderContainer";
import ContactFormContainer from "@/components/home-page/ContactForm/ContactFormContainer";
import ContactSection from "@/components/home-page/sections/ContactSection";

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
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
