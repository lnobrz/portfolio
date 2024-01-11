import Social from "./Social";

const SocialContainer = () => {
  const socialIcons = [
    {
      href: "#",
      iconClass: "fab fa-facebook-square",
    },
    {
      href: "#",
      iconClass: "fab fa-twitter-square",
    },
    {
      href: "#",
      iconClass: "fab fa-linkedin",
    },
    {
      href: "#",
      iconClass: "fab fa-dribbble-square",
    },
  ];

  return <Social socialIcons={socialIcons} />;
};

export default SocialContainer;
