// Creating map object
var map = L.map("map", {
  center: [38.9072, -77.0369],
  zoom: 12
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(map);

var geoJSONdata = "../../washington_DC_censustracts.json";

// Grabbing our GeoJSON data..
d3.json(geoJSONdata, function(data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data).addTo(map);
});

