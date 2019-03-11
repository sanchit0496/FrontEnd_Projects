$(document).ready(function(){
  $("#flip1").click(function(){
    $("#panel1").fadeIn();
    $("#panel1").fadeIn("slow");
    $("#panel1").fadeIn(15000);
    $("#panel1").toggle();
  });
   $("#flip2").click(function(){
    $("#panel1").fadeOut();
    $("#panel2").fadeIn();
    $("#panel2").fadeIn("slow");
    $("#panel2").fadeIn(15000);  
    $("#panel2").toggle();
  });
});

