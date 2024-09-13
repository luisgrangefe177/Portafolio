import React from "react";

const SectionComponent = ({ children, id, className }) => {
  return (
    <section
      id={id} // Aquí se asigna el id correctamente
      className={className}
    >
      {children}
    </section>
  );
};

export default SectionComponent;
