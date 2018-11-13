

var goalNumber = Math.floor(Math.random()*(102)+19);
console.log("magic Number", goalNumber);
console.log(typeof goalNumber);   

var gem1 = Math.floor(Math.random()*(12) +1);
console.log("gem1 value", gem1); 
console.log(typeof gem1);

var gem2 =  Math.floor(Math.random()*(12) +1);
console.log("gem2 value",gem2);
console.log(typeof gem2);

var gem3 = Math.floor(Math.random()*(12) +1);
console.log("gem3 value", gem3);
console.log(typeof gem3);

var gem4 = Math.floor(Math.random()*(12) +1);
console.log("gem4 value", gem4);
console.log(typeof gem4);

$("#magic-number").text(goalNumber);

var gemValues = [];
var randomValue = Math.floor(Math.random()*4 ((12) +1));
gemValues.push(randomValue);
console.log(gemValues[i])