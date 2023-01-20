const { GetPokemons, GetPokemonByName, GetPokemonById } = require ("../controllers/GetPokemons")
const CreatePokemon = require ("../controllers/CreatePokemon")

const GetPokemonsHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const pokeList = name ? await GetPokemonByName(name) : await GetPokemons();
      
    res.status(200).send( pokeList );  
  } catch (error) {
      res.status(400).json({error: error.message});
  };
};

const PokemonByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const pokeId = await GetPokemonById(id)
    res.status(200).send(pokeId)
  } catch (error) {
    res.status(400).json({error: error.message});
  };
};

const CreatePokemonHandler = async (req, res) => {
  try {
    const {name, hp, attack, defence, speed, height, weight} = req.body;
    const newPokemon = await CreatePokemon(name, hp, attack, defence, speed, height, weight);
    res.status(201).send(newPokemon);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { GetPokemonsHandler, PokemonByIdHandler, CreatePokemonHandler }