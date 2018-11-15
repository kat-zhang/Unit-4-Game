// $(document).ready(function() {
    
    var goalNumber 
    var gem1
    var gem2 
    var gem3 
    var gem4 
    
    var scoreCounter = 0;
    var wins = 0;
    var losses = 0; 

  
    $("#current-total").text(scoreCounter);
    $("#win-total").text("Wins: " + wins);
    $("#loss-total").text("Losses: " + losses);
    

    function  randomGoal() {
        goalNumber = Math.floor(Math.random()*(102) + 19);
        //console.log(goalNumber);
        $("#win-number").text(goalNumber);
    };
    
    function gemValues() {
        gem1 = Math.floor(Math.random()*(12) + 1);  
        gem2 = Math.floor(Math.random()*(12) + 1);   
        gem3 = Math.floor(Math.random()*(12) + 1);   
        gem4 = Math.floor(Math.random()*(12) + 1);   
        
    }
    

    for (let i = 0; i < 4; i++) {
        var images = ["#gem1-image","#gem2-image","#gem3-image","#gem4-image"];
        $(images).attr("data-vale", gem1);
        $(images).attr("data-value", gem2);
        $(images).attr("data-value", gem3);
        $(images).attr("data-value", gem4);

    }  
    
    $(".gempic").on("click", function(){
        
        var theValue = ($(this).attr("data-value"));
        theValue = parseInt(theValue);
        scoreCounter += theValue;
        $("#current-total").text(scoreCounter);

        if (scoreCounter === goalNumber) {
            wins++; 
            $("#win-total").text("Wins: " + wins);
        } else if (scoreCounter > goalNumber) {
            lossess++; 
            $("#loss-total").text("Losses: " + losses);
        };

        if (scoreCounter >= goalNumber) {
            randomGoal();
            gemValues();
            scoreCounter.push("0");
            scoreCounter.parseInt(scoreCounter);

        }
        



    });

// });
/// if (scoreCounter === goalNumber) >> wins++
/// else if (scoreCounter > goalNumber) >> lossess++
/// if (scoreCounter >= goalNumber) >> new random values:
      // call randomGoal() call gemValues()
      // set scoreCounter to zero


















