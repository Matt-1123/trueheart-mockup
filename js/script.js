$(document).ready(function() {

	$(window).on('load', function (){

		$('section#social-stream').masonry({
			columnWidth: 20,
			itemSelector: 'div.social-tile'
		})
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


});
