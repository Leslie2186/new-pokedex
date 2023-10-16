import './SectionCards.css'
import Cards from '../Cards/Cards'

const SectionCards = ({pokemonList, filter}) => {
    console.log(filter);

    return <section className='sectionCards'>

        {pokemonList.filter(pokemon => pokemon.type.toLowerCase() === filter || filter === "all")
            .map(pokemon => <Cards key={pokemon.id} pokemon={pokemon} />)
            
        }
        
    </section>

}

export default SectionCards