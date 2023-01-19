const axios = require ("axios");
const { Pokemon } = require("../db");

const shorterArray = (array) =>
    array.map((e) => {
        const hp = e.stats[0].base_stat
        const attack = e.stats[1].base_stat
        const defence = e.stats[2].base_stat
        const speed = e.stats[3].base_stat

        const shorter = {
            id: e.id,
            name: e.name,
            hp: hp,
            attack: attack,
            defence: defence,
            speed: speed,
            height: e.height,
            weight: e.weight,
        }

        return shorter
    });


const api = async () => {
    const results = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=40");

    const pokemon = results.data.results.map((poke) => axios.get(poke.url));

    return (await Promise.all(pokemon)).map((poke) => poke.data);
}

const GetPokemons = async () => {
    const apiArray = await api ();
    const apiList = shorterArray(apiArray);
    const dbList = await Pokemon.findAll();
    
    // return(apiArray);
    return [...apiList, ...dbList];
}

module.exports = GetPokemons