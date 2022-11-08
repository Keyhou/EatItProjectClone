const env = require('./env.js');
 
/* Development Env*/
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize(env.database, env.username, env.password, {
//   host: env.host,
//   dialect: 'postgres',
//   operatorsAliases: false,
 
//   pool: {
//     max: env.max,
//     min: env.pool.min,
//     acquire: env.pool.acquire,
//     idle: env.pool.idle
//   }
// });

/* Production Env*/
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tables
db.user = require('../models/user.model.js')(sequelize, Sequelize);
db.recipe = require('../models/recipe.model.js')(sequelize, Sequelize);
db.ingredient = require('../models/ingredient.model.js')(sequelize, Sequelize);
db.step = require('../models/step.model.js')(sequelize, Sequelize);
db.utensil = require('../models/utensil.model.js')(sequelize, Sequelize);
db.ingredientRecipe = require('../models/ingredient.recipe.model.js')(sequelize, Sequelize);
db.utensilRecipe = require('../models/utensil.recipe.model.js')(sequelize, Sequelize);
db.favouriteRecipe = require('../models/favourite.recipe.model.js')(sequelize, Sequelize);

db.user.hasMany(db.recipe, { as: "recipe"});
db.recipe.belongsTo(db.user, { 
  foreignKey: "userId",
  as: "user"
});

db.recipe.hasMany(db.step, { as: "step"});
db.step.belongsTo(db.recipe, { 
  foreignKey: "recipeId",
  as: "recipe"
});

db.ingredient.belongsToMany(db.recipe, {
  through: "ingredient_recipe"
});

db.recipe.belongsToMany(db.ingredient, {
  through: "ingredient_recipe"
});

db.ingredient.hasMany(db.ingredientRecipe)
db.ingredientRecipe.belongsTo(db.ingredient)

db.recipe.hasMany(db.ingredientRecipe)
db.ingredientRecipe.belongsTo(db.recipe)

db.utensil.belongsToMany(db.recipe, {
  through: "utensil_recipe"
});

db.recipe.belongsToMany(db.utensil, {
  through: "utensil_recipe"
});

db.utensil.hasMany(db.utensilRecipe)
db.utensilRecipe.belongsTo(db.utensil)
db.recipe.hasMany(db.utensilRecipe)
db.utensilRecipe.belongsTo(db.recipe)

db.user.belongsToMany(db.recipe, {
  through: "favourite_recipe"
});

db.recipe.belongsToMany(db.user, {
  through: "favourite_recipe"
});

db.user.hasMany(db.favouriteRecipe)
db.favouriteRecipe.belongsTo(db.user)

db.recipe.hasMany(db.favouriteRecipe)
db.favouriteRecipe.belongsTo(db.recipe)

// db.user.belongsToMany(db.recipe, {
//   through: "recipe_favourite",
//   as: "user",
//   foreignKey: "userId",
// });
 
module.exports = db;