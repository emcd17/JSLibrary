//strings are a group of characters
//strings must go in quotes
var jim="tom";

console.log(jim);

var username= 'timtam';
console.log(username);

var password= '123password321';
console.log(password);

var birthCity="juniper valley";
var birthState="carson";
console.log(birthCity+","+birthState);
console.log(birthCity+","+birthState+4);

//mixing strings and integers
var ageInAugust=0;
var highSchool="jamestin tech";
var graduatedHS=1994;

console.log(highSchool+ ","+ graduatedHS);
console.log("my 'age' in august", ageInAugust);
console.log("my \"age\" in august", ageInAugust);

highSchool= "jamesten central";
graduatedHS= 7;
console.log("I graduated from "+highSchool+" in "+graduatedHS);

//String methods (functions)
console.log(highSchool.length);//length starts at 1, not 0, length is a propert
console.log(highSchool.toUpperCase());//toUpperCase is a method
console.log(highSchool.toLowerCase());
console.log(highSchool.split("t")); //split(string where to split), takes out the string where to split
console.log(highSchool.slice(5));//slice(index of place to slice), slices off everything before index, first index is 0
