 //First we hid the tables
 $("#hiddenBracket").children('div').hide();
//Then we create a onclick event to create the right amount of fields
$( ".two-players" ).click(function() {
    $(".bracket-2").show();
});
$( ".four-players" ).click(function() {
    $(".bracket-2, .bracket-4").show();
});
$( ".eight-players" ).click(function() {
    $(".bracket-2, .bracket-4, .bracket-8").show();
});
