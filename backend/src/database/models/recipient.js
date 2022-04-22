'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Recipient.hasMany(models.Audio,{

        as: 'audios',

        foreignKey: 'recipient_id'
      })
    }
  }
  Recipient.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Recipient',
  });
  return Recipient;
};