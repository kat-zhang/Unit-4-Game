

var goalNumber = "..."
var gem1 = "" //Math.floor(Math.random()*(12) +1);
var gem2 = "" //Math.floor(Math.random()*(12) +1);
var gem3 = "" //Math.floor(Math.random()*(12) +1);
var gem4 = "" //Math.floor(Math.random()*(12) +1); 
var wins = 
var losses = 
var counter =


function randomValues() {
    goalNumber = Math.floor(Math.random()*(102)+19);
    gem1 = Math.floor(Math.random()*(12) +1);
    gem2 = Math.floor(Math.random()*(12) +1);
    gem3 = Math.floor(Math.random()*(12) +1);
    gem4 = Math.floor(Math.random()*(12) +1);
};



console.log("magic Number", goalNumber);
console.log(typeof goalNumber);   

console.log("gem1 value", gem1); 
console.log(typeof gem1);

console.log("gem2 value",gem2);
console.log(typeof gem2);


function gameValues() {

}



// $("#gem1-img").on("click", function() {
//     console.log("GEM 1 this function works");
// })

// $("#gem2-img").on("click", function() {

// })
  
// $("#gem3-img").on("click", function() {
   
// })
// $("#gem4-img").on("click", function() {
   
// })



