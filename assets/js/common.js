$('.contacts__top').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	speed: 1000,
	autoplaySpeed: 5000,
	arrows: false,
	fade: true,
	asNavFor: '.contacts__sliders'
});
$('.contacts__sliders').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.contacts__top',
	focusOnSelect: true
});