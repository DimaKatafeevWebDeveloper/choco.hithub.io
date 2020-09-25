jQuery(document).ready(function ($) {

   //burger
   $('.icon-menu').on('click', function () {
      $('.icon-menu').toggleClass('active') && $('.menu__list').toggleClass('show') && $('.menu__list').toggleClass('animDown');
   });

});


//цвет шапки

let scrolled;
window.onscroll = function () {
   scrolled = window.pageYOffset || document.documentElement.scrollTop;
   if (scrolled > 100) {
      $(".new-header").addClass('bg');
   }
   if (100 > scrolled) {
      $(".new-header").removeClass('bg');
   }

}


//слайдер

let mySlider = $('.slider');

mySlider.slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   dots: true,
   infinite: false,
   fade: true,
   speed: 1000,

});


//квиз
$(".banner__text").click(function () {
   $('body').addClass('lock');
   $(".quiz").addClass('active');
});

$(".quiz__burger").click(function () {
   $(".quiz").removeClass('active');
   $('body').removeClass('lock');
});


