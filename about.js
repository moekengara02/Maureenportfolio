$("#guess_button").click( function() {
    var input =$("#inputbox").val();
    
    var fav_number= "2";
    
    if(input < fav_number){
        $("p").html("Too low!");
    }
    else if(input > fav_number){
        $("p").html("Too high!");
    }
    else{
        $("p").html("You guessed it! It is" + fav_number);
    }
});


$("#submit").click( function() {
  if (document.getElementById('B').checked)
    {
        alert("You've got it! Great Job!");
    }
    else
    {
       alert("Nope! Try again."); 
    } 
  
});

$("#submit2").click( function() {
  if (document.getElementById('F').checked)
    {
        alert("You've got it! Great Job!");
    }
    else
    {
       alert("Nope! Try again."); 
    } 
  
});
