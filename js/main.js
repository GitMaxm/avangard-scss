/* Nav icon */
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

navBtn.onclick = function () {
	navIcon.classList.toggle('nav-icon--active');
	nav.classList.toggle('header__top-row--mobile');
	document.body.classList.toggle('no-scroll');
}


/* swiper */

const swiper2 = new Swiper('.steps__swiper', {
	// Optional parameters
	loop: false,
	spaceBetween: 30,
	slidesPerView: 1,

	// If we need pagination
	pagination: {
		el: '.steps__swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.steps__swiper-button-next',
		prevEl: '.steps__swiper-button-prev',
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		867: {
			slidesPerView: 2,
			spaceBetween: 20
		},
	}
});

