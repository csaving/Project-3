// Use the D3 library to read in samples.json
console.log("running")


// Chart.js
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
        data: [topRows[0].Jan2023,topRows[0].Feb2023,topRows[0].Mar2023,topRows[0].April2023,topRows[0].May2023,topRows[0].June2023,topRows[0].July2023,topRows[0].Aug2023,topRows[0].Sep2023,topRows[0].Oct2023,topRows[0].Nov2023]
        },
        {
        name: topRows[1].RegionName,
        data: [topRows[1].Jan2023,topRows[1].Feb2023,topRows[1].Mar2023,topRows[1].April2023,topRows[1].May2023,topRows[1].June2023,topRows[1].July2023,topRows[1].Aug2023,topRows[1].Sep2023,topRows[1].Oct2023,topRows[1].Nov2023]
        },
        {
        name: topRows[2].RegionName,
        data: [topRows[2].Jan2023,topRows[2].Feb2023,topRows[2].Mar2023,topRows[2].April2023,topRows[2].May2023,topRows[2].June2023,topRows[2].July2023,topRows[2].Aug2023,topRows[2].Sep2023,topRows[2].Oct2023,topRows[2].Nov2023]
        },
        {
        name: topRows[3].RegionName,
        data: [topRows[3].Jan2023,topRows[3].Feb2023,topRows[3].Mar2023,topRows[3].April2023,topRows[3].May2023,topRows[3].June2023,topRows[3].July2023,topRows[3].Aug2023,topRows[3].Sep2023,topRows[3].Oct2023,topRows[3].Nov2023]
        },
        {
        name: topRows[4].RegionName,
        data: [topRows[4].Jan2023,topRows[4].Feb2023,topRows[4].Mar2023,topRows[4].April2023,topRows[4].May2023,topRows[4].June2023,topRows[4].July2023,topRows[4].Aug2023,topRows[4].Sep2023,topRows[4].Oct2023,topRows[4].Nov2023]
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
    // data.sort((a, b) => {
    //     const sumA = Object.values(a).slice(1).reduce((acc, val) => acc + val, 0);
    //     const sumB = Object.values(b).slice(1).reduce((acc, val) => acc + val, 0);
    //     return sumB - sumA;
    // });

    // // Select the top 9 cities
    // let topCities = data.slice(0, 9);

    // // Extract unique months
    // let months = Object.keys(topCities[0]).slice(1);

    // // Prepare data for the bar chart
    // let seriesData = topCities.map(city => ({
    //     name: city.regionname,
    //     data: months.map(month => city[month])
    // }));

    // // Create the bar chart
    // var barChart = new ApexCharts(document.querySelector("#barChart"), {
    //     chart: {
    //         type: 'bar',
    //         height: 350
    //     },
    //     title: {
    //         text: 'Top 9 Cities - Home Values in 2023'
    //     },
    //     xaxis: {
    //         categories: months,
    //         title: {
    //             text: 'Month'
    //         }
    //     },
    //     yaxis: {
    //         title: {
    //             text: 'Home Values'
    //         }
    //     },
    //     series: seriesData
    // });

    // barChart.render();
}

// Read samples.json and plot charts

//d3.json(("/api/test/data")).then(sampledata => {
d3.csv("./static/data/clean_home_value_test.csv").then(data => {

 
    console.log("csv_data ", data);
    let sortedByNov2023 = data.sort((a,b) => b.Nov2023 - a.Nov2023);
    let topRows = sortedByNov2023.slice(0,10);
    // Assuming you have the necessary data for Chart.js


    const chartJsColumnNames = topRows.map(row => row.RegionName); // Replace with your actual data
    const chartJsColumnData =  topRows.map(row => Math.round(Number(row.Nov2023))); // Replace with your actual data
    plotChartJs("chartJsCanvas", chartJsColumnData, chartJsColumnNames);

    
 
    let apexChartData = data; // Replace with your actual data
    plotApexCharts(apexChartData);
    
  });