'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init({
    brandIMG: DataTypes.STRING,
    itemIMG: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    coverage: DataTypes.STRING,
    particleRemoval: DataTypes.STRING,
    filterType: DataTypes.STRING,
    dimensions: DataTypes.STRING,
    effectiveFor: DataTypes.STRING,
    rating: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};