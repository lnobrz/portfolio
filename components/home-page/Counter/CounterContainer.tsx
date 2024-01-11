import Counter from "./Counter";

const CounterContainer = () => {
  const counters = [
    {
      logo: "/images/logo/Plogo-14.png",
      title: "Figma",
      percentage: 93,
    },
    {
      logo: "/images/logo/Plogo-15.png",
      title: "Photoshop",
      percentage: 92,
    },
    {
      logo: "/images/logo/Plogo-16.png",
      title: "Sketch",
      percentage: 85,
    },
    {
      logo: "/images/logo/Plogo-17.png",
      title: "XD",
      percentage: 82,
    },
  ];

  return <Counter counters={counters} />;
};

export default CounterContainer;
