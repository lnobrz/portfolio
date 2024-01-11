import React from "react";

type Props = {
  items: {
    degree: string;
    university: string;
  }[];
};

const Education = ({ items }: Props) => {
  return (
    <>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <p className="text-lg tx-dark">{item.degree}</p>
          <div className="tx-sp2 text-uppercase">{item.university}</div>
        </React.Fragment>
      ))}
    </>
  );
};

export default Education;
