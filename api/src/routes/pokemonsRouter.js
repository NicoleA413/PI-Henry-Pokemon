const { Router } = require ("express")
const { GetPokemonsHandler } = require ("../handlers/PokemonsHandler")

const pokemonsRouter = Router()

pokemonsRouter.get("/" , GetPokemonsHandler )

pokemonsRouter.get("/?name", (req, res) => {
    res.send("name")
})

pokemonsRouter.get("/:id", (req, res) => {
    res.send("id")
})

pokemonsRouter.post("/", (req, res) => {
    res.send("post pokemon")
})

module.exports = pokemonsRouter