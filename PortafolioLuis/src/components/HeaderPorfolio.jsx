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
                        <nav className="flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center">
                            <ul className=" *:relative flex justify-center content-start gap-2 transition hover:*:text-red-600 *:rounded-full *:px-2 *:py-2">
                                <li><a href="#">Experiencia</a></li>
                                <li><a href="#">Proyectos</a></li>
                                <li><a href="#">Sobre mí</a></li>
                                <li><a href="#">Contacto</a></li>
                            
                            </ul>
                        </nav>

                    </div>
                </header>
            </>  
        );
    }    
}