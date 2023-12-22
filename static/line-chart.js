

// function lineChart (metro) {
    // Get json data from url 
    // let url = "";
    // d3.json(url).then(function(data) {
        let home_values = [150007, 150146, 150410, 151068, 151860, 152748, 153693, 155027, 156593, 158398, 159766, 160885];
        let sales_prices = [];
        let months = ['2000-01-31', '2000-02-29', '2000-03-31', '2000-04-30', '2000-05-31', '2000-06-30', '2000-07-31', '2000-08-31', '2000-09-30', '2000-10-31', '2000-11-30', '2000-12-31'];
  
        let trace1 = {
          x: months,
          y: home_values,
          type: 'scatter'
        };
          
        // let trace2 = {
        //     x: months,
        //     y: sales_prices,
        //     type: 'scatter'
        //   };
          
        let data = [trace1];
          
        Plotly.newPlot('line', data);
    // })
// }