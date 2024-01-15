import strings from "@/data/strings";
import React from "react";

const Education = () => {
  return (
    <>
      {strings.educations.map((item, i) => (
        <React.Fragment key={i}>
          <p className="text-lg tx-dark">{item.degree}</p>
          <div className="tx-sp2 text-uppercase">{item.university}</div>
        </React.Fragment>
      ))}
    </>
  );
};

export default Education;
