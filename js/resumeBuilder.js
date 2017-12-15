/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
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

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/

/*
var skills =
["awesomeness", "programming", "teaching", "JS"];
console.log(skills.length);
*/

var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array){
	var newArray = [];
	
	newArray = _array.slice(0); //relpace foreach
	newArray.push(newArray.pop() + 1);
	return newArray;
}

console.log(incrementLastArrayElement(sampleArray));


var name = "AlbErt EINstEiN";

function nameChanger(oldName){
	
	var finalName = oldName;
	var names = oldName.split(" ");
	names[1] = names[1].toUpperCase();
	names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
	finalName = names.join(" ");
	return finalName;
};

console.log(nameChanger(name));