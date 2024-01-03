

// function lineChart (metro) {
    // Get json data from url 
    // let url = "";

    d3.csv("../Data/home_value_il.csv").then(function(data) {
      console.log(data);  
      
      // let cities = []
      // for (let i = 0; i < 5; i++) {
        let city = data[0].RegionName;
      //   cities.push(city)
      // }
      // console.log(cities)

        let home_values = data[0]
        console.log(home_values);
        // let months = 


        // let trace1 = {
        //   x: months,
        //   y: home_values,
        //   type: 'scatter'
        // };
          
        // let trace2 = {
        //     x: months,
        //     y: sales_prices,
        //     type: 'scatter'
        //   };
          
        // let data = [trace1];
          
        // Plotly.newPlot('line', data);
    })
// }