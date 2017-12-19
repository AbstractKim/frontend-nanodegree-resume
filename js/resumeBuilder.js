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

*/

var work ={
	"jobs": 
	[{
		"employer" : "BlueTelecom, Inc",
		"title" : "Test Engineer",
		"location" : "Bridgewater, NJ",
		"date" : "Sept, 2012 - Sept, 2014",
		"description" : "Post Launch Team, STA"
	}, 
	{
		"employer" : "SpacePalm, Inc",
		"title" : "Software Developer",
		"location" : "Parsippany, NJ",
		"date" : "Sept, 2014 - Current",
		"description" : "Developer Mobile Automation Testing"
			
	}]
};

var projects = 
{
	"projects" : [
		{ 
			"title" : "SAFT DOU",
			"dates" : "Sept, 2014 - Current",
			"description" : "Automated DOU Testing"	
		},
		{
			"title" : "SAFT TOPAPP",
			"dates" : "May, 2015 - Current",
			"dscription" : "Automated app testing"
		}

	]
};

var bio = {
	"name" : "Peter Beomseok Kim",
	"role" : "Software Developer",
	"biopic" : "mypic.jpg",
	"contacts" : {
		"mobile" : "917-601-2375",
		"email" : "quantumbskim@gmail.com",
		"github" : "AbstactKim",
		"twitter" : "@Kim1Beomseok" },
	"skills" : ["awesomeness", "android", "java", "c/c++", "javascript", "rxjava"]
};

var education = {
	"schools" : [
	{ 
		"name" : "New York University",
		"location" : "New York City, NY",
		"degree dates" : "Sept 2010 - May 2012",
		"url" : "http://engineering.nyu.edu/",
		"majors" : ["Master of Electrical and Computer Engineering"]
	},
	{
		"name" : "Hankuk University of foreign Studies",
		"location" : "Seoul, Republic of Korea",
		"degree dates" : "March 1998 - Feb 2016",
		"url" : "http://ice.hufs.ac.kr/",
		"majors" : ["Master of Information & Communication Engineering",
					"Bachelor of Information & Communication Engineering"]
	}
	],

	"online courses" :[
	{
		"title" : "JavaScript Basic",
		"school" : "Udacity",
		"Dates" : "Dec 2017 - Current",
		"Url" : "https://classroom.udacity.com/courses/ud804" 
	},
	{
		"title" : "Algorithms, Part I",
		"school" : "Coursera - Princeton",
		"Dates" : "Nov 2017 - Current",
		"Url" : "https://www.coursera.org/learn/algorithms-part1/home/welcome" 
	}
	]
};


/*
var skills =
["awesomeness", "programming", "teaching", "JS"];

var bio = {
	"name" : "Peter",
	"age" : 38,
	"skills" : skills
};

bio["city"] = "Jersey City";
bio["email"] = "quantumbskim@gmail.com";
$("#main").append(bio["city"]);
*/