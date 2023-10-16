
import './Filtretypes.css'

const Filtretypes = ({filter, setFilter}) => {

    return <div>
        <select>
            <option onClick={() => setFilter({filter} = "all")}>Tous les types</option>
            <option onClick={() => setFilter({filter} = "plante")}>Plante</option>

       </select>
    </div>

}


export default Filtretypes