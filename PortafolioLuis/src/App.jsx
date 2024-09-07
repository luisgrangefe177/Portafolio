import { useState } from 'react'
import './App.css'
import { HeaderPorfolio } from './components/HeaderPorfolio'
import { MainsPorfolio } from './components/mainPofolio'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderPorfolio />
      <MainsPorfolio />
      
    </>
  )
}

export default App
