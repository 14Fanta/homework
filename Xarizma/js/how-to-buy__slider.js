export const howToBuySlider = () => {
	new Swiper('.how-to-buy__swiper', {
		slidesPerView: '5',
		centeredSlidesBounds: !0,
		loop: !0,
		scrollbar: !0,
		grabCursor: !0,
		spaceBetween: 88,
		effect: 'coverflow',
		coverflowEffect: { rotate: 0, slideShadows: !0 },
		mousewheel: { forceToAxis: !0 },
		navigation: {
			prevEl: '.how-to-buy__slider__btn-prev',
			nextEl: '.how-to-buy__slider__btn-next',
		},
		speed: 400,
		breakpoints: {
			0: { slidesPerView: 1.1, spaceBetween: 10 },
			460: { slidesPerView: 1.5, spaceBetween: 10 },
			768: { slidesPerView: 2, spaceBetween: 20 },
			1024: { slidesPerView: 3, spaceBetween: 30 },
			1580: { slidesPerView: 5, spaceBetween: 30 },
		},
	})
}
