var data = [{
    values: [2357, 1971, 1801, 1617, 1437, 2058, 5758],
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
    domain: {
      x: [0, .48]
    },
    name: 'Casual Riders',
    hoverinfo: 'label+percent+name',
    hole: .4,
    type: 'pie',
    direction:'clockwise',
    sort: false,
    rotation: 180
  },{
    values: [11145, 23295, 29014, 28455, 22434, 21399, 15849],
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
    title: 'January 2018 Capital Bikeshare Data',
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