const { Router } = require ("express");
const { Pokemon, Type } = require("../db");
const { GetPokemonsHandler, PokemonByIdHandler, CreatePokemonHandler, DeletePokemonHandler, UpdatePokemonHandler } = require ("../handlers/PokemonsHandler");


const pokemonsRouter = Router();

pokemonsRouter.get("/" , GetPokemonsHandler );

pokemonsRouter.get("/:id", PokemonByIdHandler );

pokemonsRouter.post("/", CreatePokemonHandler );

pokemonsRouter.put("/:id", UpdatePokemonHandler );

pokemonsRouter.delete("/:id", DeletePokemonHandler );
  

module.exports = pokemonsRouter;