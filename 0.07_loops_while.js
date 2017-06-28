//loops are used to do things multiple times
//the while loop tells js to repeat statements to repeat until a condition is false

//example
var score=0;
while(score<10){
	score++;
	console.log("score is: "+ score);
}

//example
var age=0;
while (age<100){
	age+=10;
	console.log("our age is: "+ age);
}
if (age===100){
	console.log("i am a century old");
}

//challenge
var counter=0;
while(counter<100){
	counter+=10;
	console.log("this is a counter: " +counter);
	if (counter===50){
	console.log("halfway there!");
	}
}

