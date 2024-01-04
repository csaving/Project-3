// Use the D3 library to read in samples.json
const url = ".json";

function getPlots(id) {
    // Read samples.json
    d3.json(url).then(sampledata => {
        
        console.log(sampledata);
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