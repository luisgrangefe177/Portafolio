import React from "react";
import Proyect1 from "../components/img/proyect1.webp";
import imgHTML from "../components/icon/html.svg";
import iconJS from "../components/icon/JavaScript.svg";
import iconCss from "../components/icon/Css.svg";
import iconReact from "../components/icon/React.svg";
import iconBostrap from "../components/icon/Bootstrap.svg";
import iconMSQL from "../components/icon/MSQL.svg";
import iconNext from "../components/icon/next.svg";

export const Proyects = () => {
  const tagss = {
    HTML: {
      name: "HTML",
      className: "bg-black text-white",
      icon: imgHTML,
    },
    JS: {
      name: "JavaScript",
      className: "bg-black text-white",
      icon: iconJS,
    },
    Css: {
      name: "CSS",
      className: "bg-black text-white",
      icon: iconCss,
    },
    React: {
      name: "React",
      className: "bg-black text-white",
      icon: iconReact,
    },
    Bostrap: {
      name: "Bootstrap",
      className: "bg-black text-white",
      icon: iconBostrap,
    },
    MSQL: {
      name: "MySQL",
      className: "bg-black text-white",
      icon: iconMSQL,
    },
    Nxjs: {
      name: "Next.js",
      className: "bg-black text-white",
      icon: iconNext,
    },
  };
  const proyectos = [
    {
      id: 1,
      title: "Sistema de Reservas de Hotel (CRUD)",
      description:
        "Este proyecto es una aplicación básica de CRUD diseñada para gestionar reservas de un hotel. Permite a los usuarios realizar reservas y a los administradores iniciar sesión con credenciales seguras. Las contraseñas se cifran antes de ser almacenadas en la base de datos para garantizar la seguridad de la información.",
      link: "https://profound-bunny-69d085.netlify.app/",
      github: "https://github.com/luisgrangefe177/HOTEL-REACT",
      image: Proyect1,
      tags: [tagss.HTML, tagss.JS, tagss.React],
    },
    // Agrega más proyectos aquí si lo necesitas
  ];

  return (
    <>
      {proyectos.map(({ id, title, description, image, tags }) => (
        <article key={id}>
          <h3 className="text-2xl font-semibold text-red-500 mb-2">{title}</h3>
          <p className="text-lg mb-4 text-pretty">{description}</p>
          <ul className="flex gap-x-4 flex-row">
            {tags.map((tag, index) => (
              <li key={index}>
                <span
                  className={`flex gap-x-2 rounded-full text-xs ${tag.className} py-1 px-2 mb-2`}
                >
                  <img src={tag.icon} alt={tag.name} className="size-4" />
                  {tag.name}
                </span>
              </li>
            ))}
          </ul>
          <img
            className="rounded  shadow-2xl shadow-white/10"
            src={image}
            alt={`Captura de ${title}`}
          />
        </article>
      ))}
    </>
  );
};
