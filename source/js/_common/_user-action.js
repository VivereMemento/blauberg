const userActions = (function () {

	const init = function () {
			_setUpListners();
	};
	const _setUpListners = function () {
		blockUser.addEventListener('click', handdleUserAction);
	}


	// language block
	
	const blockUser = getElement('#user-block'),
		language = blockUser.querySelector('.language'),
		languageList = language.querySelector('.language__list'),
		languageListBtn = blockUser.querySelector('.user__btn_language');

	function handdleUserAction(e) {

		let target = e.target;

		if (target === languageListBtn || target.parentNode === languageListBtn) {
			openLanguageList();
		}
	}

	function openLanguageList() {
		
		if (language.clientHeight === 0) {
			language.style.height = languageList.clientHeight + 'px';
		}
	}

		
	return {
		init: init
	}

})();
userActions.init();