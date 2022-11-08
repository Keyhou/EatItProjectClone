module.exports = function(app) {
 
    const ingredientRecipe = require('../controllers/ingredient.recipe.controller.js');
 
    // Create a new Ingredient
    app.post('/api/ingredientRecipe', ingredientRecipe.create);
 
    // Retrieve all Ingredient
    app.get('/api/ingredientRecipe', ingredientRecipe.findAll);
 
    // Retrieve a single Ingredient by Id
    app.get('/api/ingredientRecipe/:ingredientRecipeId', ingredientRecipe.findByPk);
 
    // Update a Ingredient with Id
    app.put('/api/ingredientRecipe/:ingredientRecipeId', ingredientRecipe.update);
 
    // Delete a Ingredient with Id
    app.delete('/api/ingredientRecipe/:ingredientRecipeId', ingredientRecipe.delete);
 
}