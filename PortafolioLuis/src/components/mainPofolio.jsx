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

export class MainsPorfolio extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <main className="text-white px-4">
          <SectionComponent className="section py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl">
            <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10 items-center">
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
            <h2 className="text-xl lg:text-2xl opacity-80 text-wrap max-w-[700px]">
              1 año de Experiencia{" "}
              <span className="text-red-500">
                Analista y desarrollador de sistemas de infromación
              </span>{" "}
              de la ciudad Bogotá, Colombia interesado en el desarrollo web.
            </h2>

            <nav className="flex *flex-wrap gap-4 mt-8 *:rounded-full *:border *:border-white/10 *:flex *:justify-center *:items-center *:gap-x-2 *:py-1 *:px-2 ms:*:py-2 ms:*:px-4 *:text-xs ms:*:text-base *:bg-white/5 hover:*:scale-110 *:transition hover:*:bg-white/10">
              <a
                href="https://www.linkedin.com/in/luis-mosquera-desarollo/"
                target="_blank"
              >
                <img src={Linkedin} alt="" className="size-3 md:size-4" />
                Linkedin
              </a>
              <a href="https://github.com/luisgrangefe177" target="_blank">
                <img src={LogoGuitD} alt="" className=" size-3 md:size-4" />
                Github
              </a>
              <a href="mailto:luiscamosquera00@gmail.com">
                <img src={EmailIcon} alt="" className="size-4 md:size-6" />
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
            className="scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl"
          >
            <h2 className="text-3xl font-semibold mb-10 flex gap-x-2 items-center">
              <img className="size-8" src={codeUser} alt="" />
              Proyectos
            </h2>
            <Proyects />
          </SectionComponent>
          <SectionComponent
            id="sobremi"
            className="py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl"
          >
            <h1 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white undefined">
              Sobre mi
            </h1>
            <article className="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row ">
              <div className="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1">
                <p className="text-lg mb-4 text-pretty">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Magnam iure, id accusamus at, impedit cumque quidem omnis
                  delectus sint recusandae aperiam dignissimos nihil dolore
                  fugit quaerat voluptatibus quasi numquam in?
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aspernatur impedit distinctio dolores, ipsam libero modi
                  minima consequuntur quod reprehenderit iure tenetur placeat
                  atque maxime asperiores! Quam tenetur quo ad possimus!
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Similique magnam iure nam quod quos nobis adipisci dolorum
                  quas vel provident unde incidunt exercitationem voluptas vero
                  tenetur mollitia, ipsam distinctio tempore.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Consequuntur magni similique doloremque officiis dolorum.
                  Libero quisquam officiis illum voluptates deleniti laborum ad
                  asperiores dolorem in a porro, eum velit! Temporibus!
                </p>
              </div>
              <img
                width="200"
                height="200"
                className="order-1 object-cover w-60 h-full p-1 md:order-2 lg:p-2  "
                src={LuisSobremi}
                alt=""
                srcSet=""
              />
            </article>
          </SectionComponent>
        </main>
        <Footer></Footer>
      </>
    );
  }
}
