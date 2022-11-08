const express = require("express");
const cors = require("cors");
const bodyParser   = require('body-parser');
const app = express();
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
 
const db = require('./app/config/db.config.js');
 db.sequelize.sync({force: true})
 .then(() => {
 console.log('Drop and Resync with { force: true }');
});
 
// api routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Our App." });
});
 
console.log("Started fetching route ...")

require('./app/routes/user.route.js')(app);
require('./app/routes/recipe.route.js')(app);
require('./app/routes/ingredient.route.js')(app);
require('./app/routes/step.route.js')(app);
require('./app/routes/utensil.route.js')(app);
require('./app/routes/ingredient.recipe.route.js')(app);
require('./app/routes/utensil.recipe.route.js')(app);
require('./app/routes/favourite.recipe.route.js')(app);
 
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});