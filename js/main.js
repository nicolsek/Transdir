$(document).ready(function () {
    initFirebase(); 
    updateOrganizations();
    initMap();
});

/* Initalize Firebase */

function initFirebase() {
    var config = {
        apiKey: "AIzaSyBaHpiOzWWQ4QNOvd05zZHj1NzbZJQfO-k",
        authDomain: "transdir-69dd1.firebaseapp.com",
        databaseURL: "https://transdir-69dd1.firebaseio.com/",
        storageBucket: "gs://transdir-69dd1.appspot.com",
    };

    firebase.initializeApp(config);
}

/* Google Maps */

var map;

function initMap() {
	var eugene = {
		lat: 44.050046,
		lng: -123.094962,
	}; 

	map = new google.maps.Map(document.getElementById('mapsCanvas'), {
		zoom: 6,
		center: eugene,
	});

    addMarker(eugene, "Hometown");
}

function addMarker(loc, title) {
    var marker = new google.maps.Marker({
        position: loc,
        map: map,
        title: title,
        animation: google.maps.Animation.DROP,
    }); 

    console.log("[*] Added marker " + title + " @ " + loc.lat + " : " + loc.lng); 
}

/* Firebase Database */

function updateOrganizations() {
    var orgsRef = firebase.database().ref('organizations');

    orgsRef.once('value').then(function(snapshot) {
        var orgObj;

        /* Object Format
            lat, lng: The location of the organization or individual in computer friendly speak.
            name: The name of the organization or individual.
            desc: Description of the organization or individual.
            location: The actual English location of the organization or individual.
            type: The type, surgeons, therapists, doctors, endos. 
        */

        for (var key in snapshot.val()) {
            orgObj = snapshot.val()[key];

            var loc = {
                lat: orgObj.lat,
                lng: orgObj.lng, 
            };

            var title = orgObj.name;

            addMarker(loc, title);
        }
    });
}
