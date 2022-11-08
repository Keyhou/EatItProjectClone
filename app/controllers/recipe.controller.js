const db = require('../config/db.config.js');
const env = require('../config/env.js');
 
const Recipe = db.recipe;
 
// Post a Recipe
exports.create = (request, response) => { 
 // Save to MySQL database
 Recipe.create({  
    name: request.body.name,
    image: request.body.image,
    category: request.body.category,
    difficulty: request.body.difficulty,
    price_range: request.body.price_range,
    season: request.body.season,
    preparation_time: request.body.preparation_time,
    userId: request.body.userId
 }).then(recipe => { 
 // Send created recipe to client
 response.send(recipe);
 });
};
 
// FETCH all Recipes
exports.findAll = (request, response) => {
   Recipe.findAll({
      include: ["user"]
   }).then(recipe => {
      response.send(recipe);
   })
}
 
// Find a Recipe by Id
exports.findByPk = (request, response) => { 
 Recipe.findByPk(request.params.recipeId, {
  include: ["user"]
 }).then(recipe => {
  response.send(recipe);
 })
};
 
// Update a Recipe
exports.update = (request, response) => {
 const id = request.params.recipeId;
 Recipe.update( {
    name: request.body.name,
    image: request.body.image,
    category: request.body.category,
    difficulty: request.body.difficulty,
    price_range: request.body.price_range,
    season: request.body.season,
    preparation_time: request.body.preparation_time
}, 
 { where: {id: request.params.recipeId} }
 ).then(() => {
 response.status(200).send({ 
    message: 'updated successfully a recipe with id = ' + id });
 });
};
 
// Delete a Recipe by Id
exports.delete = (request, response) => {
 const id = request.params.recipeId;
 Recipe.destroy({
   where: { id: id }
 }).then(() => {
  response.status(200).send({ 
    message: 'deleted successfully a recipe with id = ' + id });
 });
};