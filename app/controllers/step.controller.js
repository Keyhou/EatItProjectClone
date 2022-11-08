const { recipe: ingredient } = require('../config/db.config.js');
const db = require('../config/db.config.js');
const env = require('../config/env.js');
 
const Step = db.step;
 
// Post a Step
exports.create = (request, response) => { 
 // Save to MySQL database
 Step.create({  
   title: request.body.title,
   description: request.body.description,
   recipeId: request.body.recipeId
 }).then(step => { 
 // Send created step to client
 response.send(step);
 });
};
 
// FETCH all Steps
exports.findAll = (req, response) => {
 Step.findAll({
  include: ["recipe"]
 }).then(step => {
   // Send all steps to Client
   response.send(step);
 });
};
 
// Find a Step by Id
exports.findByPk = (request, response) => { 
 Step.findByPk(request.params.stepId, {
  include: ["recipe"]
 }).then(utensil => {
  response.send(utensil);
 })
};
 
// Update a Step
exports.update = (request, response) => {
 const id = request.params.stepId;
 Step.update( {
  title: request.body.title,
  description: request.body.description
}, 
 { where: {id: request.params.stepId} }
 ).then(() => {
 response.status(200).send({ 
    message: 'updated successfully a utensil with id = ' + id });
 });
};
 
// Delete a Step by Id
exports.delete = (request, response) => {
 const id = request.params.stepId;
 Step.destroy({
   where: { id: id }
 }).then(() => {
  response.status(200).send({ 
    message: 'deleted successfully a step with id = ' + id });
 });
};