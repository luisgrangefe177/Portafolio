import React from "react";
import { Experiencie_items } from "./Experiencie_items";

export class Experience extends React.Component {
  render() {
    const Experiencie = [
      {
        date: "Septiembre",
        title: "Stefanini",
        description: "Trabajae como analista de soporte junior en esta empresa",
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
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
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
