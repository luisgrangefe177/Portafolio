import React from "react";

export const Proyects = () => {
  const proyectos = [
    {
      id: 1,
      title: "Proyecto 1",
      description: "Descripción del proyecto 1",
      link: "#",
      github: "#",
      image: "https://via.placeholder.com/300x200",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    // Agrega más proyectos aquí si lo necesitas
  ];

  return (
    <>
      {proyectos.map(({ id, title, description, image, tags }) => (
        <article key={id}>
          <h1>{title}</h1>
          <p>{description}</p>
          <ul>
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
          <img src={image} alt={`Captura de ${title}`} />
        </article>
      ))}
    </>
  );
};
