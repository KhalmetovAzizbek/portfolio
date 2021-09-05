// fixed header
const header = document.querySelector('.header');

const fixedHeader = () => {
	(window.scrollY > (header.offsetHeight / 2)) ? header.classList.add('fixed') : header.classList.remove('fixed');
}

window.addEventListener('scroll', fixedHeader);
document.addEventListener('DOMContentLoaded', fixedHeader);

// burger menu
// const burger = document.querySelector('.burger');
// const navigation = document.querySelector('.header__nav');
const body = document.querySelector('body');
// burger.addEventListener('click', function () {
// 	burger.classList.toggle('active');
// 	navigation.classList.toggle('active');
// 	body.classList.toggle('lock');
// });

// smooth scroll
const links = document.querySelectorAll('.header__nav-link_smooth');
links.forEach(function (link) {
	link.addEventListener('click', (e) => {
		e.preventDefault();

		const href = link.getAttribute("href");
		const offsetTop = document.querySelector(href).offsetTop;

		scroll({
			top: offsetTop - header.offsetHeight,
			behavior: "smooth"
		});

		links.forEach(function (link) {
			link.classList.remove('active');
		});
		link.classList.add('active');

		// burger.classList.remove('active');
		// navigation.classList.remove('active');
		body.classList.remove('lock');
	});
});

Inputmask({ "mask": "+7 (999) 999-99-99" }).mask(document.querySelectorAll('input[name="number"]'));

//lazy
const videoPresentation = document.querySelector("#video");
let videoPresentationClicked = false;
if (videoPresentation) {
	videoPresentation.addEventListener("click", () => {
		if (!videoPresentationClicked) {
			const videoPoster = videoPresentation.querySelector("#videoPoster");
			const videoButton = videoPresentation.querySelector("#videoButton");
			let iframe = videoPresentation.dataset.iframe;

			videoButton.classList.add("loading");

			videoPresentation.insertAdjacentHTML("beforeend", iframe);
			iframe = videoPresentation.querySelector("iframe");

			let src = iframe.getAttribute("src");
			src += "?autoplay=1";
			iframe.setAttribute("src", src);

			iframe.addEventListener("load", () => {
				videoPoster.classList.add("hidden");
				setTimeout(function () {
					videoPresentation.removeChild(videoPoster);
				}, 1000);
			});

			videoPresentationClicked = true;
		}
	});
}

// checking filling of inputs
let inputs = document.querySelectorAll('.request-form__field input');
if (inputs) {
	inputs.forEach((input) => {
		input.addEventListener('change', () => {
			console.log('changing')
			input.value ? input.classList.add('filled') : input.classList.remove('filled');
		});
	});
}

// residents sliders
const residentsSliders = document.querySelectorAll('.residents__slider');
residentsSliders.forEach((residentSlider) => {
	let slider = new Swiper(residentSlider, {
		slidesPerView: 8,
		speed: 2000,
		loop: true,
		allowTouchMove: false,
		autoplay: {
			delay: 220,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
		breakpoints: {
			0: {
				slidesPerView: 2,
			},
			425: {
				slidesPerView: 4,
			},
			768: {
				slidesPerView: 6,
			},
			1200: {
				slidesPerView: 8,
			}
		}
	});
});

//
const languagesDropdown = document.querySelector('#languagesDropdown');
if (languagesDropdown) {
	languagesDropdown.addEventListener('click', function () {
		languagesDropdown.classList.toggle('active');
	});

	languagesDropdown.addEventListener('blur', function () {
		languagesDropdown.classList.remove('active');
	});
}

// 
const viewSliders = document.querySelectorAll('.view__slider');
const viewPreviews = document.querySelectorAll('.view__preview');
if (viewSliders) {
	viewSliders.forEach((viewSlider, index) => {
		let slider = new Swiper(viewSlider, {
			slidesPerView: 1,
			speed: 1000,
			allowTouchMove: false,
			// preloadImages: false,
			// lazy: {
			// 	loadOnTransitionStart: false,
			// 	loadPrevNext: false
			// },
			// watchSlidesProgress: true,
			// watchSlidesVisibility: true,
			thumbs: {
				swiper: {
					el: viewPreviews[index],
					slidesPerView: 3,
					allowTouchMove: false,
					// preloadImages: false,
					// lazy: {
					// 	loadOnTransitionStart: false,
					// 	loadPrevNext: false
					// },
					// watchSlidesProgress: true,
					// watchSlidesVisibility: true,
				}
			}
		});
	});

	// const viewSlidersImages = document.querySelectorAll('.view__slider img');
	// viewSlidersImages.forEach((image) => {
	// 	image.addEventListener('mousemove', (e) => {
	// 		// image.style.transform = "translateX(10px)";
	// 	});
	// });
}

// show / hide on view grid visible
const viewGrid = document.querySelector('#viewGrid');
if (viewGrid) {
	view.addEventListener('click', (e) => {
		const panorama = document.querySelector('#' + e.target.dataset.direction)

		if (panorama) {
			panorama.classList.add('active')
			viewGrid.classList.add('active')
			body.classList.add('lock');
		}

		if (e.target.dataset.close && e.target.dataset.close == 'panorama') {
			e.target.parentElement.classList.remove('active')
			viewGrid.classList.remove('active')
			body.classList.remove('lock');
		}
	});
}

const hideHeader = () => {
	let rect = viewGrid.getBoundingClientRect();

	if ((rect.top < header.offsetHeight) && (Math.abs(rect.top) < rect.height)) {
		header.classList.add('hidden')
	} else {
		header.classList.remove('hidden')
	}
}

window.addEventListener('scroll', hideHeader);
document.addEventListener('DOMContentLoaded', hideHeader);

// parallaxs
const rellax = new Rellax('.rellax');

const parallaxImages = document.querySelectorAll('.suggestions__photo > img, .article-card__photo > a > img');
new simpleParallax(parallaxImages, {
	scale: 1.2
});

// Bootstrap tooltip
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl, {
		animated: 'fade',
		placement: 'top',
		html: true
	});
})

// Datepickers
const datepickers = [].slice.call(document.querySelectorAll('[data-datepicker]'));
const datepickersList = datepickers.map(function (el) {
	return new Datepicker(el, {
		buttonClass: 'btn'
	});
});

//Smooth appearance
// const animItems = document.querySelectorAll('.anim-item');

// if (animItems) {
// 	const animateOnScroll = () => {
// 		animItems.forEach((animItem) => {
// 			const animItemHeight = animItem.offsetHeight;
// 			const animItemOffset = offset(animItem).top;
// 			const animStart = 4;

// 			let animItemPoint = window.innerHeight - animItemHeight / animStart;
// 			if (animItemHeight > window.innerHeight) {
// 				animItemPoint = window.innerHeight - window.innerHeight / animStart;
// 			}

// 			if ((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)) {
// 				animItem.classList.add('anim-item_active');
// 			} else {
// 				if (!animItem.classList.contains('anim-item_no-hide')) {
// 					animItem.classList.remove('anim-item_active');
// 				}
// 			}
// 		});
// 	}

// 	const offset = (el) => {
// 		const rect = el.getBoundingClientRect(),
// 			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
// 			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// 		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
// 	}

// 	window.addEventListener('scroll', animateOnScroll);

// 	setTimeout(() => {
// 		animateOnScroll();
// 	}, 300);
// }
