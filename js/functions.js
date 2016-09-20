$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.logo').css({
    'transform' : 'translate(0px, '+ -wScroll /40 +'%)'
  });

  if(wScroll > $('#about').offset().top - ($(window).height() / 1)) {

    $('#about section').each(function(i){

      setTimeout(function(){
        $('#about section').eq(i).addClass('is-showing');
      }, 1000 * (i+1));
    });

  }
});
