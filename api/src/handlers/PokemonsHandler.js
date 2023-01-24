const { GetPokemons, GetPokemonByName, GetPokemonById } = require ("../controllers/GetPokemons");
const CreatePokemon = require ("../controllers/CreatePokemon");
const DeletePokemon = require ("../controllers/DeletePokemon");
const UpdatePokemon = require ("../controllers/UpdatePokemon");

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
    const {name, hp, attack, defence, speed, height, weight, image, types} = req.body;
    await CreatePokemon(name, hp, attack, defence, speed, height, weight, image, types);
    res.status(201).send("Pokemon creado con éxito");
  } catch (error) {
    res.status(400).json({error: error.message});
  };
};

const UpdatePokemonHandler = async (req, res) => {
  try {
    const {id} = req.params;
    const {name, hp, attack, defence, speed, height, weight, types} = req.body;
    const UpdatedPokemon = await UpdatePokemon(id, name, hp, attack, defence, speed, height, weight, types);
    res.status(200).send(UpdatedPokemon);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

const DeletePokemonHandler = async (req, res) => {
  try {
    const {id} = req.params;
    const newList = await DeletePokemon(id);
    res.status(200).send(newList);
  } catch (error) {
    res.status(400).json({error: error.message});
  };
};

module.exports = { GetPokemonsHandler, PokemonByIdHandler, CreatePokemonHandler, UpdatePokemonHandler, DeletePokemonHandler };