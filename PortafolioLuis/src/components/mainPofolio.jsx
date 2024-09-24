import React from "react";
import SectionComponent from "./SectionComponet";
import { Experience } from "./Experience";
import { Proyects } from "./poyects";
import { Footer } from "./footer";
import LuisSobremi from "./img/Luisito.webp";
import LuisInicio from "./img/Luisinicio.webp";

export class MainsPorfolio extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <main className="px-4">
          <SectionComponent className="section py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
            <div className="flex gap-4 mb-4 pb-3 lg:pb-2">
              <img
                className="rounded-full shadow-lg size-16"
                src={LuisInicio}
                alt=""
              />
              <div className="flex-row">
                <h1 className="text-gray-800 dark:text-white text-2xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-2 lg:pb-4 items-center">
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
                    <div className="inline-flex items-center justify-center w-full px-2 py-1 text-sm dark:text-white bg-green-200 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
                      Disponible para trabajar
                    </div>
                  </span>
                </a>
              </div>
            </div>
            <h2 className="text-gray-800 dark:text-white  text-xl lg:text-2xl opacity-80 text-wrap max-w-[700px]">
              <span className="text-red-500">
                Desarrollador Web Full Stack en Bogotá.
              </span>{" "}
              Con un año de experiencia, he trabajado en proyectos que abarcan
              desde el diseño hasta la implementación de soluciones web. Me
              apasiona aprender cada día de programación y de las nuevas
              tecnologías que se ven en el mundo TECH.
            </h2>

            <nav className="flex *flex-wrap gap-4 mt-8 *:rounded-full *:border *:border-white/10 *:border-gray-500 *:flex *:justify-center *:items-center *:gap-x-2 *:py-1 *:px-2 ms:*:py-2 ms:*:px-4 *:text-xs ms:*:text-base *:bg-white/5 hover:*:scale-110 *:transition hover:*:bg-white/10">
              <a
                href="https://www.linkedin.com/in/luis-mosquera-desarollo/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="fill-current text-gray-800 dark:text-white size-3 md:size-4"
                >
                  <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" />
                </svg>
                Linkedin
              </a>
              <a href="https://github.com/luisgrangefe177" target="_blank">
                <svg
                  viewBox="0 0 256 250"
                  className=" fill-current text-gray-800 dark:text-white size-3 md:size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                >
                  <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
                </svg>
                Github
              </a>
            </nav>
          </SectionComponent>

          <SectionComponent
            id="experiencia"
            className="scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl"
          >
            <h2 className="text-3xl font-semibold mb-10 flex gap-x-2 items-center text-gray-800 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase-2 text-gray-800 dark:text-white size-5 md:size-8"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z" />
                <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
              </svg>
              Experinecia laboral
            </h2>
            <Experience />
          </SectionComponent>

          <SectionComponent
            id="proyectos"
            className=" py-20 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl"
          >
            <h2 className="text-3xl font-semibold mb-10 flex gap-x-2 items-center text-gray-800 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-user-code text-gray-800 dark:text-white size-5 md:size-8"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" />
                <path d="M20 21l2 -2l-2 -2" />
                <path d="M17 17l-2 2l2 2" />
              </svg>
              Proyectos
            </h2>
            <Proyects />
          </SectionComponent>
          <SectionComponent
            id="sobremi"
            className="py-14 md:py-5 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl"
          >
            <h1 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-gray-800 dark:text-white undefined">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-user-star text-gray-800 dark:text-white size-5 md:size-8"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h.5" />
                <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
              </svg>
              Sobre mi
            </h1>
            <article className="flex flex-col items-center justify-center gap-5 text-gray-800 dark:text-gray-300 md:flex-row ">
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
        <Footer />
      </>
    );
  }
}
