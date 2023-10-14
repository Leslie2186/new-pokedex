import logo from '../../assets/pokeball.png'
import './Navbar.css'

const Navbar = () => {

    return <nav>
        <img src={logo} alt="pokeball" id='logo'/>
        <h1>Pokedex</h1>
        <div>Filtre par Types</div>
    </nav>
}

export default Navbar