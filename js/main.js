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

    addMarker(eugene);
}

function addMarker(loc, style) {
    var marker = new google.maps.Marker({
        position: loc,
        map: map,
    }); 

    console.log("[*] Added marker @ " + loc.lat + " : " + loc.lng); 
}

/* Firebase Database */

function updateOrganizations() {
    var orgsRef = firebase.database().ref('organizations');

    orgsRef.once('value').then(function(snapshot) {
        var orgObj;

        for (var key in snapshot.val()) {
            orgObj = snapshot.val()[key];

            loc = {
                lat: orgObj.lat,
                lng: orgObj.lng,
            };

            addMarker(loc);
        }
    });
}
