var blue_to_brown = d3.scale.linear()
  .domain([0, 500])
  .range(["blue", "red"])
  .interpolate(d3.interpolateLab);

var color = function(d) { return blue_to_brown(d['AQI']); };

var parcoords = d3.parcoords()("#example")
  .color(color)
  .alpha(0.4);

// load csv file and create the chart
d3.csv('data/air.csv', function(data) {
  parcoords
    .data(data)
    .hideAxis(["name"])
    .render()
    .brushMode("1D-axes");  // enable brushing

  // create data table, row hover highlighting
  var grid = d3.divgrid();
  d3.select("#grid")
    .datum(data)
    .call(grid)
    .selectAll(".row")
    .on({
      "mouseover": function(d) { parcoords.highlight([d]) },
      "mouseout": parcoords.unhighlight
    });

  // update data table on brush event
  parcoords.on("brush", function(d) {
    d3.select("#grid")
      .datum(d)
      .call(grid)
      .selectAll(".row")
      .on({
        "mouseover": function(d) { parcoords.highlight([d]) },
        "mouseout": parcoords.unhighlight
      });
  });
});