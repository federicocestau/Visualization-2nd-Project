var svgWidth = 960;
var svgHeight = 660; 

var chartMargin = {
  top: 50,
  right: 30,
  bottom: 90,
  left: 100
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

var svg = d3
  .select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load data of product pagesviews from Google Analytics
d3.csv("data/data2.csv").then(function(webData) {

  // Print the Pageview data
  console.log(webData);

  // Cast the hours value to a number for each piece of webData
  webData.forEach(function(data) {
    data.Pageviews = +data.Pageviews;
  });

  // Configure a band scale for the horizontal axis with a padding of 0.1 (10%)
  var xBandScale = d3.scaleBand()
    .domain(webData.map(data => data.Page))
    .range([0, chartWidth])
    .padding(0.1);

  // Create a linear scale for the vertical axis.
  var yLinearScale = d3.scaleLinear()
    .domain([0, d3.max(webData, data => data.Pageviews)])
    .range([chartHeight, 0]);

  // Create two new functions passing our scales in as arguments
  // These will be used to create the chart's axes
  var bottomAxis = d3.axisBottom(xBandScale);
  var leftAxis = d3.axisLeft(yLinearScale).ticks(10);
  
  
// Append two SVG group elements to the chartGroup area,
  // and create the bottom and left axes inside of them
  chartGroup.append("g")
    .call(leftAxis);

  chartGroup.append("g")
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(bottomAxis);


  // @TODO
  // Create code to build the bar chart using the webData.
  chartGroup.selectAll(".bar")
    .data(webData)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", data => xBandScale(data.Page))
    .attr("y", data => yLinearScale(data.Pageviews))
    .attr("width", xBandScale.bandwidth())
    .attr("height", data => chartHeight - yLinearScale(data.Pageviews));

}).catch(function(error) {
  console.log(error);
});
