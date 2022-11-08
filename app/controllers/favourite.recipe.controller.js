const db = require('../config/db.config.js');
const env = require('../config/env.js');
 
const FavouriteRecipe = db.favouriteRecipe;
 
// Post a FavouriteRecipe
exports.create = (request, response) => { 
 // Save to MySQL database
 FavouriteRecipe.create({  
   recipeId: request.body.recipeId,
   userId: request.body.userId
 }).then(favouriteRecipe => { 
 // Send created FavouriteRecipe to client
 response.send(favouriteRecipe);
 });
};
 
// FETCH all FavouriteRecipe
exports.findAll = (request, response) => {
    FavouriteRecipe.findAll({
  include: ["recipe", "user"]
 }).then(favouriteRecipe => {
   // Send all FavouriteRecipe to Client
   response.send(favouriteRecipe);
 });
};
 
// Find a FavouriteRecipe by Id
exports.findByPk = (request, response) => { 
    FavouriteRecipe.findByPk(request.params.favouriteRecipeId, {
  include: ["recipe", "user"]
 }).then(favouriteRecipe => {
  response.send(favouriteRecipe);
 })
};
 
// Update a FavouriteRecipe
exports.update = (request, response) => {
 const id = request.params.favouriteRecipeId;
 FavouriteRecipe.update( {
    recipeId: request.body.recipeId,
    userId: request.body.userId
}, 
 { where: {id: request.params.favouriteRecipeId} }
 ).then(() => {
 response.status(200).send({ 
    message: 'updated successfully a user with id = ' + id });
 });
};
 
// Delete a FavouriteRecipe by Id
exports.delete = (request, response) => {
 const id = request.params.favouriteRecipeId;
 FavouriteRecipe.destroy({
   where: { id: id }
 }).then(() => {
  response.status(200).send({ 
    message: 'deleted successfully a user with id = ' + id });
 });
};