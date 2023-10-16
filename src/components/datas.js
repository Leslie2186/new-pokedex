const pokemonList = [
	{
      id: 1,
      name: "Bulbizzare",
      type: "Plante",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      id: 2,
      name: "Herbizarre",
      type: "Plante",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    },
    {
      id: 3,
      name: "Florizarre",
      type: "Plante",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    },
    {
      id: 4,
      name: "Salamèche",
      type: "Feu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      id: 5,
      name: "Reptincel",
      type: "Feu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    },
    {
      id: 6,
      name: "Dracaufeu",
      type: "Feu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    },
    {
      id: 7,
      name: "Carapuce",
      type: "Eau",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      id: 8,
      name: "Carabaffe",
      type: "Eau",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
    },
    {
      id: 9,
      name: "Tortank",
      type: "Eau",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    },
    {
      id: 10,
      name: "Roucool",
      type: "Vol",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
    },
    {
      id: 11,
      name: "Roucoups",
      type: "Vol",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    },
    {
      id: 12,
      name: "Roucarnage",
      type: "Vol",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
    },
    {
      id: 13,
      name: "Pikachu",
      type: "Electrique",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      id: 14,
      name: "Raichu",
      type: "Electrique",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
    },
    {
      id: 15,
      name: "Rondoudou",
      type: "Fée",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
    },
    {
      id: 16,
      name: "Grodoudou",
      type: "Fée",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
    },
    {
      id: 17,
      name: "Psykokwak",
      type: "Eau",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
    },
    {
      id: 18,
      name: "Akwakwak",
      type: "Eau",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png",
    },
    {
      id: 19,
      name: "Férosinge",
      type: "Combat",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png",
    },
    {
      id: 20,
      name: "Colossinge",
      type: "Combat",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png",
    },
    {
      id: 21,
      name: "Abra",
      type: "Psy",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
    },
    {
      id: 22,
      name: "Kadabra",
      type: "Psy",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png",
    },
    {
      id: 23,
      name: "Alakazam",
      type: "Psy",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
    },
    {
      id: 24,
      name: "Onix",
      type: "Roche",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png",
    },
    {
      id: 25,
      name: "Osselait",
      type: "Sol",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png",
    },
    {
      id: 26,
      name: "Ossatueur",
      type: "Sol",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png",
    },
    {
      id: 27,
      name: "Lokhlass",
      type: "Glace",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png",
    },
    {
      id: 28,
      name: "Ptera",
      type: "Roche",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png",
    },
    {
      id: 29,
      name: "Minidraco",
      type: "Dragon",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png",
    },
    {
      id: 30,
      name: "Draco",
      type: "Dragon",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png",
    },
    {
      id: 31,
      name: "Dracolosse",
      type: "Dragon",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
    },
    {
      id: 32,
      name: "Mewtow",
      type: "Psy",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
    },
    {
      id: 33,
      name: "Mew",
      type: "Psy",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
    },
  ];

  export default pokemonList