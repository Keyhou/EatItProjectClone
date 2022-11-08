const { utensilRecipe } = require('../config/db.config.js');
const db = require('../config/db.config.js');
const env = require('../config/env.js');
 
const UtensilRecipe = db.utensilRecipe;
 
// Post a UtensilRecipe
exports.create = (request, response) => { 
 // Save to MySQL database
 UtensilRecipe.create({  
    utensilId: request.body.utensilId,
    recipeId: request.body.recipeId
 }).then(utensilRecipe => { 
 // Send created utensilRecipe to client
 response.send(utensilRecipe);
 });
};
 
// FETCH all UtensilRecipes
exports.findAll = (request, response) => {
   console.log("findAll function started ...")
    UtensilRecipe.findAll({
      include: ["recipe"]
   }).then(utensilRecipes => {
      console.log(`Send ${response}`)
      response.send(utensilRecipes);
   })
}
 
// Find a UtensilRecipe by Id
exports.findByPk = (request, response) => { 
UtensilRecipe.findByPk(request.params.utensilRecipeId, {
  include: ["recipe"]
 }).then(utensilRecipe => {
  response.send(utensilRecipe);
 })
};
 
// Update a UtensilRecipe
exports.update = (request, response) => {
 const id = request.params.utensilRecipeId;
 Recipe.update( {
    utensilId: request.body.utensilId,
    recipeId: request.body.recipeId
}, 
 { where: {id: request.params.utensilRecipeId} }
 ).then(() => {
 response.status(200).send({ 
    message: 'updated successfully a recipe with id = ' + id });
 });
};
 
// Delete a Recipe by Id
exports.delete = (request, response) => {
 const id = request.params.utensilRecipeId;
 UtensilRecipe.destroy({
   where: { id: id }
 }).then(() => {
  response.status(200).send({ 
    message: 'deleted successfully a recipe with id = ' + id });
 });
};