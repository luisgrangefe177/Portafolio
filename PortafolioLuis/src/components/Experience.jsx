import React from "react";
import { Experiencie_items } from "./Experiencie_items";

export class Experience extends React.Component {
  render() {
    const Experiencie = [
      {
        date: "Abril 2024 - Septiembre 2024",
        title: "Analista de Sistemas Junior",
        empresa: "Stefanini",
        description:
          "Como Analista de Sistemas Junior, me encargué de analizar y solucionar problemas técnicos de los usuarios. Gestioné usuarios y dispositivos mediante Intune en Azure y utilicé Jira para registrar y resolver casos diarios. Colaboré en la atención de contingencias en Chile, México, Perú y Colombia. También brindé soporte en ciudades como Bogotá, Medellín y Cali.",
      },
      {
        date: "Diciembre 2023 - Abril 2024",
        title: "Servicio técnico de sistemas",
        empresa: "CFS",
        description:
          "Durante mi tiempo en el Servicio Técnico de Sistemas, me desempeñé como técnico de soporte, resolviendo una amplia gama de problemas informáticos. Realicé reparaciones de hardware, restablecí sistemas operativos y solucioné incidencias de software. Además, utilicé Jira para gestionar eficientemente las solicitudes de los usuarios y garantizar la continuidad de los servicios.",
      },
      {
        date: "Abril 2023 - Octubre 2023",
        title: "Analista de gestión de datos",
        empresa: "Mullenlowe",
        description:
          "Como Analista de Gestión de Datos, realicé un análisis profundo de datos de campañas publicitarias en plataformas como Facebook Ads y Google Ads. Utilizando herramientas como Excel, Looker Studio y Power BI, creé dashboards personalizados que permitieron a la empresa evaluar el rendimiento de sus campañas y tomar decisiones más estratégicas.",
      },
    ];
    return (
      <>
        <ol className="relative mt-16">
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
