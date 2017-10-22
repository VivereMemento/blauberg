const modalWindow = (function () {

	const init = function () {
		const block = document.querySelector('main.card-propduct');
		if(block) {
			_setUpListners();
		}
	};
	const _setUpListners = function () {
		closeModalBtn.addEventListener('click', closeModal);
		showModalBtn.addEventListener('click', showModal);		
	}

	const modal = getElement('#js-modal'),
		modalContent = modal.querySelector('#js-modal-content'),
		closeModalBtn = modal.querySelector('#js-close-btn'),
		modalImg = modal.querySelector('#js-modal-img'),
		showModalBtn = getElement('#js-show-btn'),
		slideDisplay = getElement('#js-slideshow-display');

	function closeModal() {
		modal.style.display = 'none';
	}

	function showModal() {
		let slideDisplayImg = slideDisplay.querySelector('img');
		let imgSrc = slideDisplayImg.attributes.src.value;

		modal.style.display = 'block';
		modalImg.src = imgSrc;
	}

		
	return {
		init: init
	}

})();
 modalWindow.init();