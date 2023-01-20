const { Pokemon } = require("../db");

const CreatePokemon = async(name, hp, attack, defence, speed, height, weight) => {
    const newPokemon = Pokemon.create({
        name: name,
        hp: hp,
        attack: attack, 
        defence: defence, 
        speed: speed, 
        height: height, 
        weight: weight,
    });

    return newPokemon;
};

module.exports = CreatePokemon