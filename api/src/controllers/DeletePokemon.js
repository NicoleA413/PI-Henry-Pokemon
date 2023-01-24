const { Pokemon } = require ("../db");
const { GetPokemons } = require ("./GetPokemons");

const DeletePokemon = async (id) => {
    const pokeList = await GetPokemons();
    const pokeId = pokeList.find((poke) => poke.id == id)
    if(!pokeId) throw Error("No existe un Pokemon con el ID provisto")
    else {await Pokemon.destroy({
        where: { id: id },
    })

    return "Pokemon eliminado con éxito";}
}

module.exports = DeletePokemon;