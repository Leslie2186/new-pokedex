
import './Filtretypes.css'

const Filtretypes = ({setFilter}) => {

    return <div>
        <select>
            <option onClick={() => setFilter("all")}>Tous les types</option>
            <option onClick={() => setFilter("plante")}>Plante</option>

       </select>
    </div>

}


export default Filtretypes