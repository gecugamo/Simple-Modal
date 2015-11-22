(function IIFE($) {
	'use strict';

	// Open on click
	$(document).on('click', '.modal__open', function(e) {
		e.preventDefault();
		openModal();
	});

	// Close on modal close click
	$(document).on('click', '.modal__close', function(e) {
		e.preventDefault();
		closeModal();
	});

	// Close on esc or space
	$(document).on('keyup', function(e) {
		if (e.keyCode == 27 || e.keyCode == 32) {
			e.preventDefault();
			closeModal();
		}
	});

	// Open modal function
	function openModal() {
		if ($('.modal').is(':hidden')) {
			$('.modal').fadeIn();
		}
	}
	// Close modal function
	function closeModal() {
		if ($('.modal').is(':visible')) {
			$('.modal').fadeOut();
		}
	}
}(jQuery));
