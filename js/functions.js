$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll /6 +'%)'
  });

  $('.smoke').css({
    'transform' : 'translate(0px, '+ wScroll /4 +'%)'
  });

});
