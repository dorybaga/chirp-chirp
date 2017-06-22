function chirp(n){
  if(n === 1){                              //n = 3 ; n = 2; n = 1 "chirp"
    return "chirp";
  }
    return "chirp " + chirp(--n) ;          //"chirp" + chirp(2) ; "chirp" "chirp" ;
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});


