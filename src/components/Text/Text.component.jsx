import React from "react";

const P = () => {
  return <div>Text</div>;
};

const Page = () => {
  return <div>Text</div>;
};

const PageHeading = ({ text }) => {
  return (
    <h1 className="py-5 my-auto text-3xl font-bold text-left text-white md:pb-0 md:text-left">
      {text}
    </h1>
  );
};

const Heading = () => {
  return <div>Text</div>;
};

const SubHeading = () => {
  return <div>Text</div>;
};

const Small = () => {
  return <div>Text</div>;
};

const Text = {
  P,
  Page,
  PageHeading,
  Heading,
  SubHeading,
  Small,
};

export default Text;
