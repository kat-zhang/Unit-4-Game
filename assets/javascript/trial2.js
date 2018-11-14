
var goalNumber = randomGoal();
var pickFrom = ["#gem-image1", "#gem-image2", "#gem-image3", "#gem-image4"];
var wins = 0;
var losses = 0; 

var counter =0;



function  randomGoal (){
    goalNumber = Math.floor(Math.random()*(102) + 19);
   console.log(goalNumber);
    $("#magic-number").text(goalNumber);
}


function giveGemValues () {

    for (var i = 0; 1 < pickFrom.length; i++) {

        var gameGem = $("<img>");
        gameGem.addId(pickFrom[i]);
        gameGem.attr("data-gemvalue", (Math.floor(Math.random()*(12) + 1))); 
        gameGem=parseInt(gameGem);
    }

    $(".gem-image").on("click", function() {

        var gemValue = ($(this).attr("data-gemvalue"));
        gemValue = parseInt(gemValue);
        console.log(this);

    })



} 




