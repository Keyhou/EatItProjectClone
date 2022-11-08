module.exports = function(app) {
 
    const user = require('../controllers/user.controller.js');
 
    // Create a new User
    app.post('/api/users', user.create);
 
    // Retrieve all User
    app.get('/api/users', user.findAll);
 
    // Retrieve a single User by Id
    app.get('/api/users/:userId', user.findByPk);
 
    // Update a User with Id
    app.put('/api/users/:userId', user.update);
 
    // Delete a User with Id
    app.delete('/api/users/:userId', user.delete);
 
}