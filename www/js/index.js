var app = {
	// Application Constructor
	initialize: function() {
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicity call 'app.receivedEvent(...);'
	onDeviceReady: function() {
		app.receivedEvent('deviceready');
	},
	// Update DOM on a Received Event
	receivedEvent: function(id) {
		Zepto(function($){
			$('.splash').hide();
			$('#hello').show();
			$('.card').swipeLeft(function() {
				var next = $(this).next('.card').filter('.card');
				if (next.length <= 0) return;

				$(this).addClass('left').removeClass('show');
				next.removeClass('right').addClass('show');
			}).swipeRight(function() {
				var next = $(this).prev('.card').filter('.card');
				if (next.length <= 0) return;

				$(this).addClass('right').removeClass('show');
				next.removeClass('left').addClass('show');
			});
		});
	}
};
