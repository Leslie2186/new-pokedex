import './SectionCards.css'
import Cards from '../Cards/Cards'

const SectionCards = ({pokemonList}) => {

    return <section className='sectionCards'>

        {pokemonList.map(pokemon => <Cards key={pokemon.id} pokemon={pokemon} />)}
        
    </section>

}

export default SectionCards