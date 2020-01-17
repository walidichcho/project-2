
var map;
var placeA;
var placeB;
var mk1;
var mk2;
var distance;


function haversine_distance(mk1, mk2) {
    var R = 3958.8; // Radius of the Earth in miles
    var rlat1 = mk1.position.lat() * (Math.PI / 180); // Convert degrees to radians
    var rlat2 = mk2.position.lat() * (Math.PI / 180); // Convert degrees to radians
    var difflat = rlat2 - rlat1; // Radian difference (latitudes)
    var difflon = (mk2.position.lng() - mk1.position.lng()) * (Math.PI / 180); // Radian difference (longitudes)

    var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat / 2) * Math.sin(difflat / 2) + Math.cos(rlat1) * Math.cos(rlat2) * Math.sin(difflon / 2) * Math.sin(difflon / 2)));
    return d;
}


function initMap() {
    // The map, centered on Boston
    var center = {
        lat: 42.3601,
        lng: -71.0589
    };
    var options = {
        zoom: 15,
        scaleControl: true,
        center: center
    };

    map = new google.maps.Map(
        document.getElementById('map'), options);

    // Locations of landmarks
    google.maps.event.addDomListener(window, 'load', function () {

        var from_places = new google.maps.places.Autocomplete(document.getElementById('from_places'));
        google.maps.event.addListener(from_places, 'place_changed', function () {
            var places = from_places.getPlace();
            var address = places.formatted_address;
            var lat = parseFloat(places.geometry.location.lat());
            var lng = parseFloat(places.geometry.location.lng());
            placeA = {
                lat,
                lng
            }
            bounds = new google.maps.LatLngBounds();
            mk1 = new google.maps.Marker({
                position: placeA,
                //animation: google.maps.Animation.DROP,
                //draggable: true,
                map: map,
                zoom: 10
            });
            loc = new google.maps.LatLng(mk1.position.lat(), mk1.position.lng());
            bounds.extend(loc);
            map.fitBounds(bounds);
            map.panToBounds(bounds);
        });

        var to_places = new google.maps.places.Autocomplete(document.getElementById('to_places'));
        google.maps.event.addListener(to_places, 'place_changed', function () {
            var places = to_places.getPlace();
            var address = places.formatted_address;
            var lat = parseFloat(places.geometry.location.lat());
            var lng = parseFloat(places.geometry.location.lng());
            placeB = {
                lat,
                lng
            }
            mk2 = new google.maps.Marker({
                position: placeB,
                //animation: google.maps.Animation.DROP,
                //draggable: true,
                map: map,
                //zoom: 10
            });

        });
        //var line = new google.maps.Polyline({ path: [placeA, placeB], map: map });
        //distance = haversine_distance(mk1, mk2);
        //document.getElementById('msg').innerHTML = "Distance between markers: " + distance.toFixed(2) + " mi.";

    });


    let directionsService = new google.maps.DirectionsService();
    let directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map); // Existing map object displays directions

    // // Create route from existing points used for markers
    function create_route() {
        const route = {
            origin: placeA,
            destination: placeB,
            travelMode: 'DRIVING'
        }

        directionsService.route(route,
            function (response, status) { // anonymous function to capture directions
                if (status !== 'OK') {
                    window.alert('Directions request failed due to ' + status);
                    return;
                } else {
                    directionsRenderer.setDirections(response); // Add route to the map
                    var directionsData = response.routes[0].legs[0]; // Get data about the mapped route
                    if (!directionsData) {
                        window.alert('Directions request failed');
                        return;
                    } else {
                        document.getElementById('msg').innerHTML += " Driving distance is " + directionsData.distance.text + " (" + directionsData.duration.text + ").";
                    }
                }
            });
    };

    $("#submit").click((e) => {
        e.preventDefault();
        create_route();
    });
};

