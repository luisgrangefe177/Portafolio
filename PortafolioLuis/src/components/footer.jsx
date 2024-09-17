import React from "react";

export class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="bg-gray-800/10 rounded-lg shadow  mx-auto">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-white/90 sm:text-center ">
              © 2024{" "}
              <a
                href="mailto:luiscamosquera00@gmail.com"
                className="hover:underline"
              >
                Luis Carlos Mosquera
              </a>
              . Casi todos los derechos reservados y inpirado en Midudev.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white/90 sm:mt-0">
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/lucho_silver/"
                  className="hover:underline me-4 md:me-6"
                >
                  instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:luiscamosquera00@gmail.com"
                  className="hover:underline"
                >
                  Contactar
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </>
    );
  }
}
