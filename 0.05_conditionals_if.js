//if statements are used to tell js which statements to execute based on a condition

var isOn=true;
var isHot=true;

//shorthand
if (isOn){
	console.log("the light is on");
}

//longhand
if(isOn===true){
	console.log("the light is on")
}

//conditional operators
// && and
//||  or
//!   not

//isHot=false;
isOn=false;

if(isOn && isHot){
	console.log("the light is on and hot");
}

if(isOn || isHot){
	console.log("the light is either on or hot");
}

if(!isOn){
	console.log("the light is off");
}