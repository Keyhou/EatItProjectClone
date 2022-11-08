const db = require('../config/db.config.js');
const env = require('../config/env.js');
 
const User = db.user;
 
// Post a User
exports.create = (request, response) => { 
 // Save to MySQL database
 User.create({  
   email: request.body.email,
   password: request.body.password,
   username: request.body.username,
   image: request.body.image
 }).then(user => { 
 // Send created user to client
 response.send(user);
 });
};
 
// FETCH all Users
exports.findAll = (request, response) => {
 User.findAll({
  include: ["recipe"]
 }).then(users => {
   // Send all users to Client
   response.send(users);
 });
};
 
// Find a User by Id
exports.findByPk = (request, response) => { 
 User.findByPk(request.params.userId, {
  include: ["recipe"]
 }).then(user => {
  response.send(user);
 })
};
 
// Update a User
exports.update = (request, response) => {
 const id = request.params.userId;
 User.update( { 
    email: request.body.email,
    password: request.body.password,
    username: request.body.username,
    image: request.body.image
}, 
 { where: {id: request.params.userId} }
 ).then(() => {
 response.status(200).send({ 
    message: 'updated successfully a user with id = ' + id });
 });
};
 
// Delete a User by Id
exports.delete = (request, response) => {
 const id = request.params.userId;
 User.destroy({
   where: { id: id }
 }).then(() => {
  response.status(200).send({ 
    message: 'deleted successfully a user with id = ' + id });
 });
};