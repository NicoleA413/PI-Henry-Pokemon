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
      // validate: {
      //   min: 41,
      // },
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
    },
    hp: {
      type: DataTypes.INTEGER,
      defaultValue: 50
    },
    attack: {
      type: DataTypes.INTEGER,
      defaultValue: 50
    },
    defence: {
      type: DataTypes.INTEGER,
      defaultValue: 50
    },
    speed: {
      type: DataTypes.INTEGER,
      defaultValue: 40
    },
    height: {
      type: DataTypes.INTEGER,
      defaultValue: 10
    },    
    weight: {
      type: DataTypes.INTEGER,
      defaultValue: 100
    },
    
  },
  {timestamps: false});
};