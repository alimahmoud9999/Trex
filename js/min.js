$(document).ready(function() {
  //padding Top body

  $('body').css('paddingTop', $('.navbar').innerHeight());

  // Function Add Class Active In Navbar
  $('.navbar-nav li').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');

    // var namee = $(this).text();
    // console.log(namee);
  });

  // Navbar Scroll
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".navbar").css("box-shadow", "0 5px 15px rgba(0,0,0,8%)");
    } else {
      $(".navbar").css("box-shadow", "0 0 0 rgba(0,0,0,8%)");
    }
  })

  //Tabs Content sec3

  $('.box-tab').on('click', function() {
    var myid = $(this).attr('id');
    // console.log(myid);
    $('.content-all .content-sec3').hide();
    $("#" + myid + "-content").fadeIn();
  });

  ////// Add Class and REmove Class box-tab
  $('.box-tab').on('click', function() {
    $('.box-tab').children('h3').addClass('active');
    $('.box-tab').children('h3').removeClass('active');
    $(this).children('h3').addClass('active');
  });

  $('.box-tab .div-img').on('click', function() {
    $('.box-tab .div-img').children('.img2').hide();
    $('.box-tab .div-img').children('.img1').show();
    $(this).children('.img1').hide();
    $(this).children('.img2').show();
  });

  //For Mopile Screen
  $('.box-tab2').on('click', function() {
    var myid = $(this).attr('id');
    // console.log(myid);
    $('.content-alll .content-sec3').hide();
    $("#" + myid + "-content1").fadeIn();
  });

  $('.box-tab2').on('click', function() {
    $('.box-tab2').children('h3').addClass('active');
    $('.box-tab2').children('h3').removeClass('active');
    $(this).children('h3').addClass('active');
  });

  $('.box-tab2 .div-img').on('click', function() {
    $('.box-tab2 .div-img').children('.img2').hide();
    $('.box-tab2 .div-img').children('.img1').show();
    $(this).children('.img1').hide();
    $(this).children('.img2').show();
  });

  //// sync Navbar Links with section
  $('.navbar-nav li a').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop : $('#' + $(this).data('scroll')).offset().top -100
    },1000);
    console.log($(this).data('scroll'));
  });



      // $(window).scroll(function(){
      //   $('section').each(function(){
      //     if ($(window).scrollTop() > $(this).offset().top) {
      //       var blockId = $(this).attr('id');
      //       $('.navbar-nav li').removeClass('active');
      //       $('.navbar-nav li[data-scroll = "' + blockId +'"] ').addClass('active');
      //     }
      //   });
      //
      // });

      //Wow Js

      new WOW().init();

});

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
  autoplay:true,
    margin:10,
    responsiveClass:true,

    responsive:{
        0:{
            items:1.9,
            nav:false,
            margin:30
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:6,
            nav:false,
            loop:false
        }
    }
});
});
