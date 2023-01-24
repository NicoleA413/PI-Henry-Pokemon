const axios = require ("axios");
const { Pokemon, Type } = require("../db");

const apiTypes = async () => {
    const results = await axios.get("https://pokeapi.co/api/v2/type");
    const types = results.data.results.map((type) => (type.name));
    return types
}

const api = async () => {
    const results = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=40");

    const pokemon = results.data.results.map((poke) => axios.get(poke.url));

    return (await Promise.all(pokemon)).map((poke) => poke.data);
}

const shorterArray = (array) =>
    array.map((e) => {
        return {
            id: e.id,
            name: e.name,
            hp: e.stats[0].base_stat,
            attack: e.stats[1].base_stat,
            defence: e.stats[2].base_stat,
            speed: e.stats[5].base_stat,
            height: e.height,
            weight: e.weight,
            types: e.types.map((t) => t.type.name),
        };
    });

const getDb = async() => {
    const allDb = await Pokemon.findAll({ 
        include: {
            model: Type,
            attributes: ["name"],
            through: {
            attributes: [],
            },
        }, 
    });

    const pokeArray = allDb.map((poke) => {
        const { types } = poke;
        const pokeData = {
          ...poke.dataValues,
          types: types.map((type) => type.name),
        };
        return pokeData;
      });
      return pokeArray;
}



module.exports = { apiTypes , api, shorterArray, getDb };