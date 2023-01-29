const { Pokemon, Type } = require("../db");

const UpdatePokemon = async function (id, body) {
    const { name, types, hp, attack, defense, speed, height, weight, image } = body;

    body.hp ? body.hp = parseInt(hp) : body.hp = null;
    body.attack ? body.attack = parseInt(attack) : body.attack = null;
    body.defense ? body.defense = parseInt(defense) : body.defense = null;
    body.speed ? body.speed = parseInt(speed) : body.speed = null;
    body.height ? body.height = parseInt(height) : body.height = null;
    body.weight ? body.weight = parseInt(weight) : body.weight = null;

    if (!image) {
        body.image = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"
    }

    if (!name) {
        throw Error('Falta un nombre')
    } else {
        body.name = body.name.toLowerCase();

        const findPokemon = await Pokemon.findByPk(id);

        await findPokemon.update(body, { where: { id: id } })
        
        const typeDb = await Type.findAll({
            where: { name: types },
        });

        await findPokemon.setTypes(typeDb);

        return ('Pokemon editado con éxito');
    };
};

module.exports = UpdatePokemon;