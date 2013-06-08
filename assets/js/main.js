var navContainer = $('.nav-container'),
	timeline = navContainer.find('.timeline'),
	measure = $('.measure-timeline'),
	windw = $(window),
	mobile;

//section positions
var sectionPos = [];
	sectionPos.info				= $('#info').offset().top -150,
	sectionPos.inleiding		= $('#inleiding').offset().top -150,
	sectionPos.doelstellingen	= $('#doelstellingen').offset().top -150,
	sectionPos.veiligbestellen	= $('#veiligbestellen').offset().top -150,
	sectionPos.bionature		= $('#bionature').offset().top -150,
	sectionPos.pukkelpop		= $('#pukkelpop').offset().top -150,
	sectionPos.bdri				= $('#bdri').offset().top -150,
	sectionPos.bdrb				= $('#bdrb').offset().top -150,
	sectionPos.bdrf				= $('#bdrf').offset().top -150,
	sectionPos.flickr			= $('#flickr').offset().top -150,
	sectionPos.zend				= $('#zend').offset().top -150,
	sectionPos.git				= $('#git').offset().top -150,
	sectionPos.eindreflectie	= $('#eindreflectie').offset().top -150;

function isMobile() {
	if (windw.width() < 700) {
		mobile = true;
	} else {
		mobile = false;
	}

	windw.resize(function() {
		if (windw.width() < 700) {
			mobile = true;
		} else {
			mobile = false;
		}
	});
}

var nav = {
	init: function() {

		//open/close nav on mobile
		nav.pressButton();

		//scroll to section when item is selected
		nav.choose();

		//reset navigation on resize
		nav.resize();
	},

	pressButton: function() {
		navContainer.find('.btn').on('click', function(e) {
			e.preventDefault();
			if (navContainer.hasClass('open')) {
				nav.close();
			} else {
				nav.open();
			}
		});
	},

	close: function() {
		if (mobile) {
			navContainer.height(57);
			navContainer.toggleClass('open');
		}
	},

	open: function() {
		if (mobile) {
			timeline.css('margin-top', 0);
			navContainer.height(measure.outerHeight(true));
			navContainer.toggleClass('open');
		}
	},

	choose: function() {
		timeline.find('a').on('click', function(e) {
			e.preventDefault();
			var section = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(section).position().top - 50
			}, 2000);
			nav.close();
		});
	},

	resize: function() {
		windw.resize(function() {
			if (!mobile) {
				navContainer.removeClass('open').css('height', '100%');
			} else if (mobile) {
				navContainer.removeClass('open').height(60);
			}
		});
	}
};

var scrollPage = {
	init: function() {

		windw.scroll(function() {
			scrollPage.info();
			scrollPage.inleiding();
			scrollPage.doelstellingen();
			scrollPage.veiligbestellen();
			scrollPage.bionature();
			scrollPage.pukkelpop();
			scrollPage.bdri();
			scrollPage.bdrb();
			scrollPage.bdrf();
			scrollPage.flickr();
			scrollPage.zend();
			scrollPage.git();
			scrollPage.eindreflectie();
		});

	},

	info: function() {
		if (windw.scrollTop() >= sectionPos.info && windw.scrollTop() < sectionPos.inleiding) {
			if (!timeline.find('.info').hasClass('active')) {
				timeline.find('.active').removeClass('active');
				timeline.find('.info').addClass('active');
			}
		}
	},

	inleiding: function() {
		if (windw.scrollTop() >= sectionPos.inleiding && windw.scrollTop() < sectionPos.doelstellingen) {
			if (!timeline.find('.inleiding').hasClass('active')) {
				timeline.find('.active').removeClass('active');
				timeline.find('.inleiding').addClass('active');
			}
		}
	},

	doelstellingen: function() {
		if (windw.scrollTop() >= sectionPos.doelstellingen && windw.scrollTop() < sectionPos.veiligbestellen) {
			if (!timeline.find('.doelstellingen').hasClass('active')) {
				timeline.find('.active').removeClass('active');
				timeline.find('.doelstellingen').addClass('active');
			}		}
	},

	veiligbestellen: function() {
		if (windw.scrollTop() >= sectionPos.veiligbestellen && windw.scrollTop() < sectionPos.bionature) {
			if (!timeline.find('.veiligbestellen').hasClass('active')) {
				timeline.find('.active').removeClass('active');
				timeline.find('.veiligbestellen').addClass('active');
			}		}
	},

	bionature: function() {
		if (windw.scrollTop() >= sectionPos.bionature && windw.scrollTop() < sectionPos.pukkelpop) {
			if (!timeline.find('.bionature').hasClass('active')) {
				timeline.find('.active').removeClass('active');
				timeline.find('.bionature').addClass('active');
			}		}
	},

	pukkelpop: function() {
		if (windw.scrollTop() >= sectionPos.pukkelpop && windw.scrollTop() < sectionPos.bdri) {
			if (!timeline.find('.pukkelpop').hasClass('active')) {
				timeline.find('.active').removeClass('active');
				timeline.find('.pukkelpop').addClass('active');
			}		}
	},

	bdri: function() {
		if (windw.scrollTop() >= sectionPos.bdri && windw.scrollTop() < sectionPos.bdrb) {
			if (!timeline.find('.bdri').hasClass('active')) {
				timeline.find('.active').removeClass('active');
				timeline.find('.bdri').addClass('active');
			}		}
	},

	bdrb: function() {
		if (windw.scrollTop() >= sectionPos.bdrb && windw.scrollTop() < sectionPos.bdrf) {
			if (!timeline.find('.bdrb').hasClass('active')) {
				timeline.find('.active').removeClass('active');
				timeline.find('.bdrb').addClass('active');
			}		}
	},

	bdrf: function() {
		if (windw.scrollTop() >= sectionPos.bdrf && windw.scrollTop() < sectionPos.flickr) {
			if (!timeline.find('.bdrf').hasClass('active')) {
				timeline.find('.active').removeClass('active');
				timeline.find('.bdrf').addClass('active');
			}		}
	},

	flickr: function() {
		if (windw.scrollTop() >= sectionPos.flickr && windw.scrollTop() < sectionPos.zend) {
			if (!timeline.find('.flickr').hasClass('active')) {
				timeline.find('.active').removeClass('active');
				timeline.find('.flickr').addClass('active');
			}		}
	},

	zend: function() {
		if (windw.scrollTop() >= sectionPos.zend && windw.scrollTop() < sectionPos.git) {
			if (!timeline.find('.zend').hasClass('active')) {
				timeline.find('.active').removeClass('active');
				timeline.find('.zend').addClass('active');
			}		}
	},

	git: function() {
		if (windw.scrollTop() >= sectionPos.git && windw.scrollTop() < sectionPos.eindreflectie) {
			if (!timeline.find('.git').hasClass('active')) {
				timeline.find('.active').removeClass('active');
				timeline.find('.git').addClass('active');
			}		}
	},

	eindreflectie: function() {
		if (windw.scrollTop() >= sectionPos.eindreflectie) {
			if (!timeline.find('.eindreflectie').hasClass('active')) {
				timeline.find('.active').removeClass('active');
				timeline.find('.eindreflectie').addClass('active');
			}		}
	}
};

$(document).ready(function(){

	//determine if screen is mobile or not
	isMobile();

	//initialise nav functions
	nav.init();

	//change navigation based on scroll position
	scrollPage.init();

	$(".fancybox").fancybox();

});