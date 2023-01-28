const { Pokemon, Type } = require("../db");
const { GetTypes } = require("../controllers/GetTypes");

const CreatePokemon = async(name, hp, attack, defence, speed, height, weight, image, types) => {

  let imageUrl = "";

  if (image) {
    imageUrl = image;
  } else {
    imageUrl =
   "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png";
  }
  if (name && types) {
   const createPokemon = await Pokemon.create({
    name,
    hp,
    attack,
    defence,
    speed,
    height,
    weight,
    image: imageUrl,
  });

    await GetTypes();

    const typeDb = await Type.findAll({
      where: { name: types },
    });
  
    createPokemon.addType(typeDb);
  } else {
    throw Error("Faltan datos necesarios para crear el Pokemon");
  };
};

module.exports = CreatePokemon