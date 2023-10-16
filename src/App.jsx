/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import { useState } from 'react'
import './App.css'
import './components/datas'
import pokemonList from './components/datas'
import Navbar from './components/Navbar/Navbar'
import SectionCards from './components/SectionCards/SectionCards'

function App() {
 let [filter, setFilter] = useState("all");

 console.log(filter);
  return (
      <div>
        <Navbar filter={filter} setFilter={setFilter}/>
        {(filter === "plante" || filter === "all") ? <SectionCards pokemonList={pokemonList} filter={filter}/> : null }
      </div>
      
  )
}

export default App
