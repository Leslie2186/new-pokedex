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

 /*Dans le component Filtretypes, je passe la fonction "setFilter", pour modifier le "filter" par rapport aux types dans les datas, qui est renvoyé par le clique sur les boutons*/
 /*Dans le component SectionCards je passe la variable "filter" pour récupérer le type des pokémons à afficher*/

  return (
      <div>
        <Navbar />
        <Filtretypes pokemonList={pokemonList} setFilter={setFilter}/>
        <SectionCards pokemonList={pokemonList} filter={filter}/>
      </div>
      
  )
}

export default App
