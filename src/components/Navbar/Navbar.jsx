import logo from '../../assets/pokeball.png'
import './Navbar.css'


const Navbar = ({setFilter}) => {

    return <nav>
        <img src={logo} alt="pokeball" id='logo'/>
        <h1>Pokedex</h1>
        <select>
            <option onClick={() => setFilter("all")}>Tous les types</option>
            <option onClick={() => setFilter("plante")}>Plante</option>
       </select>
    </nav>
}

export default Navbar