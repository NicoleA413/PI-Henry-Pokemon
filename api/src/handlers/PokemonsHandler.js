const GetPokemons = require ("../controllers/GetPokemons")

const GetPokemonsHandler = async (req, res) => {
    try {
      const { name } = req.query
      const pokeList = name ? GetPokemonsByName() : await GetPokemons()
      
      res.status(200).send( pokeList )  
    } catch (error) {
        res.status(400).json({error: error.message})
    }
  

}

module.exports = { GetPokemonsHandler }