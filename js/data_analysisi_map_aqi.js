var margin = {top: 20, right: 80, bottom: 30, left: 50};
var w_map = document.getElementById("map").offsetWidth-margin.left;
var h_map = document.getElementById("map").offsetHeight-margin.bottom;

console.log(w_map+" "+h_map);


	
var projection = d3.geo.mercator()
						.center([107, 38])
						.scale(850)
    					.translate([w_map/2, h_map/2]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select("#map").append("svg")
    .attr("width", w_map)
    .attr("height", h_map);

var states = svg.append("svg:g")
    .attr("id", "states");

var circles = svg.append("svg:g")
    .attr("id", "circles");

var texts = svg.append("svg:g")
	.attr("id", "texts");
	
var cells = svg.append("svg:g")
    .attr("id", "cells");
	
var color = d3.scale.linear()
				.domain([0,500])
				.range(["#00FFFF","#FF0033"]); // 颜色缩放比例尺
				
var aqi = [];
d3.csv("data/city_aqi.csv",function(data){
	console.log(data);
	data.forEach(function(d){
		aqi.push(d.AQI);		});
	
	});
	
				
d3.json("data/china.json", function(collection) {
  states.selectAll("path")
      .data(collection.features)
    .enter().append("svg:path")
      .attr("d", path)
	  .attr('fill',function(d,i){return color(aqi[i]);})
	  .attr('stroke','#222')
	  .attr('stroke-width','1px')
	  .on("mouseover",function(d,i){
                d3.select(this)
                    .attr("fill","yellow");
            })
       .on("mouseout",function(d,i){
                d3.select(this)
                    .attr("fill",color(aqi[i]));
        });
});

var positions=[];
d3.csv('data/china-cities.csv',function(error,c){
	
	 if (error)   
            return console.error(error);
		
	circles.selectAll("circle")
        .data(c)
        .enter().append("svg:circle")
        .attr("cx", function(d,i){return projection([d.lon,d.lat])[0];})
        .attr("cy",function(d,i){return projection([d.lon,d.lat])[1];})
		.attr("r", 2)
		.attr('fill','red');
		
	texts.selectAll("text")
		.data(c)
		.enter().append("svg:text")
		.text(function(d){return d.city;})
		.attr("x", function(d){
			var local=projection([d.lon,d.lat]);
			if(d.lon=='113.5575191')//处理澳门
			return (local[0]-30);
			else return local[0];})
        .attr("y",function(d){
			var local=projection([d.lon,d.lat]);
			if(d.lat=='39.1439299') return (local[1]+10);//处理天津
			else return local[1];
			})
		.attr('fill','#000')
		.attr('font-size','14px')
		.attr("font-family","华文行楷")
		;
});


/*map_bar条形图的实现*/
var tip = d3.tip()
  					 .attr('class', 'd3-tip')
 					 .offset([-10, 0])
 					 .html(function(d) {
   						 return d.city+"<strong>AQI:</strong> <span style='color:red'>" + d.AQI + "</span>";
 		 }); // AQI提示

var margin_bar = {top: 5, right: 5, bottom: 30, left: 85},
    width_bar = 250 - margin_bar.left - margin_bar.right,
    height_bar = 620 - margin_bar.top - margin_bar.bottom;

// 对应x轴的缩放比例
var x_bar = d3.scale.linear() // 线性比例尺
    .range([0, width_bar]);
	
// 对应y轴的缩放比例尺
var y_bar = d3.scale.ordinal() // 叙述比例尺
    .rangeRoundBands([0, height_bar], .1); // rangeRoundBands:用几个离散区间来分割一个连续的区间，区间边界和宽
	
// X轴
var xAxis_bar = d3.svg.axis()
    .scale(x_bar)
    .orient("top");

// Y轴
var yAxis_bar = d3.svg.axis()
    .scale(y_bar)
    .orient("left")
	/*.tickPadding(190) */;
	
// 创建svg图形
var svg_bar = d3.select("#map_bar").append("svg")
    .attr("width", width_bar + margin_bar.left + margin_bar.right)
    .attr("height", height_bar + margin_bar.top + margin_bar.bottom)
 	.append("g")
    .attr("transform", "translate(" + margin_bar.left + "," + margin_bar.top + ")");


// 读取city_aqi.csv的数据
d3.csv("data/city_aqi.csv",function(data){
	
  x_bar.domain([d3.min(data,function(d){return parseFloat(d.AQI);}),d3.max(data,function(d){return parseFloat(d.AQI);})]); // X轴的定义域
  y_bar.domain(data.map(function(d) { return d.city; })); // Y轴的定义域
	
 svg_bar.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height_bar + ")")
      .call(xAxis_bar)
	  .text("aqi")
	  .call(tip);// 调用X轴

  svg_bar.append("g")
      .attr("class", "y axis")
      .call(yAxis_bar)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end");  // 调用Y轴


	
svg_bar.selectAll("rect")
	   .data(data)
	   .enter()
	   .append("rect")
	   .attr("fill","red")
	   .attr("x",width_bar/2)
	   .attr("y",0)
	   .transition()
       .delay(function(d,i){
				return 200*i;
		   })
	   .attr("x",0)
	   .attr("y",function(d){return y_bar(d.city);})
	   .attr("width",function(d){return x_bar(d.AQI);})
	   .attr("height", y_bar.rangeBand())
	   .attr("fill",function(d){return color(d.AQI);});
	   
svg_bar.selectAll("rect") .on('mouseover', tip.show)
     		 .on('mouseout', tip.hide);	
	
});
