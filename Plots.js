var data = [{
    values: [15382, 137326, 111472, 293289],
    labels: ['Casual Riders: January', 'Members: January', 'Casual Riders: July', 'Members: July'],
    domain: {
      x: [0, .48]
    },
    name: 'Casual Vs Member Data',
    hoverinfo: 'label+percent+name',
    hole: .4,
    type: 'pie',
    direction:'clockwise',
    sort: false,
    rotation: 180
  }];
  
  var layout = {
    title: 'January and July 2018 Capital Bikeshare Data',
    height: 900,
    width: 900
  };
  
  Plotly.newPlot('myDiv', data, layout);