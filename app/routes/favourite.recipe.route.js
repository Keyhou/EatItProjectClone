module.exports = function(app) {
 
    const favouriteRecipe = require('../controllers/favourite.recipe.controller.js');
 
    // Create a new Ingredient
    app.post('/api/favouriteRecipe', favouriteRecipe.create);
 
    // Retrieve all Ingredient
    app.get('/api/favouriteRecipe', favouriteRecipe.findAll);
 
    // Retrieve a single Ingredient by Id
    app.get('/api/favouriteRecipe/:favouriteRecipeId', favouriteRecipe.findByPk);
 
    // Update a Ingredient with Id
    app.put('/api/favouriteRecipe/:favouriteRecipeId', favouriteRecipe.update);
 
    // Delete a Ingredient with Id
    app.delete('/api/favouriteRecipe/:favouriteRecipeId', favouriteRecipe.delete);
 
}