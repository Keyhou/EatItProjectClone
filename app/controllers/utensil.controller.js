const { recipe: ingredient } = require('../config/db.config.js');
const db = require('../config/db.config.js');
const env = require('../config/env.js');
 
const Utensil = db.utensil;
 
// Post a Utensil
exports.create = (request, response) => { 
 // Save to MySQL database
 Utensil.create({  
   name: request.body.name
 }).then(utensil => { 
 // Send created utensil to client
 response.send(utensil);
 });
};
 
// FETCH all Utensils
exports.findAll = (req, response) => {
 Utensil.findAll({
  include: ["recipe", "utensilRecipe"]
 }).then(utensil => {
   // Send all itensils to Client
   response.send(utensil);
 });
};
 
// Find a Utensil by Id
exports.findByPk = (request, response) => { 
 Utensil.findByPk(request.params.utensilId, {
  include: ["recipe", "utensilRecipe"]
 }).then(utensil => {
  response.send(utensil);
 })
};
 
// Update a Utensil
exports.update = (request, response) => {
 const id = request.params.utensilId;
 Utensil.update( { 
    name: request.body.name
}, 
 { where: {id: request.params.utensilId} }
 ).then(() => {
 response.status(200).send({ 
    message: 'updated successfully a utensil with id = ' + id });
 });
};
 
// Delete a Utensil by Id
exports.delete = (request, response) => {
 const id = request.params.utensilId;
 Utensil.destroy({
   where: { id: id }
 }).then(() => {
  response.status(200).send({ 
    message: 'deleted successfully a utensil with id = ' + id });
 });
};