const swiper = new Swiper('.slider-main-block', {
// Optional parameters
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: '.body-main-block__arrow.swiper-button-next',
		prevEl: '.body-main-block__arrow.swiper-button-prev',
	},
});

 //Tabs

const tabNavItems = document.querySelectorAll('.tabs-deals__button');
const tabItems = document.querySelectorAll('.item-tabs');
// делегирование клика на всю страницу
 document.addEventListener("click", function(e) {        // отлеживает клики на странице
	const targetElement = e.target;                 // element for click
	let currentActiveIndex = null;
	let newActionIndex = null;
	if (targetElement.closest('.tabs-deals__button')) {  // если клик по нужному классу
		tabNavItems.forEach((tabNavItems, index ) => {
			if (tabNavItems.classList.contains('active')) {  // отсеивает все єлементі кроме активного
				currentActiveIndex = index;
				tabNavItems.classList.remove('active');
			}
			if (tabNavItems == targetElement) {
				newActionIndex = index;
			}
		});
		targetElement.classList.add('active');
		tabItems[currentActiveIndex].classList.remove('active');
		tabItems[newActionIndex].classList.add('active');
	}
});

