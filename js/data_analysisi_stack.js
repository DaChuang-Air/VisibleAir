var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 1000 - margin.left - margin.right,
    height = 610 - margin.top - margin.bottom;

	


// ��ӦX������ű�����
var x_stack = d3.scale.ordinal() // ����������
    .rangeRoundBands([0, width], .03); // rangeRoundBands:�ü�����ɢ�������ָ�һ�����������䣬����߽�Ϳ�Ȼ�ȡ����

// ��ӦY������ű���
var y_stack = d3.scale.linear() // ���Ա�����
    .rangeRound([height, 0]);

// ��ɫ���ű�����
 var color_stack = d3.scale.linear()
 							 .domain([0, 500])
 							 .range(["blue", "red"])
  							.interpolate(d3.interpolateLab);

// X��
var xAxis_stack = d3.svg.axis()
    .scale(x_stack)
    .orient("bottom");

// Y��
var yAxis_stack = d3.svg.axis()
    .scale(y_stack)
    .orient("left") ;
	
var color1 = d3.scale.ordinal()

// ����svgͼ��
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
 		 }); // AQI��ʾ

// ��ȡdata.csv�е�����
d3.csv("data/data_stack.csv", function(error, data) {
  color1.domain(d3.keys(data[0]).filter(function(key) { return key !== "AQI"; })); // ���˵�state
  var time = d3.keys(data[0]).filter(function(key) { return key !== "AQI"; });
  
	//console.log(time); 

  data.forEach(function(d) {
    var y0 = 0;
    d.citys = color1.domain().map(function(name) { return {name: name, y0: name, y1: parseInt(name)+1 , aqi: parseFloat(d[name])}; });
	 console.log(d.citys); // �����ŵĵ�������ͼ��һ��
    d.total = d.citys[d.citys.length - 1].y1;
	 //console.log(d.total); // һ������ͼ���ܸ߶�
  });

  //data.sort(function(a, b) { return b.total - a.total; }); // ��

  x_stack.domain(data.map(function(d) { return d.AQI; })); // X��Ķ����� 
  y_stack.domain([0,time.length]); // Y��Ķ�����
  //alert(y("Wed Jan 01 2014 20:25:10 GMT+0800 (�й���׼ʱ��)"));
   

  svg_stack.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis_stack)
	  .call(tip_stack);// ����X��

  svg_stack.append("g")
      .attr("class", "y axis")
      .call(yAxis_stack)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("time"); // ����Y��

  var state = svg_stack.selectAll(".state")
      .data(data)
    .enter().append("g")
      .attr("class", "g")
      .attr("transform", function(d) { return "translate(" + x_stack(d.AQI) + ",0)"; }); // ƽ�Ƶ�ÿ�����е�λ��
		
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
      .attr("y", function(d) { return y_stack(d.y1); }) // ��ʼ���Y����ֵ
      .attr("height", function(d) { return y_stack(d.y0) - y_stack(d.y1)-1; }) // �߶�
      .attr("fill", function(d) { return color_stack(d.aqi); })
	  .attr("fill-opacity","0.7");
	  
	
	  
	svg_stack.selectAll("rect")
		.on('mouseover', tip_stack.show)
     	.on('mouseout', tip_stack.hide);		  

});