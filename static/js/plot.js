function optionChanged(selectedValue) {
    console.log("Selected Feature:", selectedValue);
    // const selectedValue = "example";
    const url = `/api/v1.0/barchart/${selectedValue}`;
    console.log(url);
    // Fetch the data from your API
    d3.json(url).then((data) => {
        console.log(data);
  
      // Filter data for the specific artist selected by the user
    //   var filteredData = data.filter(function (d) {
    //     return d["StateName"] == selectedValue;
    //   });
  
      // Extract the columns for scatterplot
      var homevalue = data.map((d) => d["HomeValue"]);
      console.log(homevalue);

    });
  }
  
  
  