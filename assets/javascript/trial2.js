
var goalNumber = "" 

$("#magic-number").text(goalNumber);
var pickFrom = ["assets/images/gem1jpg", "assets/images/gem2.jpg", "assets/images/gem3.jpg", "assets/image/jpg"]
var wins = 0;
var losses = 0; 

var counter =0;



function  randomGoal (){
    goalNumber = Math.floor(Math.random()*(102) + 19);
}


function giveGemValues () {

    for (var i = 0; 1 < pickFrom.length; i++) {

        var gameGem = $("<img>");
        gameGem.addClass("gem-image");
        gameGem.attr("src", pickFrom[i]);
        gameGem.attr("data-gemvalue" (Math.floor(Math.random()*(12) + 1));
        $(".col").append(gameGem);

    }

}





