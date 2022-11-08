module.exports = (sequelize, DataTypes) => {
    const Ingredient = sequelize.define("ingredient", {
      name: {
        type: DataTypes.STRING,
      }
    });
  
    return Ingredient;
  };