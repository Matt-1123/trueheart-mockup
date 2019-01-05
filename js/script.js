$(document).ready(function() {

	$(window).on('load', function (){

		$('section#social-stream').masonry({
			columnWidth: 20,
			itemSelector: 'div.social-tile'
		})
	});



	// Rotate Cheveron

	$(window).on('scroll', function(){
		var scrolled = window.scrollY;
		var scrollable = document.documentElement.scrollHeight - window.innerHeight;
		var chervron = $('.fa-chevron-down');

		scrolled === scrollable ? chervron.addClass('rotate') : chervron.removeClass('rotate');
	});


	var date  = new Date()
	var day = date.getDate()
	var month = date.getMonth() + 1;
	var year = date.getFullYear();
	var today = (month + '-' + day + '-' + year)

	$('.date').append(today);



	$('.fa-thumbs-up')
	.mousedown(function(){
		$(this).addClass('scale')
		.toggleClass('thumb-clicked')
	})
	.mouseup(function(){
		$(this).removeClass('scale')
	});




	$('.fa-heart')
	.mousedown(function(){
		$(this).addClass('scale')
		.toggleClass('heart-clicked')
	})
	.mouseup(function(){
		$(this).removeClass('scale')
	});


	$(function(){
		var hamburger = $('#hamburger');
		var nav = $('#desktop-nav');
		hamburger.on('click', function(){
			hamburger.toggleClass("fa-bars fa-times");
			nav.toggleClass('show');
		});
	});

	// owl carourel
	$(".owl-carousel").owlCarousel({
		loop: true,
		nav: true,
		items: 1,
		autoHeight: false
	});




// ---------------------------------------------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------

var section = $('section');
var chervron = $('.fa-chevron-down')

chervron.click(function (){
    for (i in section) {
        chervron.attr('href', section[i])
    }
	
});



particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 380,
      "density": {
        "enable": true,
        "value_area": 2000
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": .2,
        "opacity_min": 0.8,
        "sync": false
      }
    },
    "size": {
      "value":15,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 3
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 1
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});







});
