
var goalNumber = randomGoal();
var gem1 = gemValues();
var gem2 = gemValues();
var gem3 = gemValues();
var gem4 = gemValues();
var allGems = []
allGems.push(gem1, gem2, gem3,gem4);
//console.log(allGems.length);

var wins = 0;
var losses = 0; 
//console.log(gem1,gem2,gem3,gem4);
//console.log(typeof gem1);
var scoreCounter = 0;

    function  randomGoal() {
        goalNumber = Math.floor(Math.random()*(102) + 19);
        //console.log(goalNumber);
        $("#magic-number").text(goalNumber);
    };

    function gemValues() {
        return Math.floor(Math.random()*(12) + 1);   
      
    }
   

    for (var i = 0; i < allGems.length; i++) {
        var gemPic = $("<img>");
        gemPic.addClass("gem-pic");
        gemPic.attr ("data-value",allGems[i]);

    $(".gem-pic").on("click", function () {
        var theValue = ($(this).attr("data-value"));
        theValue = parseInt(theValue);
        //console.log(this);
        scoreCounter += theValue;
        $(".current-total").text(scoreCounter)
    });


        
    }

    //console.log(gem1, gem2, gem3, gem4);
    //console.log(typeof gem1);



    //function playValues () {
        //$("#magic-number").text(goalNumber);
        
        

        
        // $("#gem1-pic").attr("data-value",gem1);
        // $("#gem2-img").attr("data-value",gem2);
        // $("#gem3-img").attr("data-value",gem3);
        // $("#gem4-img").attr("data-value",gem4);
      

   // }   

// $(".gem-image").on("click", function() {

// var gemValue = ($(this).attr("data-gemvalue"));
// gemValue = parseInt(gemValue);
// console.log(this);