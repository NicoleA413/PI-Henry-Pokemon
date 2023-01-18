const { Router } = require ("express")
const pokemonsRouter = Router()

pokemonsRouter.get("/" , (req, res) =>{
    res.send("pokemons")
})

pokemonsRouter.get("/:id", (req, res) => {
    res.send("id")
})

pokemonsRouter.get("/?name", (req, res) => {
    res.send("name")
})

pokemonsRouter.post("/", (req, res) => {
    res.send("post pokemon")
})

module.exports = pokemonsRouter