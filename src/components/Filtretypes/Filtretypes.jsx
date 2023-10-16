
import './Filtretypes.css'

const Filtretypes = ({filter, setFilter}) => {

    const modifFilter = (param) => {
        setFilter(filter = param);
    }

    return <div>
       <section id="sectionButtons">
            <button onClick={() => modifFilter("all")}>Tous les types</button>
            <button onClick={() => modifFilter("plante")}>Plante</button>
            <button onClick={() => modifFilter("eau")}>Eau</button>
            <button onClick={() => modifFilter("feu")}>Feu</button>
            <button onClick={() => modifFilter("electrique")}>Electrique</button>
            <button onClick={() => modifFilter("vol")}>Vol</button>
            <button onClick={() => modifFilter("fée")}>Fée</button>
            <button onClick={() => modifFilter("combat")}>Combat</button>
            <button onClick={() => modifFilter("psy")}>Psy</button>
            <button onClick={() => modifFilter("roche")}>Roche</button>
            <button onClick={() => modifFilter("sol")}>Sol</button>
            <button onClick={() => modifFilter("glace")}>Glace</button>
            <button onClick={() => modifFilter("dragon")}>Dragon</button>
       </section>
    </div>

}


export default Filtretypes