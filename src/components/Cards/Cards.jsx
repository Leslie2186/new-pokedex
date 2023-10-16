import { useState } from 'react';
import './Cards.css'

const Cards = ({pokemon}) => {
    let [isFavorite, setIsFavorite] = useState(false);

    function handleClickFavorite() {
        setIsFavorite(!isFavorite);
    }
    
    let backColor = "lightgrey";

    if(pokemon.type === "Plante") backColor = "lightseagreen";
    if(pokemon.type === "Eau") backColor = "skyblue";
    if(pokemon.type === "Feu") backColor = "maroon";
    if(pokemon.type === "Electrique") backColor = "gold";
    if(pokemon.type === "Vol") backColor = "steelblue";
    if(pokemon.type === "Fée") backColor = "lightpink";
    if(pokemon.type === "Combat") backColor = "lightsalmon";
    if(pokemon.type === "Psy") backColor = "lightcoral";
    if(pokemon.type === "Roche") backColor = "slategray";
    if(pokemon.type === "Sol") backColor = "sienna";
    if(pokemon.type === "Glace") backColor = "lightcyan";
    if(pokemon.type === "Dragon") backColor = "slateblue";

   
    


    return <div className="card" style={{backgroundColor:backColor}}>
        <div id="containImg"><img src={pokemon.imgSrc} alt={pokemon.name} className='imgPokemon'/></div>
        <div className="infoPokemon">
            <h2>{pokemon.name}</h2>
            <div id="containType"><h3>Type : {pokemon.type}</h3><div className={pokemon.type}></div></div>
            <div
                id="favorite"
                className={isFavorite ? 'isFavorite' : 'notFavorite'}
                onClick={handleClickFavorite}
            />
        </div>
    </div>
        

   


}

export default Cards