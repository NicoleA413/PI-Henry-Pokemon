const { GetTypes, GetType } = require("../controllers/GetTypes");


const GetTypesHandler = async (req, res) => {
    try {
        const types = await GetTypes();
        res.status(200).send(types);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

const GetTypeHandler = async (req, res) => {
    try {
        const { type } = req.params;
        const list = await GetType(type);
        res.status(200).send(list);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

module.exports = { GetTypesHandler, GetTypeHandler };