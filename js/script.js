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
