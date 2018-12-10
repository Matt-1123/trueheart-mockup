//
//
//     var images =['https://picsum.photos/1400/499','https://picsum.photos/1400/500','https://picsum.photos/1400/501'];
//
// var swapImage = document.getElementById('jumbotron');
// var counter = 0;
//
// function changeImage() {
//     swapImage.style.background = images[counter];
//     counter ++;
//
// }
//
// setInterval(changeImage, 500);


$(function(){
  var hamburger = $('#hamburger');
  var mobileNav = $('#mobile-nav');
  hamburger.on('click', function(){
    hamburger.toggleClass("fa-times fa-bars");
    mobileNav.slideToggle(200).toggleClass('show');
  });
});

$(function(){

  var navToggle = $('.nav-toggle');
  var nav = $('#nav');
  var navItem = $('#nav > li');
  var subNav = $('.sub-nav'); // ul nested in navItem

  navToggle.on('click', function(){
    navToggle.toggleClass("fa-times fa-bars");
    nav.slideToggle(200).toggleClass('show');

    // to-do: close all open subnavs
  });

  $(navItem).on('click', function(){
    var el = $(this);
    el.children('.sub-nav').slideToggle(200).toggleClass('show');
    // toggle up and down arrow on nav item
    setTimeout(function() {
      el.toggleClass('expanded');
    }, 200);

    // close other open subnavs
    // if(el.siblings().children('sub-nav').hasClass("show")){
    //   el.siblings().children('sub-nav')
    //     .removeClass("show");
    //     .slideToggle(400);
    // }
  });
});
