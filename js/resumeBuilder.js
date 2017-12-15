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
	//1.make lowercase
	lowerCaseName = oldName.toLowerCase();
	//2. split by " " to first name and last name
	nameArray = lowerCaseName.split(" ");
	//3. first char of first name changes to capital
	firstName = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1);
	//4. lastName changes to Upper Case 
	lastName = nameArray[1];
	finalName = firstName + " " + lastName.toUpperCase();

	return finalName;
};

console.log(nameChanger(name));