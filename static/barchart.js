// Use the D3 library to read in samples.json
const url = ".json";

function getPlots(id) {
    // Read samples.json
    d3.json(url).then(sampledata => {
        



// Chart.js
function plotChartJs(id, columnNames, columnData) {
    const ctx = document.getElementById(id).getContext('2d');
    
    // Find column indices for RegionName and 2023-11-30
    const regionNameIndex = headers.indexOf('RegionName');
    const valueIndex = headers.indexOf('2023-11-30');

    // Extract and parse data
    const data = rows.slice(1).map(row => {
      const values = row.split(',');
      return {
        regionName: values[regionNameIndex],
        value: parseFloat(values[valueIndex])
      };
    });

    // Sort data in descending order based on home values
    data.sort((a, b) => b.value - a.value);

    // Select the top 20 cities
    const top20Cities = data.slice(0, 20);

    // Extract city names and values
    const cityNames = top20Cities.map(city => city.regionName);
    const homeValues = top20Cities.map(city => city.value);

    // Use Charts library to create a bar chart
    const ctx = document.getElementById('chartJsCanvas').getContext('2d');
    
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: cityNames,
        datasets: [{
          label: 'Home Values on 2023-11-30',
          data: homeValues,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  })

// ApexCharts
function plotApexCharts(data) {
    data.sort((a, b) => {
        const sumA = Object.values(a).slice(1).reduce((acc, val) => acc + val, 0);
        const sumB = Object.values(b).slice(1).reduce((acc, val) => acc + val, 0);
        return sumB - sumA;
    });

    // Select the top 9 cities
    let topCities = data.slice(0, 9);

    // Extract unique months
    let months = Object.keys(topCities[0]).slice(1);

    // Prepare data for the bar chart
    let seriesData = topCities.map(city => ({
        name: city.regionname,
        data: months.map(month => city[month])
    }));

    // Create the bar chart
    var barChart = new ApexCharts(document.querySelector("#barChart"), {
        chart: {
            type: 'bar',
            height: 350
        },
        title: {
            text: 'Top 9 Cities - Home Values in 2023'
        },
        xaxis: {
            categories: months,
            title: {
                text: 'Month'
            }
        },
        yaxis: {
            title: {
                text: 'Home Values'
            }
        },
        series: seriesData
    });

    barChart.render();
}

// Read samples.json and plot charts
d3.json(url).then(sampledata => {
    console.log(sampledata);
    // Assuming you have the necessary data for Chart.js
    let chartJsColumnNames = ["Label1", "Label2", "Label3"]; // Replace with your actual data
    let chartJsColumnData = [10, 20, 30]; // Replace with your actual data
    plotChartJs("chartJsCanvas", chartJsColumnNames, chartJsColumnData);

    // Assuming you have the necessary data for ApexCharts
    let apexChartData = sampledata; // Replace with your actual data
    plotApexCharts(apexChartData);
});
