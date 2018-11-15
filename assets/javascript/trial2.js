
var goalNumber = randomGoal();
var gem1 = gemValue();
var gem2 = gemValue();
var gem3 = gemValue();
var gem4 = gemValue();
var wins = 0;
var losses = 0; 
console.log(gem1,gem2,gem3,gem4);
console.log(typeof gem1);
var counter =0;



function  randomGoal (){
    goalNumber = Math.floor(Math.random()*(102) + 19);
   console.log(goalNumber);
    $("#magic-number").text(goalNumber);
};

function gemValue() {
    return Math.floor(Math.random()*(12) + 1);
   
}






// $(".gem-image").on("click", function() {

// var gemValue = ($(this).attr("data-gemvalue"));
// gemValue = parseInt(gemValue);
// console.log(this);