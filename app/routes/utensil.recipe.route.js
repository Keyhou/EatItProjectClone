module.exports = function(app) {
    console.log("SQL function started ...")
    const utensilRecipe = require('../controllers/utensil.recipe.controller.js');
 
    // Create a new Utensil Recipe
    app.post('/api/utensilRecipe', utensilRecipe.create);
 
    // Retrieve all Utensil Recipe
    app.get('/api/utensilRecipe', utensilRecipe.findAll);
 
    // Retrieve a single Utensil Recipe by Id
    app.get('/api/utensilRecipe/:utensilRecipeId', utensilRecipe.findByPk);
 
    // Update a Utensil Recipe with Id
    app.put('/api/utensilRecipe/:utensilRecipeId', utensilRecipe.update);
 
    // Delete a Utensil Recipe with Id
    app.delete('/api/utensilRecipe/:utensilRecipeId', utensilRecipe.delete);
 
}