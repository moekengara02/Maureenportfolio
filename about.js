$("#guess_button").click( function() {
    var input =$("#inputbox").val();
    var value = +(input.value) || 0;
    var fav_number= "2";
    
    if(value < fav_number){
        $("p").html("Too low!");
    }
    else if(value > fav_number){
        $("p").html("Too high!");
    }
    else{
        $("p").html("You guessed it! It is" + fav_number);
    }
});
