var Month = ['Jan', 'July']

Plotly.d3.csv('http://localhost:8000/static/data/clean_data/Jan_2018_DC_CaBi.csv', (err, rows) => {
  var data = Month.map(y => {
    var d = rows.filter(r => r.Month === y)
    
    return {
      type: 'bar',
      name: y,
      x: d.map(r => r.Day),
      y: d.map(r => r.Duration)
    }
  })
  
  Plotly.newPlot('graph', data)
})