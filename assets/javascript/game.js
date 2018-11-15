$(document).ready(function() {
    var goalNumber =[]
    var gem1 = []
    var gem2 =[]
    var gem3 = []
    var gem4 = []

    var wins = 0;
    var losses = 0;
    var counter = 0;

    $("#gem1-img").on("click", function() {
        console.log("GEM 1 this function works");
    })




    function randomGoal () {
        goalNumber = Math.floor(Math.random()*(102) + 19);
       
    }

    function gemValues () {
        gem1 = Math.floor(Math.random()*(102) + 19);
        gem2 = Math.floor(Math.random()*(102) + 19);
        gem3 = Math.floor(Math.random()*(102) + 19);
        gem4 = Math.floor(Math.random()*(102) + 19);
    }

    function playValues () {
        $("#magic-number").text(goalNumber);
        $("#gem1-pic").attr("data-value",gem1);
        $("#gem2-img").attr("data-value",gem2);
        $("#gem3-img").attr("data-value",gem3);
        $("#gem4-img").attr("data-value",gem4);
        $("#current-total").text(counter);
        $("#win-total").text(wins);
        $("#loss-total").text(losses);

    }   

})


$("#gem1-img").on("click", function() {
    console.log("GEM 1 this function works");
})

// $("#gem2-img").on("click", function() {

// })
  
// $("#gem3-img").on("click", function() {
   
// })
// $("#gem4-img").on("click", function() {
   
// })



