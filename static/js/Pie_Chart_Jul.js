var data = [{
    values: [23204, 13402, 11244, 13989, 13704, 15277, 20652],
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
    domain: {
      x: [50, .48]
    },
    name: 'Casual Riders',
    hoverinfo: 'label+percent+name',
    hole: .4,
    type: 'pie',
    direction:'clockwise',
    sort: false,
    rotation: 180
  },{
    values: [38428, 46481, 48102, 40015, 45468, 43823, 30972],
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
    domain: {x: [.52, 1]},
    name: 'Member Riders',
    hoverinfo: 'label+percent+name',
    hole: .4,
    type: 'pie',
    direction:'clockwise',
    sort: false,
    rotation: 190
  }];
  
  var layout = {
    title: 'July 2018 Capital Bikeshare Data',
    annotations: [
      {
        font: {
          size: 15
        },
        showarrow: false,
        text: 'Casual',
        x: 0.20,
        y: 0.5
      },
      {
        font: {
          size: 15
        },
        showarrow: false,
        text: 'Member',
        x: 0.81,
        y: 0.5
      }
    ],
    height: 900,
    width: 900
  };
  
  Plotly.newPlot('myDiv', data, layout);