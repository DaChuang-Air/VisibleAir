var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 1000 - margin.left - margin.right,
    height = 610 - margin.top - margin.bottom;

	


// 对应X轴的缩放比例尺
var x_stack = d3.scale.ordinal() // 叙述比例尺
    .rangeRoundBands([0, width], .03); // rangeRoundBands:用几个离散区间来分割一个连续的区间，区间边界和宽度会取整。

// 对应Y轴的缩放比例
var y_stack = d3.scale.linear() // 线性比例尺
    .rangeRound([height, 0]);

// 颜色缩放比例尺
 var color_stack = d3.scale.linear()
 							 .domain([0, 500])
 							 .range(["blue", "red"])
  							.interpolate(d3.interpolateLab);

// X轴
var xAxis_stack = d3.svg.axis()
    .scale(x_stack)
    .orient("bottom");

// Y轴
var yAxis_stack = d3.svg.axis()
    .scale(y_stack)
    .orient("left") ;
	
var color1 = d3.scale.ordinal()

// 创建svg图形
var svg_stack = d3.select("#stack").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	
var tip_stack = d3.tip()
  					 .attr('class', 'd3-tip')
 					 .offset([-10, 0])
 					 .html(function(d) {
   						 return "<strong>AQI:</strong> <span style='color:red'>" + d.aqi + "</span>";
 		 }); // AQI提示

// 读取data.csv中的数据
d3.csv("data/data_stack.csv", function(error, data) {
  color1.domain(d3.keys(data[0]).filter(function(key) { return key !== "AQI"; })); // 过滤掉state
  var time = d3.keys(data[0]).filter(function(key) { return key !== "AQI"; });
  
	//console.log(time); 

  data.forEach(function(d) {
    var y0 = 0;
    d.citys = color1.domain().map(function(name) { return {name: name, y0: name, y1: parseInt(name)+1 , aqi: parseFloat(d[name])}; });
	 console.log(d.citys); // 是竖着的叠加条形图的一个
    d.total = d.citys[d.citys.length - 1].y1;
	 //console.log(d.total); // 一个条形图的总高度
  });

  //data.sort(function(a, b) { return b.total - a.total; }); // ？

  x_stack.domain(data.map(function(d) { return d.AQI; })); // X轴的定义域 
  y_stack.domain([0,time.length]); // Y轴的定义域
  //alert(y("Wed Jan 01 2014 20:25:10 GMT+0800 (中国标准时间)"));
   

  svg_stack.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis_stack)
	  .call(tip_stack);// 调用X轴

  svg_stack.append("g")
      .attr("class", "y axis")
      .call(yAxis_stack)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("time"); // 调用Y轴

  var state = svg_stack.selectAll(".state")
      .data(data)
    .enter().append("g")
      .attr("class", "g")
      .attr("transform", function(d) { return "translate(" + x_stack(d.AQI) + ",0)"; }); // 平移到每个城市的位置
		
	state.selectAll("rect")
      .data(function(d) { return d.citys; })
      .enter().append("rect")
	  /*.on("mouseover",function(d){
			d3.select(this)
			  .attr("fill","orange");
			  //tip.show;
		})
	  .on("mouseout",function(d){
			d3.select(this)
			  .attr("fill",function(d) { return color(d.aqi); });
			// tip.hide;
		})*/
	  .attr("y",0)
	  .attr("fill","yellow")
	  .transition()
	  .duration(2000)
      .delay(function(d,i){
				return 300*i;
		   })
	  .ease("linear")
      .attr("width", x_stack.rangeBand())
      .attr("y", function(d) { return y_stack(d.y1); }) // 初始点的Y坐标值
      .attr("height", function(d) { return y_stack(d.y0) - y_stack(d.y1)-1; }) // 高度
      .attr("fill", function(d) { return color_stack(d.aqi); })
	  .attr("fill-opacity","0.7");
	  
	
	  
	svg_stack.selectAll("rect")
		.on('mouseover', tip_stack.show)
     	.on('mouseout', tip_stack.hide);		  

});