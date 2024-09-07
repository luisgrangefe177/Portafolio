import React from "react";

export class MainsPorfolio extends React.Component { 
constructor() { 
        super();
    }
    render() { 
        return (
            <>
                <main className="text-white">
                    <section className="w-full lg:w-[740px] mx-auto py-44">
                    <h1 className="text-white text-5xl font-bold flex flex-row gap-x-2 pb-4">Hola soy Luis <div className="flex justify-center items-center"><sapan className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Disponible para trabar</sapan></div></h1>
                    <h2 className="text-xl opacity-70">1 año de Experiencia Analista y desarrollador de sistemas de infromacion de Bogotá, colombia interesado en el desarrollo web </h2>
                    </section>
                </main>
            </>
        );
    }
}