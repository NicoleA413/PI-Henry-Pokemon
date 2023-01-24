const { apiTypes } = require("../controllers/utils");
const { Type } = require("../db");
const { GetPokemons } = require("./GetPokemons");

const GetTypes = async () => {
    const typesCount = await Type.count();

    if (typesCount === 0) {
        const typesArray = await apiTypes()
        typesArray.map((type) => Type.create({
            name: type
        }));
        // console.log(await Type.findAll());
        const typesDB = await Type.findAll();
        
        return typesDB;
    } else {
        const typesList = await Type.findAll();
        return typesList;
    };
};

const GetType = async (type) => {
    const pokemons = await GetPokemons();
    const pokeList = pokemons.filter((poke) => poke.types[0] === type|| poke.types[1] === type);
    if(!pokeList.length) throw Error (`No existe el tipo ${type}`)
    return pokeList;
}

module.exports = { GetTypes, GetType }