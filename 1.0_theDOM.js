//--------------------------------------------------------
//DOM Access Methods

//Finding DOM nodes by id:
        //document.getElementById(id);
        
//Finding DOM nodes by tag name:
        //document.getElementsByTagName(tagName);
        
//Finding DOM nodes by class name:
        //document.getElementsByClassName(className);
//Finding DOM nodes by query selector:
          //document.querySelector(cssQuery);
          //document.querySelectorAll(cssQuery);

     
//---------JavaScript and use Chrome Dev Tools to see the console.log

//by ID
var hobbiesList=document.getElementById("hobby-list");
console.log(hobbiesList);

//by tag name
var hobbies=document.getElementsByTagName('li');
console.log(hobbies);//returns collection of elements in an array
console.log(hobbies[0].innerHTML);//val of first li

//by class name
var alsoHobbies=document.getElementsByClassName("hobby");
console.log(alsoHobbies);

//by css query
var firstHobby=document.querySelector("ul li.hobby");//goes to the different unordered lists and finds the first list item with the class name hobby
console.log(firstHobby);

var allOfThem=document.querySelectorAll("ul li.hobby");
console.log(allOfThem);

//rendering to html
//each DOM node ahs an innerHTML attribute
//can set html to replace the contents of a node

favoriteSong();
bestSong();
worstSong();
addSong();

function favoriteSong(){
	document.getElementById("favorite").innerHTML="Queen";
}

function worstSong(){
	document.getElementById("worst").innerHTML="Florida Georgia Line";
}

function bestSong(){
	document.getElementById("best").innerHTML="Cell Block Tango";
}

function addSong(){
	document.getElementById("best").innerHTML+=" and Home Sweet Home";
}

//--------------------------------------------------------
//MORE HTML MANIPULATIONS

// Adding and Deleting Elements

// document.createElement(element)      Create an HTML element
// document.removeChild(element)        Remove an HTML element
// document.appendChild(element)        Add an HTML element
// document.replaceChild(element)       Replace an HTML element
// document.write(text)                 Write into the HTML output stream

function addButton(){
	var btn=document.createElement("BUTTON"); //creates a button element
	var text= document.createTextNode("I JUST GOT ADDED"); //create a text node
	btn.appendChild(text);
	document.body.appendChild(btn);
}
function removeList(){
	var list=document.getElementById("music");
	document.body.removeChild(list);
}

//function waterToWine(){
//	var textNode= document.createTextNode("wine");
//	var item = document.getElementById("myList").childNode[0];
//	item.replaceChild(textNode, item.childNode[0]);
//}

function writeWords(){
	document.write("added");
}

