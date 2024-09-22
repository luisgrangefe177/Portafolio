import React from "react";

export class HeaderPorfolio extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
          <div className="flex justify-center">
            <nav className="animacionScroll flex backdrop-blur-sm sticky top-0 px-3 text-xs lg:text-base font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center">
              <ul className=" *:relative flex justify-center content-start gap-2 transition hover:*:text-red-600 *:rounded-full *:px-2 *:py-2">
                <li>
                  <a href="#experiencia">Experiencia</a>
                </li>
                <li>
                  <a href="#proyectos">Proyectos</a>
                </li>
                <li>
                  <a href="#sobremi">Sobre mí</a>
                </li>
                <li>
                  <a href="#contactame">Contactar</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </>
    );
  }
}
