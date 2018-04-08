/* Initalize Firebase */

var config = {
	apiKey: "AIzaSyBaHpiOzWWQ4QNOvd05zZHj1NzbZJQfO-k",
	authDomain: "transdir-69dd1.firebaseapp.com",
	databaseURL: "https://transdir-69dd1.firebaseio.com/",
	storageBucket: "gs://transdir-69dd1.appspot.com",
};

firebase.initializeApp(config);

/* Google Maps */

$(document).ready(function () {
	initMap();
});

function initMap() {
	var eugene = {
		lat: 44.050046,
		lng: -123.094962,
	}; 

	var map = new google.maps.Map(document.getElementById('mapsCanvas'), {
		zoom: 16,
		center: eugene,
	});
}
