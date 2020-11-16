 //First we hid the tables
 $("#hiddenBracket").children('div').hide();
//Then we create a onclick event to create the right amount of fields
$( ".two-players" ).click(function() {
    $("#hiddenBracket").children('div').hide();
    $(".bracket-2").show("slow");
});
$( ".four-players" ).click(function() {
    $("#hiddenBracket").children('div').hide();
    $(".bracket-2, .bracket-4").show("slow");
    
});
$( ".eight-players" ).click(function() {
    $("#hiddenBracket").children('div').hide();
    $(".bracket-2, bracket-4").hide();
    $(".bracket-2, .bracket-4, .bracket-8").show("slow");
});

//We will now create a click function to move each name

function tournamentMove1(){
    var playersName = document.getElementById("player-1").value;
    document.getElementById("win-1").value = playersName;
    console.log(playersName);;
}
function tournamentMove2(){
    var playersName = document.getElementById("player-2").value;
    document.getElementById("win-1").value = playersName;
    console.log(playersName);
}
function tournamentMove3(){
    var playersName = document.getElementById("player-3").value;
    document.getElementById("win-2").value = playersName;
    console.log(playersName);
}
function tournamentMove4(){
    var playersName = document.getElementById("player-4").value;
    document.getElementById("win-2").value = playersName;
    console.log(playersName);
}
function tournamentMove5(){
    var playersName = document.getElementById("player-5").value;
    document.getElementById("win-3").value = playersName;
    console.log(playersName);
}
function tournamentMove6(){
    var playersName = document.getElementById("player-6").value;
    document.getElementById("win-3").value = playersName;
    console.log(playersName);
}
function tournamentMove7(){
    var playersName = document.getElementById("player-7").value;
    document.getElementById("win-4").value = playersName;
    console.log(playersName);
}
function tournamentMove8(){
    var playersName = document.getElementById("player-8").value;
    document.getElementById("win-4").value = playersName;
    console.log(playersName);
}
function tournamentMove8(){
    var playersName = document.getElementById("player-8").value;
    document.getElementById("win-4").value = playersName;
    console.log(playersName);
}

function tournamentMove12(){
    var playersName = document.getElementById("win-1").value;
    document.getElementById("final-1").value = playersName;
    console.log(playersName);
}
function tournamentMove11(){
    var playersName = document.getElementById("win-2").value;
    document.getElementById("final-1").value = playersName;
    console.log(playersName);
}

function tournamentMove9(){
    var playersName = document.getElementById("win-3").value;
    document.getElementById("final-2").value = playersName;
    console.log(playersName);
}

function tournamentMove10(){
    var playersName = document.getElementById("win-4").value;
    document.getElementById("final-2").value = playersName;
    console.log(playersName);
}

function finalmove(){
    var playersName = document.getElementById("final-1").value;
    document.getElementById("ultimate-champion").value = playersName;
    console.log(playersName);
}

function finalmove2(){
    var playersName = document.getElementById("final-2").value;
    document.getElementById("ultimate-champion").value = playersName;
    console.log(playersName);
}