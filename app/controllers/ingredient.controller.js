const { recipe: ingredient } = require('../config/db.config.js');
const db = require('../config/db.config.js');
const env = require('../config/env.js');
 
const Ingredient = db.ingredient;
 
// Post a Ingredient
exports.create = (request, response) => { 
 // Save to MySQL database
 Ingredient.create({  
   name: request.body.name,
   recipeId: request.body.recipeId
 }).then(ingredient => { 
 // Send created ingredient to client
 response.send(ingredient);
 });
};
 
// FETCH all Ingredients
exports.findAll = (req, response) => {
 Ingredient.findAll({
  include: ["recipe", "ingredient_recipe"]
 }).then(ingredient => {
   // Send all ingredients to Client
   response.send(ingredient);
 });
};
 
// Find a Ingredient by Id
exports.findByPk = (request, response) => { 
 Ingredient.findByPk(request.params.ingredientId).then(ingredient => {
  response.send(ingredient);
 })
};
 
// Update a Ingredient
exports.update = (request, response) => {
 const id = request.params.ingredientId;
 Ingredient.update( { 
    name: request.body.name
}, 
 { where: {id: request.params.ingredientId} }
 ).then(() => {
 response.status(200).send({ 
    message: 'updated successfully a ingredient with id = ' + id });
 });
};
 
// Delete a Ingredient by Id
exports.delete = (request, response) => {
 const id = request.params.ingredientId;
 Ingredient.destroy({
   where: { id: id }
 }).then(() => {
  response.status(200).send({ 
    message: 'deleted successfully a ingredient with id = ' + id });
 });
};