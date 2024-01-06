// Create a map object.
let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
  });
  // Add a tile layer.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  // An array containing each state abbreviation, latitude and longitude
  let states = [
    {
      "state":"AK",
      "latitude":61.3850,
      "longitude":-152.2683
    },
    {
      "state":"AL",
      "latitude":32.7990,
      "longitude":-86.8073
    },
    {
      "state":"AR",
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
      "state":"CA",
      "latitude":36.1700,
      "longitude":-119.7462
    },
    {
      "state":"CO",
      "latitude":39.0646,
      "longitude":-105.3272
    },
    {
      "state":"CT",
      "latitude":41.5834,
      "longitude":-72.7622
    },
    {
      "state":"DE",
      "latitude":39.3498,
      "longitude":-75.5148
    },
    {
      "state":"FL",
      "latitude":27.8333,
      "longitude":-81.7170
    },
    {
      "state":"GA",
      "latitude":32.9866,
      "longitude":-83.6487
    },
    {
      "state":"HI",
      "latitude":21.1098,
      "longitude":-157.5311
    },
    {
      "state":"IA",
      "latitude":42.0046,
      "longitude":-93.2140
    },
    {
      "state":"ID",
      "latitude":44.2394,
      "longitude":-114.5103
    },
    {
      "state":"IL",
      "latitude":40.3363,
      "longitude":-89.0022
    },
    {
      "state":"IN",
      "latitude":39.8647,
      "longitude":-86.2604
    },
    {
      "state":"KS",
      "latitude":38.5111,
      "longitude":-96.8005
    },
    {
      "state":"KY",
      "latitude":37.6690,
      "longitude":-84.6514
    },
    {
      "state":"LA",
      "latitude":31.1801,
      "longitude":-91.8749
    },
    {
      "state":"MA",
      "latitude":42.2373,
      "longitude":-71.5314
    },
    {
      "state":"MD",
      "latitude":39.0724,
      "longitude":-76.7902
    },
    {
      "state":"ME",
      "latitude":44.6074,
      "longitude":-69.3977
    },
    {
      "state":"MI",
      "latitude":43.3504,
      "longitude":-84.5603
    },
    {
      "state":"MN",
      "latitude":45.7326,
      "longitude":-93.9196
    },
    {
      "state":"MO",
      "latitude":38.4623,
      "longitude":-92.3020
    },
    {
      "state":"MS",
      "latitude":32.7673,
      "longitude":-89.6812
    },
    {
      "state":"MT",
      "latitude":46.9048,
      "longitude":-110.3261
    },
    {
      "state":"NC",
      "latitude":35.6411,
      "longitude":-79.8431
    },
    {
      "state":"ND",
      "latitude":47.5362,
      "longitude":-99.7930
    },
    {
      "state":"NE",
      "latitude":41.1289,
      "longitude":-98.2883
    },
    {
      "state":"NH",
      "latitude":43.4108,
      "longitude":-71.5653
    },
    {
      "state":"NJ",
      "latitude":40.3140,
      "longitude":-74.5089
    },
    {
      "state":"NM",
      "latitude":34.8375,
      "longitude":-106.2371
    },
    {
      "state":"NV",
      "latitude":38.4199,
      "longitude":-117.1219
    },
    {
      "state":"NY",
      "latitude":42.1497,
      "longitude":-74.9384
    },
    {
      "state":"OH",
      "latitude":40.3736,
      "longitude":-82.7755
    },
    {
      "state":"OK",
      "latitude":35.5376,
      "longitude":-96.9247
    },
    {
      "state":"OR",
      "latitude":44.5672,
      "longitude":-122.1269
    },
    {
      "state":"PA",
      "latitude":40.5773,
      "longitude":-77.2640
    },
    {
      "state":"RI",
      "latitude":41.6772,
      "longitude":-71.5101
    },
    {
      "state":"SC",
      "latitude":33.8191,
      "longitude":-80.9066
    },
    {
      "state":"SD",
      "latitude":44.2853,
      "longitude":-99.4632
    },
    {
      "state":"TN",
      "latitude":35.7449,
      "longitude":-86.7489
    },
    {
      "state":"TX",
      "latitude":31.1060,
      "longitude":-97.6475
    },
    {
      "state":"UT",
      "latitude":40.1135,
      "longitude":-111.8535
    },
    {
      "state":"VA",
      "latitude":37.7680,
      "longitude":-78.2057
    },
    {
      "state":"VT",
      "latitude":44.0407,
      "longitude":-72.7093
    },
    {
      "state":"WA",
      "latitude":47.3917,
      "longitude":-121.5708
    },
    {
      "state":"WI",
      "latitude":44.2563,
      "longitude":-89.6385
    },
    {
      "state":"WV",
      "latitude":38.4680,
      "longitude":-80.9696
    },
    {
      "state":"WY",
      "latitude":42.7475,
      "longitude":-107.2085
    }
  ];

// Function to initialize data
function init() {
  // Add markers to the map
  states.forEach(state => {
    const newMarker = L.marker([state.latitude, state.longitude])
      .bindPopup(`<h1>${state.state}</h1>`)
      .addTo(myMap);
    // Attach the value to the marker for later access
    newMarker.value = state.state;
    // Add a click event listener to the marker
    newMarker.on('click', onMarkerClick);
    // Add a click event listener to the marker
    newMarker.on('click', onMarkerClick);
  });

  // Call function to initialize charts 
  lineChart1('IL')
  barChart()
}; 

// Function to handle marker click
function onMarkerClick(e) {
  // Access the value associated with the clicked marker
  const markerValue = e.target.value;
  console.log(markerValue)
  lineChart1(markerValue)
}

function lineChart1 (state) {
  // Get json data from url 
  const url = `/api/v1.0/linechart/` + state;
  console.log(url)
  d3.json(url).then(function(data) {
    // console.log(data);  

    // Sort cities by size and limit to top 8 
    let sorted = data.sort((a, b) => a.SizeRank - b.SizeRank);
    let sliced = sorted.slice(0,8)
    // console.log(sliced)
    let numCities = sliced.length
    // Set months to use on x-axis
    let months = ['2009-01', '2010-01', '2011-01', '2012-01', '2013-01', '2014-01', 
                  '2015-01', '2016-01', '2017-01', '2018-01', '2019-01', '2020-01', 
                  '2021-01', '2022-01', '2023-01', '2023-11']
    let cities = []
    let cityValues = []
    for (let i = 0; i < numCities; i++) {      
      let city = sliced[i].RegionName;
      // Get home values for January of each year from 2009, plus November 2023
      let homeValues = [Math.round(sliced[i]['2009-01-31']), 
                        Math.round(sliced[i]['2010-01-31']),
                        Math.round(sliced[i]['2011-01-31']),
                        Math.round(sliced[i]['2012-01-31']),
                        Math.round(sliced[i]['2013-01-31']),
                        Math.round(sliced[i]['2014-01-31']),
                        Math.round(sliced[i]['2015-01-31']),
                        Math.round(sliced[i]['2016-01-31']),
                        Math.round(sliced[i]['2017-01-31']),
                        Math.round(sliced[i]['2018-01-31']),
                        Math.round(sliced[i]['2019-01-31']),
                        Math.round(sliced[i]['2020-01-31']),
                        Math.round(sliced[i]['2021-01-31']),
                        Math.round(sliced[i]['2022-01-31']),
                        Math.round(sliced[i]['2023-01-31']),
                        Math.round(sliced[i]['2023-11-30'])
                      ]
      console.log(city)
      // console.log(homeValues)
      cities.push(city)
      cityValues.push(homeValues)
    }

    // Create data for line chart for each city. 
    // Need to do with for loop because some states have less than 8 cities.
    let lineData = []
    for (let i = 0; i < numCities; i++) {
      lineData.push({
        x: months,
        y: cityValues[i],
        type: 'scatter',
        name: cities[i]
      });
    }

    var layout = {
      title: 'Mean Home Prices in ' + state,
      xaxis: {
        title: 'Date'
      },
      yaxis: {
        title: 'Home Prices'
      }
    };  

    Plotly.newPlot('line1', lineData, layout);
  })
}

// Function to create charts for top cities 
function barChart () {
  //d3.json(("/api/test/data")).then(sampledata => {
  // d3.csv("./static/data/clean_home_value_test.csv").then(data => {
  // Get json data from url 
  const url = `/api/v1.0/barchart`;
  console.log(url)
  d3.json(url).then(function(data) {
    console.log("bar chart", data);
    let sortedByNov2023 = data.sort((a,b) => b['2023-11-30'] - a['2023-11-30']);
    let topRows = sortedByNov2023.slice(0,10);
    console.log("top rows:", topRows)
    const chartJsColumnNames = topRows.map(row => row.RegionName); 
    const chartJsColumnData =  topRows.map(row => Math.round(Number(row['2023-11-30']))); 
    plotChartJs("chartJsCanvas", chartJsColumnData, chartJsColumnNames);

    let apexChartData = data; 
    plotApexCharts(apexChartData);
    
  });
}

function plotChartJs(id, columnData,columnNames) {
  const ctx = document.getElementById(id).getContext('2d');
    
  var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: columnNames,
            datasets: [{
                label: 'Data for 2023 Nov',
                data: columnData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
                borderColor: 'rgba(75, 192, 192, 1)', // Border color
                borderWidth: 1 // Border width
            }]
        },
        options: {
          plugins: {
            title: {
                display: true,
                text: 'Top Ten Cities for Nov 2023'
            }
          },
          scales: {
                y: {
                  type: 'linear', // For horizontal axis
                  position: 'bottom'
                },
                x: {
                  type: 'category', // For vertical axis
                  position: 'left'
                }
          }
        }
    });
};

  // ApexCharts
function plotApexCharts(data) {
  console.log('apex chart')
  // Function to select specific columns and create a new dataset
   const selectColumns = (data, columns) => {
     return data.map(obj => {
       const newObj = {};
       columns.forEach(column => {
         newObj[column] = obj[column];
       });
       return newObj;
     });
   };
   
   // Specify the columns you want to select
   const selectedColumns = ['Jan2023','Feb2023','Mar2023','April2023','May2023','June2023','July2023','Aug2023','Sep2023','Oct2023','Nov2023'];
   const Data2023 = selectColumns(data, selectedColumns);
 
   // Function to calculate the sum of values for each object
   const calculateSum = obj => Object.values(obj).reduce((acc, val) => acc + val, 0);
   Sum2023 = calculateSum(Data2023)
   // Function to add a new column to each object
   const addNewColumn = (data, columnName, columnValue) => {
     return data.map(obj => {
       return { ...obj, [columnName]: columnValue };
     });
   };
   
   // Add a new column named 'NewColumn' with value 100 to each object
   const newData = addNewColumn(data, 'Sum2023', Sum2023);
 
   // Sort the data based on the sum of values
   const sortedData = newData.sort((a, b) => b.Sum2023 - a.Sum2023);
   let topRows = sortedData.slice(0,5);
 
   var barChart = new ApexCharts(document.querySelector("#barChart"), {
     chart: {
         type: 'line',
         height: 350
     },
     series: [
         {
         name: topRows[0].RegionName,
         data: [topRows[0]['2023-01-31'],topRows[0]['2023-02-28'],topRows[0]['2023-03-31'],topRows[0]['2023-04-30'],topRows[0]['2023-05-31'],topRows[0]['2023-06-30'],topRows[0]['2023-07-31'],topRows[0]['2023-08-31'],topRows[0]['2023-09-30'],topRows[0]['2023-10-31'],topRows[0]['2023-11-30']]
         },
         {
         name: topRows[1].RegionName,
         data: [topRows[1]['2023-01-31'],topRows[1]['2023-02-28'],topRows[1]['2023-03-31'],topRows[1]['2023-04-30'],topRows[1]['2023-05-31'],topRows[1]['2023-06-30'],topRows[1]['2023-07-31'],topRows[1]['2023-08-31'],topRows[1]['2023-09-30'],topRows[1]['2023-10-31'],topRows[1]['2023-11-30']]
         },
         {
         name: topRows[2].RegionName,
         data: [topRows[2]['2023-01-31'],topRows[2]['2023-02-28'],topRows[2]['2023-03-31'],topRows[2]['2023-04-30'],topRows[2]['2023-05-31'],topRows[2]['2023-06-30'],topRows[2]['2023-07-31'],topRows[2]['2023-08-31'],topRows[2]['2023-09-30'],topRows[2]['2023-10-31'],topRows[2]['2023-11-30']]
         },
         {
         name: topRows[3].RegionName,
         data: [topRows[3]['2023-01-31'],topRows[3]['2023-02-28'],topRows[3]['2023-03-31'],topRows[3]['2023-04-30'],topRows[3]['2023-05-31'],topRows[3]['2023-06-30'],topRows[3]['2023-07-31'],topRows[3]['2023-08-31'],topRows[3]['2023-09-30'],topRows[3]['2023-10-31'],topRows[3]['2023-11-30']]
         },
         {
         name: topRows[4].RegionName,
         data: [topRows[4]['2023-01-31'],topRows[4]['2023-02-28'],topRows[4]['2023-03-31'],topRows[4]['2023-04-30'],topRows[4]['2023-05-31'],topRows[4]['2023-06-30'],topRows[4]['2023-07-31'],topRows[4]['2023-08-31'],topRows[4]['2023-09-30'],topRows[4]['2023-10-31'],topRows[4]['2023-11-30']]
         },
     ],
     xaxis: {
         categories: ['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov'],
         title: {
             text:'Years'
         }
     },
     title: {
         text: 'Top 5 Cities - Home Values in 2023'
     },
     yaxis: {
         title: {
             text: 'Home Values'
         }
     }    
 });
 barChart.render();
}

//Calling the init function
init();
