import React from "react";
import { Experiencie_items } from "./Experiencie_items";

export class Experience extends React.Component {
  render() {
    const Experiencie = [
      {
        date: "Septiembre 2024",
        title: "Stefanini - Analista de Sistemas Junior",
        description:
          "Como Analista de Sistemas Junior, me encargué de analizar y solucionar problemas técnicos de los usuarios. Gestioné usuarios y dispositivos mediante Intune en Azure y utilicé Jira para registrar y resolver casos diarios. Colaboré en la atención de contingencias en Chile, México, Perú y Colombia. También brindé soporte en ciudades como Bogotá, Medellín y Cali.",
        link: "#",
      },
      {
        date: "abril",
        title: "CFS",
        description: "Trabajae como analista de soporte junior en esta empresa",
      },
      {
        date: "octubre",
        title: "Mullenlowe",
        description: "Trabajae como analista de soporte junior en esta empresa",
      },
    ];
    return (
      <>
        <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-4">
          {Experiencie.map((experiencie) => (
            <li className="mb-10 ms-4" key={experiencie.id}>
              <Experiencie_items {...experiencie} />
            </li>
          ))}
        </ol>
      </>
    );
  }
}
