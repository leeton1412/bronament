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
//$( "#p1").click(function(){
  //  var value = $("#player-1").val();
   // $("#win-2").html(value);
//});
function tournamentMove1(){
    var playersName = document.getElementById("player-1").value
    document.getElementById("win-1").value = playersName;
    console.log(playersName)
}
function tournamentMove2(){
    var playersName = document.getElementById("player-2").value
    document.getElementById("win-1").value = playersName;
    console.log(playersName)
}
function tournamentMove3(){
    var playersName = document.getElementById("player-3").value
    document.getElementById("win-2").value = playersName;
    console.log(playersName)
}
function tournamentMove4(){
    var playersName = document.getElementById("player-4").value
    document.getElementById("win-2").value = playersName;
    console.log(playersName)
}