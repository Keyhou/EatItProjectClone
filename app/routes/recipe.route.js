module.exports = function(app) {
 
    const recipe = require('../controllers/recipe.controller.js');
 
    // Create a new Recipe
    app.post('/api/recipes', recipe.create);
 
    // Retrieve all Recipe
    app.get('/api/recipes', recipe.findAll);
 
    // Retrieve a single Recipe by Id
    app.get('/api/recipes/:recipeId', recipe.findByPk);
 
    // Update a Recipe with Id
    app.put('/api/recipes/:recipeId', recipe.update);
 
    // Delete a Recipe with Id
    app.delete('/api/recipes/:recipeId', recipe.delete);
 
}