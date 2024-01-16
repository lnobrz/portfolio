import Counter from "./Counter";

const CounterContainer = () => {
  const counters = [
    {
      logo: "/images/logo/wordpress.svg",
      title: "Wordpress",
    },
    {
      logo: "/images/logo/woocomerce.svg",
      title: "WooComerce",
    },
    {
      logo: "/images/logo/typescript.svg",
      title: "Typescript",
    },
    {
      logo: "/images/logo/react.svg",
      title: "React",
    },
    {
      logo: "/images/logo/next.svg",
      title: "Next.js",
    },
    {
      logo: "/images/logo/node.svg",
      title: "Node.js",
    },
    {
      logo: "/images/logo/nest.svg",
      title: "Nest.js",
    },
    {
      logo: "/images/logo/mongodb.svg",
      title: "MongoDB",
    },
    {
      logo: "/images/logo/mysql.svg",
      title: "MySQL",
    },
    {
      logo: "/images/logo/html.svg",
      title: "HTML",
    },
    {
      logo: "/images/logo/css.svg",
      title: "CSS",
    },
    {
      logo: "/images/logo/sass.svg",
      title: "SASS",
    },
    {
      logo: "/images/logo/styled-components.svg",
      title: "Styled Components",
    },
    {
      logo: "/images/logo/material-ui.svg",
      title: "Material UI",
    },
    {
      logo: "/images/logo/tailwind.svg",
      title: "Tailwind CSS",
    },
    {
      logo: "/images/logo/bootstrap.svg",
      title: "Bootstrap",
    },
    {
      logo: "/images/logo/express.svg",
      title: "Express",
    },
    {
      logo: "/images/logo/figma.svg",
      title: "Figma",
    },
  ];

  return <Counter counters={counters} />;
};

export default CounterContainer;
