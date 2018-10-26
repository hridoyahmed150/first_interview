//JQuery Module Pattern

// An object literal
var app = {
  init: function() {
    app.functionOne();
  },
  functionOne: function () {
  }
};
$("document").ready(function () {
  app.init();
});
$("document").ready(function () {

	$('#bar1').barfiller({
	  barColor: '#4caf50',
	  tooltip: true,
	  duration: 1000,
	  animateOnResize: true,
	  symbol: "%"
	});
	$('#bar2').barfiller({
	  barColor: '#2290ff',
	  tooltip: true,
	  duration: 1000,
	  animateOnResize: true,
	  symbol: "%"
	});
	$('#bar3').barfiller({
	  barColor: '#ffc107',
	  tooltip: true,
	  duration: 1000,
	  animateOnResize: true,
	  symbol: "%"
	});
	$('#bar4').barfiller({
	  barColor: '#ff5722',
	  tooltip: true,
	  duration: 1000,
	  animateOnResize: true,
	  symbol: "%"
	});
	$('#bar5').barfiller({
	  barColor: '#ffb426',
	  tooltip: true,
	  duration: 1000,
	  animateOnResize: true,
	  symbol: "%"
	});
	$('#bar6').barfiller({
	  barColor: '#34c73b',
	  tooltip: true,
	  duration: 1000,
	  animateOnResize: true,
	  symbol: "%"
	});
	$('#bar7').barfiller({
	  barColor: '#2290ff',
	  tooltip: true,
	  duration: 1000,
	  animateOnResize: true,
	  symbol: "%"
	});
	$('#bar8').barfiller({
	  barColor: '#673bb7',
	  tooltip: true,
	  duration: 1000,
	  animateOnResize: true,
	  symbol: "%"
	});
	$("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[767,1],
        pagination:false,
        transitionStyle:"fade",
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});
(function(){
	$('.custom1').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450
});
})();

    
