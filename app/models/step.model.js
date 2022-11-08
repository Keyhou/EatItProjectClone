module.exports = (sequelize, DataTypes) => {
    const Step = sequelize.define("step", {
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      }
    });
  
    return Step;
  };