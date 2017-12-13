/*
This is empty on purpose! Your code to build the resume will go here.
 */


 var email = "peter@udacity.com"
 var newEmail = email.replace("udacity", "gmail");
 console.log(email);
 console.log(newEmail);

var awesomeThought = "I am Peter and awesome";
var funThought = awesomeThought.replace("awesome", "fun");

// $("#main").append(funThought);

var name = "Peter Beomseok Kim";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Software Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedName);
$("#header").append(formattedRole);