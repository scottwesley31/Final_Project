function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
    // Use the list of sample names to populate the select options
    d3.json("industry_data2.json").then((data) => {
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
      // Use the first sample from the list to build the initial plots
      var firstSample = sampleNames[0];
      //buildCharts(firstSample);
    });
  }
   // Initialize the dashboard
   init();
   function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    //buildCharts(newSample);
   }