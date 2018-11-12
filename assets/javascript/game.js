
var goalNumber =
var currentTotal =
var gem1 =
var gem2 =
var gem3 =
var gem4 =
var winCount =
var lossCount =


var goalNumber = Math.floor(Math.random() * (120-19 +1 )) + 19;
console.log("GOAL",goalNumber);


functon gemValue(max,min) {
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

    gem1 =  Math.floor(Math.random() * (12)) + 12;
    gem2 =  Math.floor(Math.random() * (12)) + 12;
    gem3 =  Math.floor(Math.random() * (12)) + 12;
    gem4 =  Math.floor(Math.random() * (12)) + 12;
    console.log("GEM 1",gem1);
    console.log("GEM 2",gem2);
    console.log("GEM 3",gem3);
    console.log("GEM 4",gem4);
}