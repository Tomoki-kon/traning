$(function() {

  $('.your-class').slick({
    infinite: true,
    autoplay: true,
    autoplayspeed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  $('#menu-bar').click(function(){

    if($('.menu-area').hasClass('open')){

       $('.menu-area').removeClass('open');

       $('.menu-area').slideUp();


    }else{

       $('.menu-area').addClass('open');

       $('.menu-area').slideDown();

    }

  });

  $('#back-to-top').hide();

  $(window).scroll(function(){

    if($(this).scrollTop() > 60) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });

  $('#back-to-top').click(function(){

    $('html,body').animate({
      scrollTop:0
    },500);
    return false;
  });

});
