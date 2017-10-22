const addCoutnInput = (function () {

	const init = function () {
			_setUpListners();
	};
	const _setUpListners = function () {
		const block = document.querySelector('.card-propduct');

		if(block) {
			if(slideShowItms.length === 1) {
				getElement('.slideshow__list-wrap').style.display = 'none';
			}
			slideShowList.insertBefore(slideShowList.lastElementChild, slideShowList.firstElementChild);

			controslBtns.addEventListener('click', moveSlides);
			slideShowList.addEventListener('click', slideToDisplay);
		}
			
	}

	const slideshowDisplay = getElement('#js-slideshow-display'),	
		slideShowList = getElement('#js-slideshow-list'),
		slideShowItms = getAllElements('.slideshow__item'),
		controslBtns = getElement('#js-control-btns');

	function moveSlides(e) {
		e.preventDefault();

		const nextBtn = controslBtns.querySelector('#js-next--btn'),
			prevBtn = controslBtns.querySelector('#js-prev--btn');

		let firstChild = slideShowList.firstElementChild,
			lastChild = slideShowList.lastElementChild;		

		if (e.target === nextBtn) {	
			slideShowList.appendChild(firstChild);
		}

		if (e.target === prevBtn) {
			slideShowList.insertBefore(lastChild, firstChild);
		}
	}

	function slideToDisplay(e) {
		const slideshowDisplayImg = slideshowDisplay.querySelector('img');
		e.preventDefault();
		slideShowItms.forEach(item => {
			let img = item.querySelector('img');
			if (e.target === img) {
				let imgSrc = img.attributes.src.value;

				slideshowDisplayImg.src = imgSrc;
			}
		})
	}
		
	return {
		init: init
	}

})();

addCoutnInput.init();