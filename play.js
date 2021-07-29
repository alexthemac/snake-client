//Importing using ES6 Shorthand syntax
const {connect} = require('./client');
const { setupInput } = require("./input");

console.log("Connecting ...");
//connect();

// setup interface to handle user input from stdin

setupInput(connect());
