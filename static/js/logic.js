mapboxgl.accessToken = API_KEY;
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mplusc/cjmwxy5yw5kq22rp65yorxg42', // stylesheet location
    center: [-77.029435, 38.955471], // starting position [lng, lat]
    zoom: 10.6 // starting zoom
});

map.on('load', function() {

  map.addSource('CaBi', {
    type: 'geojson',
    data: 'CaBi.geojson'
  });

  
  // add heatmap layer here
  map.addLayer({
    id: 'Heat Map',
    type: 'heatmap',
    source: 'CaBi',
    maxzoom: 15,
    visibility: 'visible',
    paint: {
      // increase weight as diameter breast height increases
      'heatmap-weight': {
        property: 'NUMBER_OF_BIKES_AND_DOCKS',
        type: 'exponential',
        stops: [
          [1, 0],
          [51, 7]
        ]
      },
      // increase intensity as zoom level increases
      'heatmap-intensity': {
        stops: [
          [9, .5],
          [16, 1]
        ]
      },
      // assign color values be applied to points depending on their density
      'heatmap-color': [
        'interpolate',
        ['linear'],
        ['heatmap-density'],
        0, 'rgba(0,0,255,0)',
        0.1, 'rgb(65,105,225)',
        0.3, 'rgb(0,255,255)',
        0.5, 'rgb(0,225,0)',
        0.7, 'rgb(225,225,0)',
        1, 'rgb(255,0,0)'
      ],
      // increase radius as zoom increases
      'heatmap-radius': {
        stops: [
          [10, 20],
          [14, 50]
        ]
      },
      // decrease opacity to transition into the circle layer
      'heatmap-opacity': {
        default: .31,
        stops: [
          [14, .8],
          [15, .31]
        ]
      },
    }
  }, 'waterway-label');

  // add circle layer here
  map.addLayer({
    id: 'Points',
    type: 'circle',
    source: 'CaBi',
    minzoom: 13,
    visibility: 'visible',
    paint: {
      // increase the radius of the circle as the zoom level and dbh value increases
      'circle-radius': {
        property: 'NUMBER_OF_BIKES_AND_DOCKS',
        type: 'exponential',
        stops: [
          [{ zoom: 14, value: 7 }, 10],
          [{ zoom: 14, value: 51 }, 28],
          [{ zoom: 20, value: 7 }, 20],
          [{ zoom: 20, value: 51 }, 150],
        ]
      },
      'circle-color': {
        property: 'NUMBER_OF_BIKES_AND_DOCKS',
        type: 'exponential',
        stops: [
          [0, 'rgba(230,230,250,0)'],
          [10, 'rgb(216,191,216)'],
          [20, 'rgb(221,160,221)'],
          [30, 'rgb(147,112,219)'],
          [40, 'rgb(153,50,204)'],
          [50, 'rgb(139,0,139)'],
          [60, 'rgb(1,108,89)']
        ]
      },
      'circle-stroke-color': 'white',
      'circle-stroke-width': .1,
      'circle-opacity': {
        stops: [
          [14.5, .1],
          [15.5, .6]
        ]
      }
    }
  }, 'waterway-label');





});
var toggleableLayerIds = [ 'Heat Map', 'Points' ];

for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = id;

    link.onclick = function (el) {
        var clickedLayer = this.textContent;
        el.preventDefault();
        el.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
    };

    var layers = document.getElementById('tab');
    layers.appendChild(link);
}

map.on('click','Heat Map', function(e) {
  new mapboxgl.Popup()
    .setLngLat(e.features[0].geometry.coordinates)
    .setHTML(e.features[0].properties.NUMBER_OF_BIKES_AND_DOCKS +' Docks at The '+ e.features[0].properties.ADDRESS + ' Capital Bikeshare Station')
    .addTo(map);
});
map.on('click','Points', function(f) {
  new mapboxgl.Popup()
    .setLngLat(f.features[0].geometry.coordinates)
    .setHTML(f.features[0].properties.NUMBER_OF_BIKES_AND_DOCKS +' Docks at The '+ f.features[0].properties.ADDRESS + ' Capital Bikeshare Station')
    .addTo(map);
});



