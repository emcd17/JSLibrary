//for loops are similer to while loops in that they allow for repeated statements
//however they are more specialized

/*for(counter;condition; increment){
	code to be run
}*/

/*for(var i=0;i<=50;i+=5){
	console.log(i);
}*/

/*for(var i=0; i<=100; i+=5){
	console.log(i);
}*/

/*for(var i=3; i<=40; i+=7){
	console.log(i);
}*/

//BREAAAKKKKKK
//breaks are used to prematurely exit a loop

for(var i=0; i<20; i++){
	console.log("testing: " + i);
	if(i===13){
		console.log("found 13!");
		break;
	}
}

//for in loop
//do while loop