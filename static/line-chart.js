// Function to initialize data
function init() {
  // Get json data from url 
  // let url = "";
  // d3.json(url).then(function(data) {
  //   console.log(data);

    // Need to change dropdown to Map
    let dropdownMenu = d3.select("#selDataset");
    let states = ['IL', 'IN', 'WI', 'CA', 'AK', 'WY', 'NY', 'AL', 'WA', 'AZ']
    states.forEach(nameId => {dropdownMenu.append("option").text(nameId).property("value")})

    // Call function to initialize charts
    optionChanged(states[0])
  // })
};   

// Function to update charts
function optionChanged(state) {
  lineChart1(state)
  // lineChart2(state)
  // barChart(state)

}

function lineChart1 (state) {
  // Get json data from url 
  let url = "../Data/clean_home_value_test.csv";

  d3.csv(url).then(function(data) {
    console.log(data);  

    let filterState = data.filter(regions => regions.StateName == state)
    let sortedBySizeRank = filterState.sort((a, b) => a.SizeRank - b.SizeRank);
    console.log(sortedBySizeRank)
    sliced = sortedBySizeRank.slice(0,8)
    console.log(sliced)
    console.log(sliced.length)
    let numCities = sliced.length

      let months = ['2009-01', '2010-01', '2011-01', '2012-01', '2013-01', '2014-01', 
                    '2015-01', '2016-01', '2017-01', '2018-01', '2019-01', '2020-01', 
                    '2021-01', '2022-01', '2023-11']
      let cities = []
      let cityValues = []
      for (let i = 0; i < numCities; i++) {
        
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
                          Math.round(sliced[i].Nov2023)
                        ]
        console.log(city)
        console.log(homeValues)

        cities.push(city)
        cityValues.push(homeValues)
      }

      let lineData = []
      for (let i = 0; i < numCities; i++) {
        lineData.push({
          x: months,
          y: cityValues[i],
          type: 'scatter',
          name: cities[i]
        });
      }
      console.log(lineData)

      var layout = {
        title: 'Mean Home Prices in ' + state,
        xaxis: {
          title: 'Date'
        },
        yaxis: {
          title: 'Home Prices'
          // range: [0, 1500000]
        }
      };  
 
      Plotly.newPlot('line1', lineData, layout);
    })
}

function lineChart2 (state) {
  // Get json data from url 
  let url = "../Data/clean_home_value_test.csv";

  d3.csv(url).then(function(data) {
    console.log(data);  

    let filterState = data.filter(regions => regions.StateName == state)
    let sortedBySizeRank = filterState.sort((a, b) => a.SizeRank - b.SizeRank);
    console.log(sortedBySizeRank)
    sliced = sortedBySizeRank.slice(0,5)
    console.log(sliced)
    console.log(sliced.length)
    let numCities = sliced.length

      let months = ['2009-01', '2010-01', '2011-01', '2012-01', '2013-01', '2014-01', 
                    '2015-01', '2016-01', '2017-01', '2018-01', '2019-01', '2020-01', 
                    '2021-01', '2022-01', '2023-11']
      let cities = []
      let cityValues = []
      for (let i = 0; i < numCities; i++) {
        
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
                          Math.round(sliced[i].Nov2023)
                        ]
        console.log(city)
        console.log(homeValues)

        cities.push(city)
        cityValues.push(homeValues)
      }

      let lineData = []
      for (let i = 0; i < numCities; i++) {
        lineData.push({
          x: months,
          y: cityValues[i],
          type: 'scatter',
          name: cities[i]
        });
      }
      console.log(lineData)

      var layout = {
        title: 'Home Sales Volume in ' + state,
        xaxis: {
          title: 'Date'
        },
        yaxis: {
          title: 'Home Sales'
          // range: [0, 1500000]
        }
      };  
 
      Plotly.newPlot('line2', lineData, layout);
    })
}
// Add code for bar chart here
function barChart (state) {
}

//Calling the init function
init();



