//switch statements 
//very similar to if statements

//the value is evaluated once and then compared with cases to find a matching case to execute the code

var marginOfSuperBowlWin=17;
var result;

switch(marginOfSuperBowlWin){
	case 3: result="that will be a good game"; break;
	case 7: result="that will be a pretty close game"; break;
	case 17: result="watch for the commercials"; break;
	default: result="yay super bowl!";
}

console.log("Switch result: " + result);