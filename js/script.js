$(document).ready(function() {

	$(window).on('load', function (){

		$('section#social-stream').masonry({
			columnWidth: 20,
			itemSelector: 'div.social-tile'
		})
	});





	$(document).on('scroll', function() {
		// const scrollPosition = window.scrollY;
		// $('.scrollY-position').html('<p>Scroll-Y Position: ' + scrollPosition + 'px</p>');

		// if(scrollPosition >= 1970 && scrollPosition <= 2450) {
			$('.content').addClass('content-border');
			$('.content>div').addClass('intx-border')

		// }	
	});

	var date  = new Date()
	var day = date.getDate()
	var month = date.getMonth() + 1;
	var year = date.getFullYear();
	var today = (month + '-' + day + '-' + year)

	$('.date').append(today);



	// $('.copy-block > .content').removeClass('copy-border')
	// .mouseenter(function() {
	// 	$(this).addClass('copy-border')
	// 	.mouseleave(function() {
	// 		$(this).removeClass('copy-border')
	// 	});
	// });





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
		items: 1,
		autoHeight: false
	});



});
