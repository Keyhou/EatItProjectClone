module.exports = function(app) {
 
    const utensil = require('../controllers/utensil.controller.js');
 
    // Create a new Utensil
    app.post('/api/utensils', utensil.create);
 
    // Retrieve all Utensil
    app.get('/api/utensils', utensil.findAll);
 
    // Retrieve a single Utensil by Id
    app.get('/api/utensils/:utensilId', utensil.findByPk);
 
    // Update a Utensil with Id
    app.put('/api/utensils/:utensilId', utensil.update);
 
    // Delete a Utensil with Id
    app.delete('/api/utensils/:utensilId', utensil.delete);
 
}