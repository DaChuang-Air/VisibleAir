// JavaScript Document

var marginPop = {top: 25, right: 20, bottom: 60, left: 40},
    widthPop = 1050 - marginPop.left - marginPop.right,
    heightPop = 610 - marginPop.top - marginPop.bottom;




// 对应X轴的缩放比例尺
var xPop = d3.scale.ordinal() // 序数比例尺
    .rangeRoundBands([0, widthPop], .03); // rangeRoundBands:用几个离散区间来分割一个连续的区间，区间边界和宽度会取整。

// 对应Y轴的缩放比例
var yPop = d3.scale.linear() // 线性比例尺
    .rangeRound([heightPop, 0]);

// 颜色缩放比例尺
 var colorPop = d3.scale.linear()
 							 .domain([0, 3000])
 							 .range(["blue", "red"])
  							.interpolate(d3.interpolateLab);

// X轴
var xAxisPop = d3.svg.axis()
    .scale(xPop)
    .orient("bottom")
	.tickPadding("19")
	;

// Y轴
var yAxisPop = d3.svg.axis()
    .scale(yPop)
    .orient("left") ;


// 创建svg图形
var svgPop = d3.select("#populationAQI").append("svg")
    .attr("width", widthPop + marginPop.left + marginPop.right)
    .attr("height", heightPop + marginPop.top + marginPop.bottom)
  .append("g")
    .attr("transform", "translate(" + marginPop.left + "," + marginPop.top + ")");
	
var tipPop = d3.tip()
  					 .attr('class', 'd3-tip')
 					 .offset([-10, 0])
 					 .html(function(d) {
   						 return d.city+"<strong>人口:</strong> <span style='color:red'>" + d.population + "万</span>";
 		 }); // AQI提示


  

  
d3.csv("data/city_aqi.csv", function(error, dataAQI) {
	
	xPop.domain(dataAQI.map(function(d) { return d.city; })); // X轴的定义域 
  yPop.domain([0,500]); // Y轴的定义域

  svgPop.append("g")
      .attr("class", "x axis pop")
      .attr("transform", "translate(0," + heightPop + ")")
      .call(xAxisPop)
	  .call(tipPop)
	  .attr("writing-mode","tb-rl");// 调用X轴

  svgPop.append("g")
      .attr("class", "y axis")
      .call(yAxisPop)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("AQI"); // 调用Y轴

	  
	  svgPop.selectAll("rect")
	   .data(dataAQI)
	   .enter()
	   .append("rect")
	   .attr("x",function(d){return xPop(d.city);})
	   .attr("y",heightPop)
	   .transition()
       .delay(function(d,i){
				return 200*i;
		   })
	   .attr("x",function(d){return xPop(d.city);})
	   .attr("y",function(d){return yPop(d.AQI);})
	   .attr("width",xPop.rangeBand())
	   .attr("height",function(d){return heightPop - yPop(d.AQI);});
	  
	  
		
		
  }); 
  
  // 读取data.csv中的数据
d3.csv("data/city_pop.csv", function(error, dataPop) {
  	svgPop.selectAll("rect")
			.data(dataPop)
			.attr("fill",function(d){return colorPop(d.population);})
			.attr("fill-opacity","0.8");
			
	svgPop.selectAll("rect")
		.on('mouseover', tipPop.show)
     	.on('mouseout', tipPop.hide);

});



function displayPopAQIRect(){
	svgPop.selectAll("circle").remove();
d3.csv("data/city_aqi.csv", function(error, dataAQI) {
	
	  
	  svgPop.selectAll("rect")
	   .data(dataAQI)
	   .enter()
	   .append("rect")
	   .attr("x",function(d){return xPop(d.city);})
	   .attr("y",heightPop)
	   .transition()
       .delay(function(d,i){
				return 200*i;
		   })
	   .attr("x",function(d){return xPop(d.city);})
	   .attr("y",function(d){return yPop(d.AQI);})
	   .attr("width",xPop.rangeBand())
	   .attr("height",function(d){return heightPop - yPop(d.AQI);});
	  
	  
		
		
  }); 
  
  // 读取data.csv中的数据
d3.csv("data/city_pop.csv", function(error, dataPop) {
  	svgPop.selectAll("rect")
			.data(dataPop)
			.attr("fill",function(d){return colorPop(d.population);})
			.attr("fill-opacity","0.8");
			
	svgPop.selectAll("rect")
		.on('mouseover', tipPop.show)
     	.on('mouseout', tipPop.hide);

});

	
	}
function displayPopAQICircle(){
	
	// 颜色缩放比例尺
 var colorCircle = d3.scale.linear()
 							 .domain([0, 3000])
 							 .range(["blue", "red"])
  							.interpolate(d3.interpolateLab);
							
// 半径缩放比例尺
 var rCircle = d3.scale.linear()
 							 .domain([0, 500])
 							 .range([5,20]);
							 

							 
d3.csv("data/city_aqi.csv", function(error, dataCircle) {							 
	svgPop.selectAll("rect").remove();
	svgPop.selectAll("circle")
			.data(dataCircle)
			.enter()
			.append("circle")
			.attr("cx",function(d){return xPop(d.city);})
	   .attr("cy",heightPop)
	   .transition()
       .delay(function(d,i){
				return 200*i;
		   })
			.attr("cx",function(d){return xPop(d.city)+15;})
	  		.attr("cy",function(d){return yPop(d.AQI);})
			.attr("r",function(d){return rCircle(d.AQI);})
});

d3.csv("data/city_pop.csv", function(error, dataPopCircle) {
		svgPop.selectAll("circle")
			.data(dataPopCircle)
			.attr("fill",function(d){return colorCircle(d.population);})
			.attr("fill-opacity","0.8");
			
		svgPop.selectAll("circle")
		.on('mouseover', tipPop.show)
     	.on('mouseout', tipPop.hide);
	
});
	
	}
	
	

