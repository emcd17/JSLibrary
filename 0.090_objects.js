//object
var emptyObject= {};//an empty object that doesnt contain anything

var johnQualls={
	//properties
	name: "John Qualls",
	age: 49,
	vocation: "President of ElevenFifty Academy",
	isRetired: false,
	//methods
	greeting: function(){
		console.log("hello i am " +this.name+ ", I am "+this.vocation);
	},
	declareAge: function(){
		console.log("hello I am "+this.name+ ", I am "+this.age+" years old");
	},
	extendGreeting: function(){
		this.greeting();
		this.declareAge();
	}
};
johnQualls.extendGreeting();
console.log("-----------------------------------------------------");
johnQualls.declareAge();
console.log("-----------------------------------------------------");
console.log(johnQualls);
console.log(johnQualls.name);
console.log(johnQualls.age);
console.log(johnQualls.middleName); //undefined
console.log("---------------");

var animal={type: "bear", habitat: "woods", weight: 500, commonInIndiana: false};
animal.weight=600;
animal.type="super big cat";

console.log(animal.type);
console.log(animal.weight+50);
console.log(animal["weight"]);

var friend= {name: "kennedy", hairColor: "brown", age: 16, isCool: true};
var movie={name: "harry potter", productionCompany: "WB", dateReleased: 1999};
var tvShow={name: "The Great British Baking Show", isOnBBC: false, numberOfHosts: 2, isOnChannel4: true};

console.log("--------------------");

console.log(animal.favoriteFood);
animal.favoriteFood="carrots";
console.log(animal.favoriteFood);
animal.color="blue";
animal.freakOfNature= true;
console.log(animal.color, animal.freakOfNature);


delete animal.freakOfNature;
console.log(animal.freakOfNature);

//properties can be more that string, bool, numbers
//can include arrays and other objects

animal.moviesAboutMe=["lion king", "happy feet", "marley and me"];
console.log(animal.moviesAboutMe[1]);


console.log(Object.keys(animal));//object.keys is a method that takes in an object type and prints out all the properties



//-------------------------------------------------------------------------------------\\
//-------------------------------------------------------------------------------------\\
//-----------------------------INHERITANCE---------------------------------------------\\
//lomghand inheritance
var car={
	make: "",
	model:"",
	year:0,
	constructor: function(make, model, year){
		this.make=make;
		this.model=model;
		this.year=year;
	}
};

var myCar =Object.create(car);
myCar.constructor("honda", "civic", 1997);
console.log(myCar);

//shorthand inheritance
var book={
	title:"",
	yearPublished:0,
	numPages:0,
	constructor: function(title, yearPublished, numPages){
		this.title=title;
		this.yearPublished=yearPublished;
		this.numPages=numPages;
		return this;
	}
}

var myFavBook= new book.constructor("steelheart", 2015, 300);
console.log(myFavBook.title);

//shorterhand---DO NOT USE---I DO NOT LIKE
//functions are objects
//so this works
function computer(screenSize, hardDriveSize, hasNumPad){//in java, methods are not objects
	//didnt define the properties or object
	//but ok bc using js
	this.screenSize=screenSize;
	this.hardDriveSize=hardDriveSize;
	this.hasNumPad=hasNumPad;
}

var myPC=new computer(17,"1TB", true);
console.log(myPC.screenSize);


//objects are references

var PCOne=new computer(12, "500GB", false);
var pcTwo= new computer(14, "2TB", true);
var pcThree=pcTwo;

console.log(PCOne.hardDriveSize);
console.log(pcTwo.screenSize);
console.log(pcThree.screenSize);

pcTwo.screenSize=15;

console.log(pcTwo.screenSize);
console.log(pcThree.screenSize);//bc pcthree points to pctwo bc pcthree=pctwo, pcthree is given the same label as pctwo

//objects are not copied, they are referenced