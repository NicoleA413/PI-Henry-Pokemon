const { Router } = require ("express");
const { GetTypesHandler, GetTypeHandler } = require ("../handlers/TypesHandler");

const typesRouter = Router();

typesRouter.get( "/", GetTypesHandler );

typesRouter.get("/:type", GetTypeHandler );

module.exports = typesRouter;