$(document).ready(function() {



    // reorder .img section between 320px and 480px

    $(window).on('resize', function() {
            var main = $('main').children();
            var arr = [];
            var temp;


            for (var i = 0; i < main.length; i++) {
                arr.push(main[i]);
            }

            for (var i = 0; i < arr.length; i++) {
                console.log(arr[i].childNodes)
            }

            if ($(document).outerWidth() > 320 &&
                $(document).outerWidth() < 480) {
                for (var i = 0; i < main.length; i++) {
                    for (var j = 0; j < main[i].children.length; j++) {

                    }
                }

                for (var index = 0; i < arr.)



            } else {
                $('#width').empty();
            }
        }
    });









$(function() {
    var hamburger = $('#hamburger');
    var mobileNav = $('#mobile-nav');
    hamburger.on('click', function() {
        hamburger.toggleClass("fa-times fa-bars");
        mobileNav.slideToggle(200).toggleClass('show');
    });
});



$(function() {

    var navToggle = $('.nav-toggle');
    var nav = $('#nav');
    var navItem = $('#nav > li');
    var subNav = $('.sub-nav'); // ul nested in navItem

    navToggle.on('click', function() {
        navToggle.toggleClass("fa-times fa-bars");
        nav.slideToggle(200).toggleClass('show');

        // to-do: close all open subnavs
    });

    $(navItem).on('click', function() {
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



});
