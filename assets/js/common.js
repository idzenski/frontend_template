$('.team__top').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	speed: 1000,
	autoplaySpeed: 5000,
	arrows: false,
	fade: true,
	asNavFor: '.team__sliders'
});
$('.team__sliders').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.team__top',
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				arrows: false
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
				arrows: false
			}
		}
	]
});