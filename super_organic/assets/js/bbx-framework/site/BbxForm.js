"use strict";

var BbxForm = function(form) {

	var _active = false, processing = false;

	var submitButton =		form.ext.select('.bbx-submit');
	var resultsContainer =	form.ext.select('.form-results-container');
	var resultsOriginText =	resultsContainer ? resultsContainer.innerHTML : '';
	var resultClass;
	var inputs =			form.ext.selectAll('input, textarea') || [];
	var inputsLength =		inputs.length;

	// Config
	var submitButtonAnimation = 2000;

	var onSubmit = function(e) {
		if (e) e.preventDefault();
		if (processing) return;

		processing = true;

		if (submitButton.bbxProgressButton) submitButton.bbxProgressButton.setProgress();

		form.ext.addClass('bbx-form-submitting');
		Loader.post(form.ext.attr('action'), Util.serializeForm(form), onComplete);
	}

	var onComplete = function(res) {
		processing = false;

		if (submitButton.bbxProgressButton) submitButton.bbxProgressButton.setProgress(1);

		if (res.success) clearFields();

		if (resultsContainer) {
			resultsContainer.innerHTML = res.msg;
			resultClass = res.success ? 'success' : 'error';
			resultsContainer.ext.addClass(resultClass);
			Util.delay(showOriginText, 2000)
		} else {
			if (!res.success) {
				alert('There was an error submitting the form.');
			}
		}
	}

	var showOriginText = function() {
		if (resultsContainer) {
			resultsContainer.innerHTML = resultsOriginText;
			resultsContainer.ext.removeClass(resultClass);
			resultClass = '';
		}
	}

	var clearFields = function() {
		for (var i = 0; i < inputsLength; i++) {
			inputs[i].value = '';
		}
	}

	var onSubmitButtonClick = function(e) {
		if (e) e.preventDefault();
		onSubmit();
	}

	form.addEventListener('submit', onSubmit);
	if (submitButton) submitButton.addEventListener('click', onSubmitButtonClick);

	return form;
}
;
