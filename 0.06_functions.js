//functions
//execute actions and allows to reuse code, makes code cleaner

hello();
printOneNumber();
divider();
//add(2,7);
add1();

function divider(){
	console.log("-------------------------");
}
function hello(){
	console.log("hello world");
}

function printOneNumber(){
	console.log("1");
}

//scope with variables
//like a rifle scope

var x =8;

function add1(){
	var y=7;
	console.log(x+y);
}

//function add(x, y){ //uses x in the fn and if no x in there then checks whole program for x
//	console.log(x+y);//if there is no x in the fn or program then throws error
//}
add2();
subtract();
divider();

function add2(){
	var x=2;
	var y =7;
	console.log(x+y);
}

function subtract(){
	var x =4;
	var y=1;
	console.log(x-y);
}

//parameters are the names in the function definition
//arguments are passed to the function

numberEntered(7);//7 is the argument
addTwoNums(4,7);
divider();

function numberEntered(x){//x is a parameter
	console.log("number entered: "+x);
}

function addTwoNums(x,y){
	console.log(x+y);
}

//RETURNSSSS YAY
//when js hits the return keyword it will stop the fn and return the argument

console.log(mood());
console.log(multiply(3,8));
console.log(fullName("John", "Smith"));
divider();
divider();

function mood(){
	return "*im feeling fab*";
}

function multiply(x,y){
	return x*y;
}

function fullName(firstName, lastName){
	var name= firstName +" "+lastName;
	return name;
}

for(var i=0; i<5;i++){
	divider();
}

