module.exports = function(app) {
 
    const step = require('../controllers/step.controller.js');
 
    // Create a new Step
    app.post('/api/steps', step.create);
 
    // Retrieve all Step
    app.get('/api/steps', step.findAll);
 
    // Retrieve a single Step by Id
    app.get('/api/steps/:stepId', step.findByPk);
 
    // Update a Step with Id
    app.put('/api/steps/:stepId', step.update);
 
    // Delete a Step with Id
    app.delete('/api/steps/:stepId', step.delete);
 
}