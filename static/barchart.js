// Use the D3 library to read in samples.json
const url = ".json";

function getPlots(id) {
    // Read samples.json
    d3.json(url).then(sampledata => {
        



// Chart.js
function plotChartJs(id, columnNames, columnData) {
    const ctx = document.getElementById(id).getContext('2d');
    
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: columnNames,
            datasets: [{
                label: 'Data for 2023-11-30',
                data: columnData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
                borderColor: 'rgba(75, 192, 192, 1)', // Border color
                borderWidth: 1 // Border width
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
}

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
