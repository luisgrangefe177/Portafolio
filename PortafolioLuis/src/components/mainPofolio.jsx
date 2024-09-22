import React from "react";
import LogoGuitD from "./icon/Github_dark.svg";
import Linkedin from "./icon/linkedin.svg";
import EmailIcon from "./icon/email.svg";
import SectionComponent from "./SectionComponet";
import { Experience } from "./Experience";
import tie from "./icon/tie.svg";
import codeUser from "./icon/codeUser.svg";
import { Proyects } from "./poyects";
import { Footer } from "./footer";
import LuisSobremi from "./img/Luisito.webp";
import susermi from "./icon/usermi.svg";
import LuisInicio from "./img/Luisinicio.webp";

export class MainsPorfolio extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <main className="text-white px-4">
          <SectionComponent className="section py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
            <div className="flex gap-4 mb-4 pb-3 lg:pb-2">
              <img
                className="rounded-full shadow-lg size-16"
                src={LuisInicio}
                alt=""
              />
              <div className="flex-row">
                <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-2 lg:pb-4 items-center">
                  Hola, Soy Luis{" "}
                </h1>
                <a
                  className="flex w-44 transition md:hover:scale-110"
                  target="_blank"
                  href="https://www.linkedin.com/in/luis-mosquera-desarollo/"
                >
                  <span className="relative inline-flex overflow-hidden rounded-full p-[1px] w-90 h-8">
                    {" "}
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#b31111_0%,#21554E_50%,#b31111_100%)]"></span>{" "}
                    <div className="inline-flex items-center justify-center w-full px-2 py-1 text-sm text-red-900 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
                      Disponible para trabajar
                    </div>
                  </span>
                </a>
              </div>
            </div>
            <h2 className="text-xl lg:text-2xl opacity-80 text-wrap max-w-[700px]">
              <span className="text-red-500">
                Desarrollador Web Full Stack en Bogotá.
              </span>{" "}
              Con un año de experiencia, he trabajado en proyectos que abarcan
              desde el diseño hasta la implementación de soluciones web. Me
              apasiona aprender cada día de programación y de las nuevas
              tecnologías que se ven en el mundo TECH.
            </h2>

            <nav className="flex *flex-wrap gap-4 mt-8 *:rounded-full *:border *:border-white/10 *:flex *:justify-center *:items-center *:gap-x-2 *:py-1 *:px-2 ms:*:py-2 ms:*:px-4 *:text-xs ms:*:text-base *:bg-white/5 hover:*:scale-110 *:transition hover:*:bg-white/10">
              <a
                href="https://www.linkedin.com/in/luis-mosquera-desarollo/"
                target="_blank"
              >
                <img
                  src={Linkedin}
                  alt="logo de linkedin"
                  className="size-3 md:size-4"
                />
                Linkedin
              </a>
              <a href="https://github.com/luisgrangefe177" target="_blank">
                <img
                  src={LogoGuitD}
                  alt="logo de Github"
                  className="size-3 md:size-4"
                />
                Github
              </a>
              <a href="mailto:luiscamosquera00@gmail.com">
                <img
                  src={EmailIcon}
                  alt="logo de envio de email"
                  className="size-4 md:size-6"
                />
                luiscamosquera00@gmail.com
              </a>
            </nav>
          </SectionComponent>

          <SectionComponent
            id="experiencia"
            className="scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl"
          >
            <h2 className="text-3xl font-semibold mb-10 flex gap-x-2 items-center">
              <img className="size-8" src={tie} alt="" />
              Experinecia laboral
            </h2>
            <Experience />
          </SectionComponent>

          <SectionComponent
            id="proyectos"
            className=" py-20 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl"
          >
            <h2 className="text-3xl font-semibold mb-10 flex gap-x-2 items-center ">
              <img className="size-8" src={codeUser} alt="" />
              Proyectos
            </h2>
            <Proyects />
          </SectionComponent>
          <SectionComponent
            id="sobremi"
            className="py-14 md:py-5 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl"
          >
            <h1 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white undefined">
              <img className="size-8" src={susermi} alt="" />
              Sobre mi
            </h1>
            <article className="flex flex-col items-center justify-center gap-5 text-gray-700 dark:text-gray-300 md:flex-row ">
              <div className="[&>p]:mb-4 [&>p>strong]:text-red-500 dark:[&>p>strong]:text-red-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1">
                <p className="text-lg mb-4 text-pretty">
                  Soy una persona apasionada por el desarrollo de sistemas, con
                  experiencia en análisis y desarrollo de software.
                  <strong> Me especializo en tecnologías full-stack, </strong>
                  trabajando con herramientas como HTML, CSS, JavaScript, React,
                  MySQL, Python y Git.{" "}
                  <strong>
                    Una de mis fortalezas es mi capacidad para aprender
                    rápidamente y adaptarme a nuevas tecnologías.
                  </strong>
                </p>
                <p className="text-lg mb-4 text-pretty">
                  Mi objetivo es seguir aprendiendo y fortaleciendo mis
                  conocimientos en el desarrollo de software.{" "}
                  <strong>
                    Aspiro a convertirme en un experto en la creación de
                    sistemas sostenibles y eficientes{" "}
                  </strong>{" "}
                  que realmente hagan una diferencia en la vida de las personas.
                </p>
                <p className="text-lg mb-4 text-pretty">
                  Tuve la oportunidad de participar en una hackathon donde,
                  junto a mi equipo, desarrollamos un sistema gaming para
                  compensar,{" "}
                  <strong>
                    {" "}
                    lo que nos llevó a obtener el primer lugar en la categoría
                    intermedia y clasificar al nivel Bogotá.{" "}
                  </strong>{" "}
                  Esta experiencia me permitió fortalecer mis habilidades
                  técnicas y de trabajo en equipo.
                </p>
                <p className="text-lg mb-4 text-pretty">
                  Me considero una persona carismática, positiva, humilde y
                  respetuosa. Además,{" "}
                  <strong>
                    {" "}
                    cuento con excelentes habilidades de comunicación y me
                    encanta trabajar en equipo,{" "}
                  </strong>{" "}
                  lo que me ha permitido contribuir de manera efectiva en los
                  proyectos en los que he participado
                </p>
              </div>
              <img
                width="300"
                height="300"
                className="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-6 lg:p-2 lg:w-64 aspect-square rounded-2xl ring-black/70 dark:ring-white/20 "
                src={LuisSobremi}
                alt=""
              />
            </article>
          </SectionComponent>
        </main>
        <Footer></Footer>
      </>
    );
  }
}
