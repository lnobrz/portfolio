import SocialShare from "./SocialShare";

const SocialShareContainer = () => {
  const socialMedia = [
    {
      name: "Facebook",
      icon: "fab fa-facebook-f",
      url: "#",
    },
    {
      name: "Twitter",
      icon: "fab fa-twitter",
      url: "#",
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin-in",
      url: "#",
    },
  ];

  return <SocialShare socialMedia={socialMedia} />;
};

export default SocialShareContainer;
