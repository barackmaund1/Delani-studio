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
    });

    $(".image").mouseover(function(effect) {
        event.preventDefault();
        $(this).css("opacity","1")
    }).mouseout(function(){
        $(this).css("opacity","1")
    });

    // hover effect
    $("#first").hover(function(effect){
        $("#1").toggle();
    })
     $("#second").hover(function(effect){
         $("#2").toggle();
     })
     $("#third").hover(function(effect){
        $("#3").toggle();
    })
    $("#fourth").hover(function(effect){
        $("#4").toggle();
    })
    $("#fifth").hover(function(effect){
        $("#5").toggle();
    })
    $("#sixth").hover(function(effect){
        $("#6").toggle();
    })
    $("#seventh").hover(function(effect){
        $("#7").toggle();
    })
    $("#eighth").hover(function(effect){
        $("#8").toggle();
    })

    $(".header").click(function(){
        $(".image2").slideUp(2000).slideDown(2000);
    })

     
    //  form
    $("#mc-embedded-subscribe-form").submit(() => {
        var name = $("#name").value();
        var email=$("#mce-success-response").value()
        alert(
          `${name} we have received your message via ${email} Thank you for reaching out to us.`
        );
      });

})