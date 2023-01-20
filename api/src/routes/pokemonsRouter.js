const { Router } = require ("express");
const { GetPokemonsHandler, PokemonByIdHandler, CreatePokemonHandler } = require ("../handlers/PokemonsHandler");

const pokemonsRouter = Router();

pokemonsRouter.get("/" , GetPokemonsHandler );

pokemonsRouter.get("/:id", PokemonByIdHandler );

pokemonsRouter.post("/", CreatePokemonHandler );

module.exports = pokemonsRouter;