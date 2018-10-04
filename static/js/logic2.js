
mapboxgl.accessToken = API_KEY;
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mplusc/cjmu3ukf82agd2stn1miqdz2b', // stylesheet location
    center: [-77.037416, 38.907095], // starting position [lng, lat]
    zoom: 11.46 // starting zoom
});
