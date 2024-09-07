import React from "react";

export class HeaderPorfolio extends React.Component { 
    constructor() { 
        super();
    }
    render() { 
        return (
            <>
                <header>
                  <h2 className="text-3xl font-bold  text-center p-2 text-red-700 ">Luis Carlos Mosquera</h2>  
                </header>
                <div className="flex justify-center">
                        <nav className=" w-max rounded-full border px-2 py-0.5 dark:text-red-600 dark:border-red-700/90 dark:bg-red-700/25">
                            <ul className=" flex justify-center content-start gap-5 hover:*:text-red-300 hover:*:bg-neutral-900 *:rounded-full *:px-2 *:py-0.5">
                                <li><a href="#">Experiencia</a></li>
                                <li><a href="#">Proyectos</a></li>
                                <li><a href="#">Sobre mi</a></li>
                                <li><a href="#">Contacto</a></li>
                            
                            </ul>
                        </nav>

                    </div>
            </>  
        );
    }    
}