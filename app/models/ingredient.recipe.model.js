module.exports = (sequelize, DataTypes) => {
    const IngredientRecipe = sequelize.define("ingredient_recipe", {
      quantity: {
        type: DataTypes.STRING,
      },
      unit: {
        type: DataTypes.STRING,
      }
    });
  
    return IngredientRecipe;
  };