'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by vova on 05.03.17.
 */

(function () {
	var $window = $(window);
	var $body = $('body');

	var App = function App() {
		var _this = this;

		_classCallCheck(this, App);

		this.initSliders = function () {
			var $slickSlider = $('.sl');
			var $item = $slickSlider.find('.item');

			$slickSlider.slick({
				autoplay: true,
				autoplaySpeed: 5000,
				dots: true,
				arrows: false,
				fade: true,
				pauseOnDotsHover: true,
				pauseOnFocus: false,
				pauseOnHover: false,
				speed: 1000
			});

			$item.on('click', function () {
				console.log($(this));
			});
		};

		this.buildMainVav = function () {
			console.log('nav');
		};

		this.init = function () {
			_this.initSliders();
			_this.buildMainVav();
		};

		this.handleScroll = function () {
			console.log('scroll');
		};

		this.handleResize = function () {
			console.log('resize');
		};

		this.destroy = function () {
			console.log('destriyed my app');
		};
	};

	$(function () {
		var MyApp = new App();

		MyApp.init();

		$window.on('scroll', MyApp.handleScroll).on('resize', MyApp.handleResize);
	});
})();

(function () {
	var $window = $(window);
	var $body = $('body');

	var App = function App() {
		var _this2 = this;

		_classCallCheck(this, App);

		this.initSliders = function () {
			var $slickSlider = $('.sl1');
			var $item = $slickSlider.find('.item1');

			$slickSlider.slick({
				autoplay: true,
				autoplaySpeed: 8000,
				dots: true,
				arrows: false,
				pauseOnDotsHover: true,
				pauseOnFocus: false,
				pauseOnHover: false,
				speed: 1000,
				slidesToShow: 2,
				infinite: true,
				responsive: [{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1
					}
				}]
			});

			$item.on('click', function () {
				console.log($(this));
			});
		};

		this.buildMainVav = function () {
			console.log('nav');
		};

		this.init = function () {
			_this2.initSliders();
			_this2.buildMainVav();
		};

		this.handleScroll = function () {
			console.log('scroll');
		};

		this.handleResize = function () {
			console.log('resize');
		};

		this.destroy = function () {
			console.log('destriyed my app');
		};
	};

	$(function () {
		var MyApp = new App();

		MyApp.init();

		$window.on('scroll', MyApp.handleScroll).on('resize', MyApp.handleResize);
	});
})();

$(document).ready(function () {

	$('.menu__list>.menu__drop').hide();

	$('.menu__list>a').click(function () {

		var findArticle = $(this).next();
		var findWrapper = $(this).closest('.menu__list');

		if (findArticle.is(':visible')) {
			findArticle.slideUp('300');
		} else {
			findWrapper.find('>article').slideUp('fast');
			findArticle.slideDown('fast');
		}
	});
});