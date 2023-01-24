const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        min: 2,
        max: 20,
      },
    },
    hp: {
      type: DataTypes.INTEGER,
      defaultValue: 50,
      validate: {
        min: 20,
        max: 150,
      },
    },
    attack: {
      type: DataTypes.INTEGER,
      defaultValue: 50,
      validate: {
        min: 10,
        max: 150,
      },
    },
    defence: {
      type: DataTypes.INTEGER,
      defaultValue: 50,
      validate: {
        min: 10,
        max: 150,
      },
    },
    speed: {
      type: DataTypes.INTEGER,
      defaultValue: 40,
      validate: {
        min: 10,
        max: 150,
      },
    },
    height: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: {
        min: 1,
        max: 50,
      },
    },    
    weight: {
      type: DataTypes.INTEGER,
      defaultValue: 100,
      validate: {
        min: 10,
        max: 1000,
      },
    },

    image: {
      type: DataTypes.STRING(1000),
      isUrl: true,
      defaultValue: 
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"
    },
    
  },
  {timestamps: false});
};