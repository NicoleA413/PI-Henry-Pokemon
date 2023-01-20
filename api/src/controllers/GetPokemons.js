const { Pokemon } = require("../db");
const {api, shorterArray } = require("./utils")

const GetPokemons = async () => {
    const apiArray = await api ();
    const apiList = shorterArray(apiArray);
    const dbList = await Pokemon.findAll();
    
    // return(apiArray);
    return [...apiList, ...dbList];
}

const GetPokemonByName = async (name) => {
    const pokeByName = (await GetPokemons()).find((poke) => poke.name === name);
    if(!pokeByName) throw Error (`No existe un Pokemon llamado ${name}`)
    return pokeByName;
};

const GetPokemonById = async (id) => {
    const pokeById = (await GetPokemons()).find((poke) => poke.id == id);
    if (!pokeById) throw Error (`No existe un Pokemon con el id ${id}`)
    return pokeById;
};

module.exports = { GetPokemons, GetPokemonByName, GetPokemonById };