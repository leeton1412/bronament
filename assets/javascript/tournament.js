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
$( "#p1").click(function(){
    $("#round-2").val("Hello");
});
