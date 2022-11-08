const db = require('../config/db.config.js');
const env = require('../config/env.js');
 
const IngredientRecipe = db.ingredientRecipe;
 
// Post a IngredientRecipe
exports.create = (request, response) => { 
 // Save to MySQL database
 IngredientRecipe.create({  
   quantity: request.body.quantity,
   unit: request.body.unit,
   recipeId: request.body.recipeId,
   ingredientId: request.body.ingredientId
 }).then(ingredientRecipe => { 
 // Send created ingredientRecipe to client
 response.send(ingredientRecipe);
 });
};
 
// FETCH all IngredientRecipe
exports.findAll = (request, response) => {
    IngredientRecipe.findAll({
  include: ["recipe", "ingredient"]
 }).then(ingredientRecipe => {
   // Send all ingredientRecipe to Client
   response.send(ingredientRecipe);
 });
};
 
// Find a IngredientRecipe by Id
exports.findByPk = (request, response) => { 
    IngredientRecipe.findByPk(request.params.ingredientRecipeId, {
  include: ["recipe", "ingredient"]
 }).then(ingredientRecipe => {
  response.send(ingredientRecipe);
 })
};
 
// Update a IngredientRecipe
exports.update = (request, response) => {
 const id = request.params.ingredientRecipeId;
 IngredientRecipe.update( { 
    quantity: request.body.quantity,
    unit: request.body.unit,
    recipeId: request.body.recipeId,
    ingredientId: request.body.ingredientId
}, 
 { where: {id: request.params.ingredientRecipeId} }
 ).then(() => {
 response.status(200).send({ 
    message: 'updated successfully a user with id = ' + id });
 });
};
 
// Delete a IngredientRecipe by Id
exports.delete = (request, response) => {
 const id = request.params.ingredientRecipeId;
 IngredientRecipe.destroy({
   where: { id: id }
 }).then(() => {
  response.status(200).send({ 
    message: 'deleted successfully a user with id = ' + id });
 });
};