import './SectionCards.css'
import Cards from '../Cards/Cards'

const SectionCards = ({pokemonList, filter}) => {
    
    /*Je fait un filter sur mon tableau pour comparer le type du pokémon avec la valeur du "filter"*/
    /* Si c'est égal ou si filter = "all" j'affiche les Cards des pokémons correspondants avec map()*/
    
    return <section className='sectionCards'>

        {pokemonList.filter(pokemon => pokemon.type === filter || filter === "all")
            .map(pokemon => <Cards key={pokemon.id} pokemon={pokemon} />)
            
        }
        
    </section>

}

export default SectionCards