import React from "react";
import LogoGuitD from "./icon/Github_dark.svg";
import Linkedin from "./icon/linkedin.svg";
import EmailIcon from "./icon/email.svg";
import SectionComponent from "./SectionComponet";
import { Experience } from "./Experience";

export class MainsPorfolio extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <main className="text-white px-4">
          <SectionComponent>
            <h1 className="text-white text-5xl font-bold flex flex-row gap-x-4 pb-4 items-center">
              Hola, soy Luis{" "}
              <a
                className="flex items-center transition md:justify-center md:hover:scale-105"
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
            </h1>
            <h2 className="text-xl opacity-80">
              1 año de Experiencia{" "}
              <span className="text-red-500">
                Analista y desarrollador de sistemas de infromación
              </span>{" "}
              de la ciudad Bogotá, Colombia interesado en el desarrollo web.
            </h2>

            <nav className="flex gap-x-2 mt-8 *:rounded-full *:border *:border-white/10 *:flex *:justify-center *:items-center *:gap-x-2 *:py-1 *:px-4 *:bg-white/5 hover:*:scale-110 *:transition hover:*:bg-white/10">
              <a
                href="https://www.linkedin.com/in/luis-mosquera-desarollo/"
                target="_blank"
              >
                <img src={Linkedin} alt="" className="size-4" />
                Linkedin
              </a>
              <a href="https://github.com/luisgrangefe177" target="_blank">
                <img src={LogoGuitD} alt="" className=" size-4" />
                Github
              </a>
              <a href="mailto:luiscamosquera00@gmail.com">
                <img src={EmailIcon} alt="" className=" size-4" />
                Email
              </a>
            </nav>
          </SectionComponent>
        </main>
        <SectionComponent>
          <Experience />
        </SectionComponent>
      </>
    );
  }
}
