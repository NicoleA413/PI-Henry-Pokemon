const { Pokemon, Type } = require("../db");
const { GetTypes } = require("../controllers/GetTypes");

const CreatePokemon = async(name, hp, attack, defence, speed, height, weight, types) => {
    if (name && types.length) {
        const createPokemon = await Pokemon.create({
          name,
          hp,
          attack,
          defence,
          speed,
          height,
          weight,
        });

        await GetTypes()

        const typeDb = await Type.findAll({
          where: { name: types },
        });
  
        createPokemon.addType(typeDb);
    } else {
        throw Error("Faltan datos necesarios para crear el Pokemon")
    }
};

module.exports = CreatePokemon