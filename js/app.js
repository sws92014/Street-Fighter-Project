$(document).ready(function(){
    $('.sf-logo').show ("slow", function(){
        $('.sf-logo').fadeIn ("9500", function(){
         $(this).fadeOut ("5000", function(){
            $('.sf-logo').hide();
                $('.brought-by').show();
                    $('.brought-by').fadeIn ("9500", function(){
                    $(this).fadeOut ("5000", function(){
                        $('.brought-by').hide();
                });
            });
    });  

    $('.ryu_figure').mouseenter(function(){
        $('.ryu_still').hide();
        $('.ryu_ready').show();
    })
    .mouseleave(function() {
        $('.ryu_still').show();
        $('.ryu_ready').hide();
    })
    .mousedown(function(){
        playHadouken();
        $('.ryu_ready').hide();
        $('.ryu_throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1020px'},
            500,
            function(){
                $(this).hide();
                $(this).css('left', '520px');
            });
    })
    .mouseup(function(){
        $('.ryu_throwing').hide();
        $('.ryu_ready').show();
    });
    $('body').keydown(function(event){
      if (event.keyCode == 88) {
        $('.ryu_still').hide();
        $('.ryu_cool').show();
      }
    })
    .keyup(function(){
        $('.ryu_cool').hide();
        $('.ryu_ready').show();
        $('.ryu_still').show();
    })
});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();

}