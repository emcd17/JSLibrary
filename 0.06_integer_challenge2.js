var moneyInAccount=20000;
var moneyToDeposit=90;
var moneyToWithdraw=100;
var moneyAfterWithdrawal= moneyInAccount- moneyToWithdraw;
var moneyAfterDeposit= moneyInAccount - moneyToDeposit;

console.log("intial total"+moneyInAccount);
console.log("deposit "+moneyToDeposit);
console.log("withdraw "+moneyToWithdraw);
console.log("after deposit "+moneyAfterDeposit);
console.log("after withdraw "+moneyAfterWithdrawal);

var myNumber=0;
myNumber+=10;
console.log(myNumber);
myNumber-=1;
console.log(myNumber);
myNumber*=9;
console.log(myNumber);
myNumber/=7;
console.log(myNumber);

var currentAge=17;
var maxAge= 100;
var hoursOfSleepPerDay=6;
var daysPerYear= 365;
var hoursOfSleepPerYear= hoursOfSleepPerDay*daysPerYear;
var numberOfYearsLeft= maxAge - currentAge;
console.log("you will need "+ hoursOfSleepPerYear*numberOfYearsLeft + " hours of sleep to last you to the ripe old age of "+ maxAge);