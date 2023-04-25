import React from "react";

const PageHeading = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-between py-3 md:flex-row md:items-center md:grid md:grid-rows md:grid-flow-col md:justify-items-around">
      {children}
    </div>
  );
};

const Section = {
  PageHeading,
};

export default Section;
