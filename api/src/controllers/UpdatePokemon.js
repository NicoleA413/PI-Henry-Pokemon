const { Pokemon, Type } = require("../db");
const {getDb} = require("./utils")

const UpdatePokemon = async (id, name, hp, attack, defence, speed, height, weight, types) => {
    // const pokeList = await getDb();
    // const pokemon = pokeList.find((poke) => poke.id == id);
    const pokemon = await Pokemon.findByPk(id)
    if(!pokemon) throw Error("No existe un Pokemon con el ID provisto");
    else {
        pokemon.name = name ? name : pokemon.name;
        pokemon.hp = hp ? hp : pokemon.hp;
        pokemon.attack = attack ? attack : pokemon.attack;
        pokemon.defence = defence ? defence : pokemon.defence;
        pokemon.speed = speed ? speed : pokemon.speed;
        pokemon.height = height ? height : pokemon.height;
        pokemon.weight = weight ? weight : pokemon.weight;
        // pokemon.types = types ? types : pokemon.types;
        
        // pokemon.addType(types ? types : pokemon.types)

        // const change = await Pokemon.findByPk(id);
        // await change.destroy();
        await pokemon.save()

        return pokemon
    };
};

module.exports = UpdatePokemon;