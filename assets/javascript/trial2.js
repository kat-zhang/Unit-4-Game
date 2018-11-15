
var goalNumber = randomGoal();
var gem1 = gemValue();
var gem2 = gemValue();
var gem3 = gemValue();
var gem4 = gemValue();
var wins = 0;
var losses = 0; 
//console.log(gem1,gem2,gem3,gem4);
//console.log(typeof gem1);
var counter =0;

// $(document).ready(function () {

    function  randomGoal() {
    goalNumber = Math.floor(Math.random()*(102) + 19);
   //console.log(goalNumber);
    
    };

    function gemValues() {
    return Math.floor(Math.random()*(12) + 1);
    }

   function playValues() {
    $("#magic-number").text(goalNumber);
    $("#gem1-pic").text(gem1);
    $("#gem2-pic").text(gem2);
    $("#gem3-pic").text(gem3);
    $("#gem4-pic").text(gem4);
   }
   
// $(".gem-image").on("click", function() {

// var gemValue = ($(this).attr("data-gemvalue"));
// gemValue = parseInt(gemValue);
// console.log(this);