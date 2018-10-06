

// Define a markerSize function that will give each city a different radius based on its population
function markerSize(population) {
  return population / 40;
}

// Each city object contains the city's name, location and population
var cities = [
  {
    name: "Union Station",
    location: [38.8973, -77.0063],
    rank: 1
  },
  {
    name: "Lincoln Memorial",
    location: [38.8893, -77.0502],
    rank: 2
  },
  {
    name: "Washington Monument",
    location: [38.8895, -77.0353],
    rank: 3
  },
  {
    name: "Dupont Circle",
    location: [38.9097, -77.0433],
    rank: 4
  },
  {
    name: "P ST NW",
    location: [38.9094, -77.0335],
    rank: 5
  },
  {
    name: "U St Cooridoor",
    location: [38.9181132,-77.0341431],
    rank: 6
  },
  {
    name: "Thomas Circle",
    location: [38.9053664,-77.0343425],
    rank: 7
  },
  {
    name: "Jefferson Memorial",
    location: [38.9181132,-77.0341431],
    rank: 8
  },
  {
    name: "New Hampshire Ave & T ST NW",
    location: [38.9155803,-77.0400855],
    rank: 9
  },
  {
    name: "Eastern Market Metro",
    location: [38.8842471,-76.9979807],
    rank: 10
  },
];
 // create custom icon
 var firefoxIcon = L.icon({
  iconUrl: 'cb.png',
  iconSize: [38, 95], // size of the icon
  });

// create marker object, pass custom icon as option, add to map         
// var marker = L.marker([43.64701, -79.39425], {icon: firefoxIcon}).addTo(map);
 
// An array which will be used to store created cityMarkers
 var cityMarkers = [];


// Loop through the cities array and create one marker for each city object
for (var i = 0; i < cities.length; i++) {
  var stations = L.marker(cities[i].location, {
            icon:  firefoxIcon
    // fillOpacity: 0.75,
    //  color: "white",
    // fillColor: "purple",
     // Setting our circle's radius equal to the output of our markerSize function
     // This will make our marker's size proportionate to its population
    // radius: markerSize(cities[i].population)

   }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>rank: " + cities[i].rank + "</h3>");
   cityMarkers.push (stations)
 }

// Add all the cityMarkers to a new layer group.
// Now we can handle them as one group instead of referencing each individually
var cityLayer = L.layerGroup(cityMarkers);

//add monument layer 
//create array 
//built markers, added into array 
//var cityLayer = L.layerGroup(cityMarkers);
//add new layer to overlay maps




// Overlays that may be toggled on or off
var overlayMaps = {
  station: cityLayer
};

// Create a map object
var myMap = L.map("map", {
  center: [38.9097, -77.0433],
  zoom: 12.5,
  layers: cityLayer
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);

L.control.layers(null, overlayMaps).addTo(myMap);





// Loop through the cities array and create one marker for each city object
//for (var i = 0; i < cities.length; i++) {
 // L.circle(cities[i].location, {
   // fillOpacity: 0.75,
    // color: "white",
   // fillColor: "purple",
    // Setting our circle's radius equal to the output of our markerSize function
    // This will make our marker's size proportionate to its population
  //  radius: markerSize(cities[i].population)
  //}).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Population: " + cities[i].population + "</h3>").addTo(myMap);
//}
