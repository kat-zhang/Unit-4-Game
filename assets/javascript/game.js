

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

$("#gem1-img").on("click", function() {
    console.log("GEM 1 this function works");
})

$("#gem2-img").on("click", function() {
    console.log("GEM 2 this function works");
})
  
$("#gem3-img").on("click", function() {
    console.log("GEM 3 this function works");
})
$("#gem4-img").on("click", function() {
    console.log("GEM 4 this function works");
})