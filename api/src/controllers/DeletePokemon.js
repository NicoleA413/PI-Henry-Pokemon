const { Pokemon } = require ("../db");

const DeletePokemon = async (id) => {
    const pokeId = await Pokemon.findByPk(id);
    if(!pokeId) throw Error("No existe un Pokemon con el ID provisto");
    else {
        await pokeId.destroy()
        return "Pokemon eliminado con éxito"
    };
};

module.exports = DeletePokemon;