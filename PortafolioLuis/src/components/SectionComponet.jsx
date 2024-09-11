import React from "react";

const SectionComponent = ({ children }) => {
  return (
    <section className="w-full lg:w-[740px] mx-auto max-w-xl py-44">
      {children}
    </section>
  );
};

export default SectionComponent;
