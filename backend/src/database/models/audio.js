'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Audio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Audio.belongsTo(models.Recipient, {

        as: 'recipient',
        
        foreignKey: 'recipient_id'
      }),
      Audio.belongsTo(models.Theme, {

        as:'theme',

        foreignKey: 'theme_id'
      })
    }
  }
  Audio.init({
    name: DataTypes.STRING,
    date_time: DataTypes.DATE,
    theme_id: DataTypes.INTEGER,
    recipient_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Audio',
  });
  return Audio;
};

