module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define("recipe", {
      name: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      category: {
        type: DataTypes.STRING,
      },
      difficulty: {
        type: DataTypes.STRING,
      },
      price_range: {
        type: DataTypes.STRING,
      },
      season: {
        type: DataTypes.STRING,
      },
      preparation_time: {
        type: DataTypes.STRING,
      }
    });
  
    return Recipe;
  };