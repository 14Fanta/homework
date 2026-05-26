export const ourGymsSlider = () => {
	new Swiper('.product__slider', {
		slidesPerView: 'auto',
		centeredSlides: !0,
		loop: !0,
		mousewheel: { forceToAxis: !0 },
		navigation: {
			prevEl: '.our__gyms-buttons-btn_left',
			nextEl: '.our__gyms-buttons-right',
		},
	})
}
