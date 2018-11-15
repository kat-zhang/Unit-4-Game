var goalNumber = randomGoal();
var gem1 = gemValues();
var gem2 = gemValues();
var gem3 = gemValues();
var gem4 = gemValues();
//console.log(gem1,gem2,gem3,gem4);
//console.log(typeof gem1);
var scoreCounter = 0;
var wins = 0;
var losses = 0; 

function  randomGoal() {
    goalNumber = Math.floor(Math.random()*(102) + 19);
    //console.log(goalNumber);
    $("#magic-number").text(goalNumber);
};

function gemValues() {
    return Math.floor(Math.random()*(12) + 1);   
  
}

for (var i = 0; i < 4; i++) {
    var gemPic = $("gem-pic");
    gemPic.attr ("data-value",allGems[i]);

$(".gempic").on("click", function(){

    var theValue = ($(this).attr("data-value"));
    theValue = parseInt(theValue);
    //console.log(this);
    scoreCounter += theValue;
    $("#current-total").text(scoreCounter)








});

}
   
