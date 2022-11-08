module.exports = (sequelize, DataTypes) => {
    const Utensil = sequelize.define("utensil", {
      name: {
        type: DataTypes.STRING,
      }
    });
  
    return Utensil;
  };