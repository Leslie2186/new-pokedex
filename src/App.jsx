/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import { useState } from 'react'
import './App.css'
import './components/datas'
import pokemonList from './components/datas'
import Navbar from './components/Navbar/Navbar'
import SectionCards from './components/SectionCards/SectionCards'
import Filtretypes from './components/Filtretypes/Filtretypes'

function App() {
 let [filter, setFilter] = useState("all");

 console.log(filter);
  return (
      <div>
        <Navbar />

        <Filtretypes filter={filter} setFilter={setFilter}/>

        {(filter === "plante" || filter === "all") ? <SectionCards pokemonList={pokemonList} filter={filter}/> : null }
        {(filter === "eau" || filter === "all") ? <SectionCards pokemonList={pokemonList} filter={filter}/> : null }
        {(filter === "feu" || filter === "all") ? <SectionCards pokemonList={pokemonList} filter={filter}/> : null }
        {(filter === "electrique" || filter === "all") ? <SectionCards pokemonList={pokemonList} filter={filter}/> : null }
        {(filter === "vol" || filter === "all") ? <SectionCards pokemonList={pokemonList} filter={filter}/> : null }
        {(filter === "fée" || filter === "all") ? <SectionCards pokemonList={pokemonList} filter={filter}/> : null }
        {(filter === "combat" || filter === "all") ? <SectionCards pokemonList={pokemonList} filter={filter}/> : null }
        {(filter === "psy" || filter === "all") ? <SectionCards pokemonList={pokemonList} filter={filter}/> : null }
        {(filter === "roche" || filter === "all") ? <SectionCards pokemonList={pokemonList} filter={filter}/> : null }
        {(filter === "sol" || filter === "all") ? <SectionCards pokemonList={pokemonList} filter={filter}/> : null }
        {(filter === "glace" || filter === "all") ? <SectionCards pokemonList={pokemonList} filter={filter}/> : null }
        {(filter === "dragon" || filter === "all") ? <SectionCards pokemonList={pokemonList} filter={filter}/> : null }
      </div>
      
  )
}

export default App
