import { useState } from "react";
import "./App.css";
import { HeaderPorfolio } from "./components/HeaderPorfolio";
import { MainsPorfolio } from "./components/mainPofolio";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <body className="relative text-black dark:text-white">
        <div
          className=" top-0 bottom-0 z-[-2] min-h-screen w-full bg-red-600 dark:bg-neutral-900
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        >
          <HeaderPorfolio />
          <MainsPorfolio />
        </div>
      </body>
    </>
  );
}

export default App;
