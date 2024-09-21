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
      className: "bg-[#e9c7b9] text-[#e14e1d]",
      icon: imgHTML,
    },
    Css: {
      name: "CSS",
      className: "bg-[#c0d8e2] text-[#1572b6]",
      icon: iconCss,
    },
    JS: {
      name: "JavaScript",
      className: "bg-[#f0eab7] text-[#323330]",
      icon: iconJS,
    },
    React: {
      name: "React",
      className: "bg-[#7fdff0] text-[#061113]",
      icon: iconReact,
    },
    Bostrap: {
      name: "Bootstrap",
      className: "bg-[#bd98e6] text-[#7e13f8]",
      icon: iconBostrap,
    },
    MSQL: {
      name: "MySQL",
      className: "bg-[#7acee6] text-[#00546b]",
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
      title: "Sistema de Reservas de Hotel",
      description:
        "Este proyecto es una aplicación básica de CRUD diseñada para gestionar reservas de un hotel. Permite a los usuarios realizar reservas y a los administradores iniciar sesión con credenciales seguras. Las contraseñas se cifran antes de ser almacenadas en la base de datos para garantizar la seguridad de la información.",
      link: "https://profound-bunny-69d085.netlify.app/",
      github: "https://github.com/luisgrangefe177/HOTEL-REACT",
      image: Proyect1,
      tags: [
        tagss.HTML,
        tagss.Css,
        tagss.JS,
        tagss.React,
        tagss.Bostrap,
        tagss.MSQL,
        tagss.Nxjs,
      ],
    },
    // Agrega más proyectos aquí si lo necesitas
  ];

  return (
    <>
      {proyectos.map(({ id, title, description, image, tags }) => (
        <div key={id} className="flex flex-col gap-y-16">
          <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0">
            <div className="w-full md:w-1/2">
              <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
                <img
                  className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                  src={image}
                  alt={`Captura de ${title}`}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 md:max-w-lg">
              <h3 className="text-2xl font-bold text-red-500 dark:text-gray-100 mb-2">
                <span className="text-red-500">(CRUD) </span>
                {title}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-400">
                {description}
              </p>
              {/* Contenedor de la animación con el ajuste de overflow */}
              <div className="relative flex overflow-x-hidden">
                {/* Primera lista de tags */}
                <div className="shrink-0 animate-marquee whitespace-nowrap p-2">
                  <ul className="flex gap-x-4 flex-row">
                    {tags.map((tag, index) => (
                      <li key={`tag-${index}`}>
                        <span
                          className={`flex gap-x-2 rounded-full text-xs ${tag.className} py-1 px-2 mb-2`}
                        >
                          <img
                            src={tag.icon}
                            alt={tag.name}
                            className="size-4"
                          />
                          {tag.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Segunda lista de tags (duplicada para la animación infinita) */}
                <div className="shrink-0 justify-around animate-marquee2 whitespace-nowrap p-2">
                  <ul className="flex gap-x-4 flex-row">
                    {tags.map((tag, index) => (
                      <li key={`tag-duplicate-${index}`}>
                        <span
                          className={`flex gap-x-2 rounded-full text-xs ${tag.className} py-1 px-2 mb-2`}
                        >
                          <img
                            src={tag.icon}
                            alt={tag.name}
                            className="size-4"
                          />
                          {tag.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};
