//booleans
var tired=false;
var awake=true;
var hungry= true;
var sad=false;
var happyToWorkWithYall=true;
var corny=true;

console.log(corny);

//comparisons
//== stands for equality
//=== stands for strict equality
//!= inequality
//!== strict inequality
//>
//<
//>=
//<=
 console.log(2>1);
 console.log(3<2);
 console.log((2>1)||(3<2));
 console.log((2>1)&&(3<2));
 var test= 2>=3;
 console.log(test);

 console.log("is 2 greater than 1? "+(2>1));


 console.log("--------------------");

 //when checking for equality, use === over the == in kavascript

 2=="2";//true
 2==="2";//false
2===2;//true
(1+1)===2; //true

//inequality
"joey"!=="Tif";//true
10!==10 //false

//overview diff between =, ==, ===
//= sets equal
//== compares value
//=== compares with type and value

//logical operations
//&& and true if both are true
//|| or  true if one is true
//!  not  true if comparison is false

console.log("&&:", (2===2)&&(2===1));
console.log("||:", (2===2)||(2===1));
console.log("!:", 2!=1);
