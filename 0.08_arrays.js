//arrays
//a collection of items defined by []

var rainbowColors=["red", "orange", "yellow", "blue", "indigo", "violet"];
var raceWinners=[33, 72, 64];
var myFavoriteThings=["broccoli", 2, "Taylor Swift", true, [2,13]];//mixed type array do not use ever--NOT ALLOWED IN JAVA
//array in an array is 2D array [r] [c]

console.log(rainbowColors);//not allowed in java bc memory location
console.log(myFavoriteThings)

//arrays have indexes
var countries =["usa", "russia", "germany", "japan"];
//indexes		0		1			2			3

console.log(countries[0]);
console.log(countries[4]);


//iterating over arrays
console.log("------------------------");
var movies=["die hard","dumb and dumber", "lord of the rings", "the departed", "fight club", "harry potter"];
//array.length gives the number of arrays
/*for(var i=0;i<movies.length; i++){
	console.log("the index is: "+ i);
	console.log(movies[i]);
}*/

function toString(array){
	for(var i=0;i<array.length; i++){
	console.log("the index is: "+ i);
	console.log(array[i]);
	}
}

toString(movies);
console.log("------------");

var patients=["jim", "bob", "sharon", "julia", "cosette", "marius", "tiffany", "joey"];
toString(patients);