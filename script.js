$(document).ready(function() {
    $(".design").click(function(effect) {
        $("#design1").toggle();
        $("#design2").toggle();
    })
    $(".development").click(function(effect) {
        $("#development1").toggle();
        $("#development2").toggle();
    });
    $(".product").click(function(effect) {
        $("#product1").toggle();
        $("#product2").toggle();
    })
    $(".image").mouseover(function(effect) {
        $(this).css("opacity","0.5")
    }).mouseout(function(){
        $(this).css("opacity","1")
    });

})