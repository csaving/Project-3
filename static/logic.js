// Create a map object.
let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
  });
  // Add a tile layer.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  // An array containing each city's name, location, and population
  let states = [
    {
      "state":"Alaska",
      "latitude":61.3850,
      "longitude":-152.2683
    },
    {
      "state":"Alabama",
      "latitude":32.7990,
      "longitude":-86.8073
    },
    {
      "state":"Arkansas",
      "latitude":34.9513,
      "longitude":-92.3809
    },
    {
      "state":"AZ",
      "value":"AZ",
      "latitude":33.7712,
      "longitude":-111.3877
    },
    {
      "state":"California",
      "latitude":36.1700,
      "longitude":-119.7462
    },
    {
      "state":"Colorado",
      "latitude":39.0646,
      "longitude":-105.3272
    },
    {
      "state":"Connecticut",
      "latitude":41.5834,
      "longitude":-72.7622
    },
    {
      "state":"Delaware",
      "latitude":39.3498,
      "longitude":-75.5148
    },
    {
      "state":"Florida",
      "latitude":27.8333,
      "longitude":-81.7170
    },
    {
      "state":"Georgia",
      "latitude":32.9866,
      "longitude":-83.6487
    },
    {
      "state":"Hawaii",
      "latitude":21.1098,
      "longitude":-157.5311
    },
    {
      "state":"Iowa",
      "latitude":42.0046,
      "longitude":-93.2140
    },
    {
      "state":"Idaho",
      "latitude":44.2394,
      "longitude":-114.5103
    },
    {
      "state":"Illinois",
      "latitude":40.3363,
      "longitude":-89.0022
    },
    {
      "state":"Indiana",
      "latitude":39.8647,
      "longitude":-86.2604
    },
    {
      "state":"Kansas",
      "latitude":38.5111,
      "longitude":-96.8005
    },
    {
      "state":"Kentucky",
      "latitude":37.6690,
      "longitude":-84.6514
    },
    {
      "state":"Louisiana",
      "latitude":31.1801,
      "longitude":-91.8749
    },
    {
      "state":"Massachusetts",
      "latitude":42.2373,
      "longitude":-71.5314
    },
    {
      "state":"Maryland",
      "latitude":39.0724,
      "longitude":-76.7902
    },
    {
      "state":"Maine",
      "latitude":44.6074,
      "longitude":-69.3977
    },
    {
      "state":"Michigan",
      "latitude":43.3504,
      "longitude":-84.5603
    },
    {
      "state":"Minnesota",
      "latitude":45.7326,
      "longitude":-93.9196
    },
    {
      "state":"Missouri",
      "latitude":38.4623,
      "longitude":-92.3020
    },
    {
      "state":"Mississippi",
      "latitude":32.7673,
      "longitude":-89.6812
    },
    {
      "state":"Montana",
      "latitude":46.9048,
      "longitude":-110.3261
    },
    {
      "state":"North Carolina",
      "latitude":35.6411,
      "longitude":-79.8431
    },
    {
      "state":"North Dakota",
      "latitude":47.5362,
      "longitude":-99.7930
    },
    {
      "state":"Nebraska",
      "latitude":41.1289,
      "longitude":-98.2883
    },
    {
      "state":"New Hampshire",
      "latitude":43.4108,
      "longitude":-71.5653
    },
    {
      "state":"New Jersey",
      "latitude":40.3140,
      "longitude":-74.5089
    },
    {
      "state":"New Mexico",
      "latitude":34.8375,
      "longitude":-106.2371
    },
    {
      "state":"Nevada",
      "latitude":38.4199,
      "longitude":-117.1219
    },
    {
      "state":"New York",
      "latitude":42.1497,
      "longitude":-74.9384
    },
    {
      "state":"Ohio",
      "latitude":40.3736,
      "longitude":-82.7755
    },
    {
      "state":"Oklahoma",
      "latitude":35.5376,
      "longitude":-96.9247
    },
    {
      "state":"Oregon",
      "latitude":44.5672,
      "longitude":-122.1269
    },
    {
      "state":"Pennsylvania",
      "latitude":40.5773,
      "longitude":-77.2640
    },
    {
      "state":"Rhode Island",
      "latitude":41.6772,
      "longitude":-71.5101
    },
    {
      "state":"South Carolina",
      "latitude":33.8191,
      "longitude":-80.9066
    },
    {
      "state":"South Dakota",
      "latitude":44.2853,
      "longitude":-99.4632
    },
    {
      "state":"Tennessee",
      "latitude":35.7449,
      "longitude":-86.7489
    },
    {
      "state":"Texas",
      "latitude":31.1060,
      "longitude":-97.6475
    },
    {
      "state":"Utah",
      "latitude":40.1135,
      "longitude":-111.8535
    },
    {
      "state":"Virginia",
      "latitude":37.7680,
      "longitude":-78.2057
    },
    {
      "state":"Vermont",
      "latitude":44.0407,
      "longitude":-72.7093
    },
    {
      "state":"Washington",
      "latitude":47.3917,
      "longitude":-121.5708
    },
    {
      "state":"Wisconsin",
      "latitude":44.2563,
      "longitude":-89.6385
    },
    {
      "state":"West Virginia",
      "latitude":38.4680,
      "longitude":-80.9696
    },
    {
      "state":"Wyoming",
      "latitude":42.7475,
      "longitude":-107.2085
    }
  ];


  // Function to initialize data
function init() {

    // Need to change dropdown to Map
    // let dropdownMenu = d3.select("#selDataset");

    d3.csv('../clean_home_value.csv').then(data => {
      console.log(data)
      })
        // Looping through the states array, create one marker for each city, bind a popup containing its name and population, and add it to the map.
        for (let i = 0; i < states.length; i++) {
          let state = states[i];
          let marker = L.marker([state.latitude,state.longitude])
          .bindPopup(`<h1>${state.state}</h1>`)
           .addTo(myMap);
        }
        // Add markers to the map
        //   markerData.forEach(marker => {
        //     const newMarker = L.marker([marker.lat, marker.lng]).addTo(map);

        //    // Attach the value to the marker for later access
        //     newMarker.value = marker.value;

        //   // Add a click event listener to the marker
        //   newMarker.on('click', onMarkerClick);
        //   });
        //   // Attach the value to the marker for later access
        //   let newMarker.value = marker.value;
        //   // Add a click event listener to the marker
        //   newMarker.on('click', onMarkerClick);
        }
    // let s = ['IL', 'IN', 'WI', 'CA', 'AK', 'WY', 'NY', 'AL']
    // states.forEach(nameId => {dropdownMenu.append("option").text(nameId).property("value")})

    // Call function to initialize charts
    onMarkerClick('IL')
  // })
}; 

// Function to handle marker click
function onMarkerClick(state) {
  console.log(state.value)
  lineChart1(state.value)
}

// // Function to update charts
// function optionChanged(state) {
//   lineChart1(state)
//   // lineChart2(state)
//   // barChart(state)

// }

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
