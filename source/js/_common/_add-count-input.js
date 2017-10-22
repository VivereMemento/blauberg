const addCoutnInput = (function () {

	const init = function () {
		const block = document.querySelector('main.card-propduct');

		if(block) {
			_setUpListners();
		}

	};
	const _setUpListners = function () {
			wrapInput.addEventListener('click', addCount);
			console.log("HELLLLLLLLO")
	}

	const wrapInput = getElement('#js-add-count');
		


	function addCount(e) {
		const input = wrapInput.querySelector('#js-add-count > input'),
			inputBtnUp = wrapInput.querySelector('#js-input__btn-up'),
			inputBtnDown = wrapInput.querySelector('#js-input__btn-down');

		let count = parseFloat(input.value);

		if (e.target === inputBtnUp) {
			count++;
			input.value = count;
		}

		if (e.target === inputBtnDown) {
			if (count === 0) {
				return;
			}
			count--;
			input.value = count;
		}
	} 
		
	return {
		init: init
	}

})();

addCoutnInput.init();