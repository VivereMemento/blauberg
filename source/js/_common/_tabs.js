const tabs = (function () {

	const init = function () {
			_setUpListners();
	};
	const _setUpListners = function () {
		const block = document.querySelector('.card-propduct');

		if(block) {
			tabContents[0].style.display = 'block';
			tabControler.addEventListener('click', switchTabs);
		}
			
	}

	const tabsContainer = getElement('.tabs'),
		tabControler = getElement('.tabs__controls'),
		tabContents = getAllElements('.tabs__list-item');

		function switchTabs(e) {
			e.preventDefault();
			const tabLinks = tabsContainer.querySelectorAll('.tabs__controls-link');

			let target = e.target;

			tabLinks.forEach((link, i) => {
				link.parentNode.classList.remove('active');
				tabContents[i].style.display = 'none';
				if (target === link) {
					target.parentNode.classList.add('active');
					tabContents[i].style.display = 'block';
				}
			});
		}

		
	return {
		init: init
	}

})();
 tabs.init();