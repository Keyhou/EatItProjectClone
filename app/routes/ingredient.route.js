module.exports = function(app) {
 
    const ingredient = require('../controllers/ingredient.controller.js');
 
    // Create a new Ingredient
    app.post('/api/ingredients', ingredient.create);
 
    // Retrieve all Ingredient
    app.get('/api/ingredients', ingredient.findAll);
 
    // Retrieve a single Ingredient by Id
    app.get('/api/ingredients/:ingredientId', ingredient.findByPk);
 
    // Update a Ingredient with Id
    app.put('/api/ingredients/:ingredientId', ingredient.update);
 
    // Delete a Ingredient with Id
    app.delete('/api/ingredients/:ingredientId', ingredient.delete);
 
}