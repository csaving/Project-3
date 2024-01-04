

// function lineChart (state) {
    // Get json data from url 
    let url = "../Data/clean_home_value_test.csv";

    d3.csv(url).then(function(data) {
      console.log(data);  
      let state = 'IL'
      let filterState = data.filter(regions => regions.StateName == state)
      let sortedBySizeRank = filterState.sort((a, b) => a.SizeRank - b.SizeRank);
      console.log(sortedBySizeRank)
      sliced = sortedBySizeRank.slice(0,10)
      console.log(sliced)

      let months = ['2009-01', '2010-01', '2011-01', '2012-01', '2013-01', '2014-01', '2015-01', '2016-01', '2017-01', '2018-01', '2019-01', '2020-01', '2021-01', '2022-01']
      let cities = []
      let cityValues = []
      for (let i = 0; i < 5; i++) {
        
        let city = sliced[i].RegionName;
        let homeValues = [Math.round(sliced[i].Jan2009), 
                          Math.round(sliced[i].Jan2010),
                          Math.round(sliced[i].Jan2011),
                          Math.round(sliced[i].Jan2012),
                          Math.round(sliced[i].Jan2013),
                          Math.round(sliced[i].Jan2014),
                          Math.round(sliced[i].Jan2015),
                          Math.round(sliced[i].Jan2016),
                          Math.round(sliced[i].Jan2017),
                          Math.round(sliced[i].Jan2018),
                          Math.round(sliced[i].Jan2019),
                          Math.round(sliced[i].Jan2020),
                          Math.round(sliced[i].Jan2021),
                          Math.round(sliced[i].Jan2022),
                         ]
        console.log(city)
        console.log(homeValues)

        cities.push(city)
        cityValues.push(homeValues)
      }

      // let k = 'trace';
      // for (i = 0; i < 5; i++) {
      //   eval('var ' + k + i + '= {x: months, y: cityValues[' + i + '], type: 'scatter', name: cities[' + i +']};');
      // } 
      // console.log(trace0)

      let trace0 = {
        x: months,
        y: cityValues[0],
        type: 'scatter',
        name: cities[0]
      };
          
      let trace1 = {
        x: months,
        y: cityValues[1],
        type: 'scatter',
        name: cities[1]
      };

      let trace2 = {
        x: months,
        y: cityValues[2],
        type: 'scatter',
        name: cities[2]
      };

      let trace3 = {
        x: months,
        y: cityValues[3],
        type: 'scatter',
        name: cities[3]
      };

      let trace4 = {
        x: months,
        y: cityValues[4],
        type: 'scatter',
        name: cities[4]
      };

      var layout = {
        title: 'Largest Metro Areas in ' + state,
        xaxis: {
          title: 'Date'
        },
        yaxis: {
          title: 'Home'
        }
      };

      let dataLine = [trace0, trace1, trace2, trace3, trace4];    
      Plotly.newPlot('line', dataLine, layout);
    })
// }


