const { Router } = require ("express")
const typesRouter = Router()

typesRouter.get("/", (req, res) => {
    res.send("types")
});

typesRouter.get("/:type", (req, res) => {
    res.send("type")
});

module.exports = typesRouter