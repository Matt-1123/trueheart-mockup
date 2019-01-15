$(document).ready(function() {

	$(window).on('load', function (){

		$('section#social-stream').masonry({
			columnWidth: 20,
			itemSelector: 'div.social-tile'
		})
	});



	$('.modal, .overlay').addClass('hide-modal')

	


	$(window).scroll(function (){
		let scrolled = window.scrollY;
		let scrollable = document.documentElement.scrollHeight - window.innerHeight;
	
		if (scrolled === scrollable) {
			$('.modal, .overlay')
			.removeClass('hide-modal')
			.addClass('show-modal')
			.fadeIn(250)
		}
	});

	$('.fa-window-close').on('click', function (){
		$('.modal, .overlay')
		.removeClass('show-modal')
		.addClass('hide-modal');
	});


	// var date  = new Date()
	// var day = date.getDate()
	// var month = date.getMonth() + 1;
	// var year = date.getFullYear();
	// var today = (month + '-' + day + '-' + year)

	// $('.date').append(today);



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
		var navLinks = $('#desktop-nav');
		var nav = $('nav');
		hamburger.on('click', function(){
			hamburger.toggleClass("fa-bars fa-times");
			navLinks.toggleClass('show');
			nav.toggleClass('showSubnav');
		});
	});

	// owl carourel
	$(".owl-carousel").owlCarousel({
		loop: true,
		items: 1,
		autoHeight: false
	});



});
