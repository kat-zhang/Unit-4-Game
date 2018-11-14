
var goalNumber = randomGoal();
var gem1 = gemValue();
var gem2 = gemValue();
var gem3 = gemValue();
var gem4 = gemValue();
var wins = 0;
var losses = 0; 

var counter =0;



function  randomGoal (){
    goalNumber = Math.floor(Math.random()*(102) + 19);
   //console.log(goalNumber);
    $("#magic-number").text(goalNumber);
};

function gemValue() {
    return Math.floor(Math.random()*(12) + 1);
    //console.log(gem1,gem2,gem3,gem4);
    //console.log(typeof gem1);
    $()
}




// function giveGemValues () {

//     for (var i = 0; 1 < pickFrom.length; i++) {

//         var gameGem = $("<img>");
//         gameGem.addId(pickFrom[i]);
//         gameGem.attr("data-gemvalue", (Math.floor(Math.random()*(12) + 1))); 
//         gameGem=parseInt(gameGem);
//     }

//     $(".gem-image").on("click", function() {

//         var gemValue = ($(this).attr("data-gemvalue"));
//         gemValue = parseInt(gemValue);
//         console.log(this);

//     })



// } 




