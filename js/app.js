$(document).ready(function(){
    $('.ryu_figure').mouseenter(function(){
        $('.ryu_still').hide();
        $('.ryu_ready').show();
        console.log($('.ryu_ready'));
    })
    .mouseleave(function() {
        $('.ryu_still').show();
        $('.ryu_ready').hide();
    })

    .mousedown(function(event){
      console.log(event);
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
      var test = event.keyCode;
      if (test == 88) {console.log(test);}
    })
});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();

}