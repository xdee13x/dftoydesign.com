$(document).ready(function(){
    $("#aang").hide();
    $("#appaTwo").hide();

    function beeLeft() {
        $("#aangMed").animate({left: "-=100"}, 2000, "swing", beeRight);
    }
    function beeRight() {
        $("#aangMed").animate({left: "+=100"}, 2000, "swing", beeLeft);
    }

    beeRight();

});


$(window).scroll(function(){
    var topNumber = $(window).scrollTop();

    $("#counter").text(topNumber)

    console.log(topNumber);


    if(topNumber>700 && topNumber<8000){
           $("#appaTwo").fadeIn();
        }

    else{
          $("#appaTwo").fadeOut();

        }

        if(topNumber<7500){
               $("#vanished").show();
            }

        else{
              $("#vanished").fadeOut();

            }

        $("#appaTwo").css({
          "top":topNumber * 0.05
        });

});
