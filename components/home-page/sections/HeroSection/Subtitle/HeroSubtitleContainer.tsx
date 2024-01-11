import strings from "@/data/strings";
import HeroSubtitle from "./HeroSubtitle";

const HeroSubtitleContainer = () => {
  const subtitleStrings = strings.heroSection.subtitle;

  return (
    <HeroSubtitle
      saudation={subtitleStrings.saudation}
      presentation={subtitleStrings.ownersPresentation}
      name={subtitleStrings.ownersName}
    />
  );
};

export default HeroSubtitleContainer;
