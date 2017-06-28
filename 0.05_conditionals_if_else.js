//if/else statements
//else statements give js an alternative statement to exceute

var elevatorUp=false;
var elevatorDown=true;
var elevatorBroken=false;
var elevatorStuckWhileWeAreOnIt=true;
var elevatorNumber=10;

if(elevatorUp===true){
	console.log("going up");
}
else{
	console.log("going down");
}

if(elevatorBroken){
	console.log("you should take the stairs");
}
else{
	console.log("which floor would you like?");
}

//combining variable types for conditionals
if(elevatorStuckWhileWeAreOnIt && (elevatorNumber===13)){
	console.log("we have been spooked by this elevator");
}
else{
	console.log("thank goodness this omniscient elevator decided not to spook us")
}