$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").toggle('slow');
    });
    $("#flip-two").click(function(){
      $("#panel-two").toggle('slow');
    });
    $("#flip-three").click(function(){
      $("#panel-three").toggle('slow');
    });
    $("#flip-four").click(function(){
      $("#panel-four").toggle('slow');
    });
    $("#flip-five").click(function(){
      $("#panel-five").toggle('slow');
    });
    $("#mobile-menu").click(function(){
      $("#menu-mobile, #overlay-mobile").show('slide');
      $("body").css('overflow', 'hidden');
        $("body").addClass('test');
    });
    $("#overlay-mobile, #close").click(function(){
      $("#overlay-mobile, #menu-mobile").hide('slide');
      $("body").css('overflow', 'auto');
        $("body").removeClass();
    });
    $('.call-girl ul').slick({
      slidesToShow: 5,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,

  });
  });