
import './Filtretypes.css'

const Filtretypes = ({pokemonList, setFilter}) => {

    const list = new Set(pokemonList.map(poke => poke.type)); 
    /*Set() permet de garder une valeur de chaque type uniquement, map() boucle sur le tableau pokemonList et récupère les types, qui sont envoyés dans list*/
    
    /*Le premier button, au clic, modifie "filter" grace à sa fonction "setFilter" et lui attribue la valeur "all"*/
    /*"Array.from(list).map()" permet de boucler sur le tableau des types, récupéré précédemment dans la variable list.*/ 
    /*On ne peut pas faire un map() sur un tableau récupéré par Set directement*/
    /*Je crée un button pour chaque type et une fonction onClick qui modifie le "fiter" grace à la méthode "setFilter" en lui passant le type en cours*/

    return <div>
       <section id="sectionButtons">
            <button onClick={() => setFilter("all")}>Tous les types</button>
            {Array.from(list).map(list => <button key={list} onClick={() => setFilter(`${list}`)}>{list}</button>)}
       </section>
    </div>

}


export default Filtretypes