// JavaScript Document
// svg的宽度和高度
	var w = 500;
	var h = 100;
	var barPadding = 1; // 条形图的间隔							
			
			
	var body = d3.select("body");
	var table = body.select("table");
	var tr = table.selectAll("tr");
	
<!--位置的获取（AQI、pm2.5、pm10、CO、NO2、O3/1、O3/8、SO2）-->
	var	td_aqi = tr.select("#td_aqi");
	var	td3 = tr.select("#td_pm");	
	var	td_pm10 = tr.select("#td_pm10");	
	var	td_co = tr.select("#td_co");
	var	td_no2 = tr.select("#td_no2");
	var	td_o31 = tr.select("#td_o31");
	var	td_o38 = tr.select("#td_o38");
	var	td_so2 = tr.select("#td_so2");

<!--svg元素的创建（AQI、pm2.5、pm10、CO、NO2、O3/1、O3/8、SO2）-->			
	// 创建svg元素
	var svg_aqi = td_aqi.append("svg")
				.attr("width", w)
				.attr("height", h);
	var svg = td3.append("svg")
				.attr("width", w)
				.attr("height", h);
	var svg_pm10 = td_pm10.append("svg")
				.attr("width", w)
				.attr("height", h);
	var svg_co = td_co.append("svg")
				.attr("width", w)
				.attr("height", h);
	var svg_no2 = td_no2.append("svg")
				.attr("width", w)
				.attr("height", h);
	var svg_o31 = td_o31.append("svg")
				.attr("width", w)
				.attr("height", h);
	var svg_o38 = td_o38.append("svg")
				.attr("width", w)
				.attr("height", h);
	var svg_so2 = td_so2.append("svg")
				.attr("width", w)
				.attr("height", h);
						
		
	// 读取data.csv文件，并作相关处理
	d3.tsv("data/data.tsv",function(error, dataset){
		
		// 条形图颜色渐变的缩放比例尺	
		 var blue_to_brown = d3.scale.linear()
 							 .domain([0, 500])
 							 .range(["blue", "red"])
  							.interpolate(d3.interpolateLab);
           
  		//创建一个x轴的缩放比例尺 
		var xScale = d3.scale.linear()
						.domain([0,dataset.length])
						.range([0,w-3]);

<!--数轴的创建（AQI、pm2.5、pm10、CO、NO2、O3/1、O3/8、SO2）-->						
		//创建一个数轴：与x轴缩放比例尺配合使用，其标签显示在底部。
		var xAxis_aqi = d3.svg.axis()
					.scale(xScale)
               		.orient("top");
		// 设置x轴刻度线的条数和长度
		xAxis_aqi.ticks(5)
			.tickSize(h); 
					
		var xAxis = d3.svg.axis()
					.scale(xScale)
               		.orient("top")
					.ticks(0);		
					
		var xAxis_pm10 = d3.svg.axis()
					.scale(xScale)
               		.orient("top")
					.ticks(0);
		var xAxis_co = d3.svg.axis()
					.scale(xScale)
               		.orient("top")
					.ticks(0);
		var xAxis_no2 = d3.svg.axis()
					.scale(xScale)
               		.orient("top")
					.ticks(0);
		var xAxis_o31 = d3.svg.axis()
					.scale(xScale)
               		.orient("top")
					.ticks(0);
		var xAxis_o38 = d3.svg.axis()
					.scale(xScale)
               		.orient("top")
					.ticks(0);
		var xAxis_so2 = d3.svg.axis()
					.scale(xScale)
               		.orient("top")
					.ticks(0);
		 
<!--提示信息（AQI、pm2.5、pm10、CO、NO2、O3/1、O3/8、SO2）-->
		var tip_aqi = d3.tip()
  					 .attr('class', 'd3-tip')
 					 .offset([-10, 0])
 					 .html(function(d) {
   						 return "<strong>AQI:</strong> <span style='color:red'>" + d.AQI + "</span>";
 		 });
		var tip = d3.tip()
  					 .attr('class', 'd3-tip')
 					 .offset([-10, 0])
 					 .html(function(d) {
   						 return "<strong>PM2.5:</strong> <span style='color:red'>" + d.pm + "</span>";
 		 });
		 var tip_pm10 = d3.tip()
  						 .attr('class', 'd3-tip')
 						 .offset([-10, 0])
 						 .html(function(d) {
   							 return "<strong>PM10:</strong> <span style='color:red'>" + d.pm10 + "</span>";
 		 });
		  var tip_co = d3.tip()
  						 .attr('class', 'd3-tip')
 						 .offset([-10, 0])
 						 .html(function(d) {
   							 return "<strong>CO:</strong> <span style='color:red'>" + d.CO + "</span>";
 		 });
		  var tip_no2 = d3.tip()
  						 .attr('class', 'd3-tip')
 						 .offset([-10, 0])
 						 .html(function(d) {
   							 return "<strong>NO2:</strong> <span style='color:red'>" + d.NO2 + "</span>";
 		 });
		  var tip_o31 = d3.tip()
  						 .attr('class', 'd3-tip')
 						 .offset([-10, 0])
 						 .html(function(d) {
   							 return "<strong>O3/1:</strong> <span style='color:red'>" + d.O31 + "</span>";
 		 });
		  var tip_o38 = d3.tip()
  						 .attr('class', 'd3-tip')
 						 .offset([-10, 0])
 						 .html(function(d) {
   							 return "<strong>O3/8:</strong> <span style='color:red'>" + d.O38 + "</span>";
 		 });
		  var tip_so2 = d3.tip()
  						 .attr('class', 'd3-tip')
 						 .offset([-10, 0])
 						 .html(function(d) {
   							 return "<strong>SO2:</strong> <span style='color:red'>" + d.SO2 + "</span>";
 		 });
		 
<!--AQI的实现-->
   		// 调用x轴的数轴与tip提示
		svg_aqi.append("g")
			.attr("class","axis")
			.attr("transform", "translate("+ barPadding +","+ h +")")
			.call(xAxis_aqi)
			.call(tip_aqi);

		// 根据从data中读取的数据，创建rect元素
		svg_aqi.selectAll("rect")
		   .data(dataset)
		   .enter()
		   .append("rect")
		   .attr("fill","red")
		   .transition()
     .delay(function(d,i){
				return 200*i;
		   })
		   .attr("x", function(d, i) {
			   		return i * (w / dataset.length);
			   })
		   .attr("y", function(d) {
					return h - (d.AQI / 2);
			   })
		   .attr("width", w / dataset.length - barPadding)
		   .attr("height", function(d) {
					return d.AQI / 2;
			   })
		   .attr("fill", function(d) {
				   return blue_to_brown(d.AQI);
				//return "rgb(0, 0, " + (d.pm * 10) + ")";
			   });
			svg_aqi.selectAll("rect") .on('mouseover', tip_aqi.show)
     		 .on('mouseout', tip_aqi.hide);
				   
			// 设置aqi的最小值
			tr.select("#min_aqi").text(d3.min(dataset,function(d){return parseFloat(d.AQI);console.log(d.AQI);
				}));
			// 设置aqi的最大值
			tr.select("#max_aqi").text(d3.max(dataset,function(d){return parseFloat(d.AQI);
				}));
		 
<!--pm2.5的实现-->
   		// 调用x轴的数轴与tip提示
		svg.append("g")
			.attr("class","axis")
			.attr("transform", "translate("+ barPadding +","+ h +")")
			.call(xAxis)
			.call(tip);

		// 根据从data中读取的数据，创建rect元素
		svg.selectAll("rect")
		   .data(dataset)
		   .enter()
		   .append("rect")
		   .attr("fill","red")
		   .transition()
     .delay(function(d,i){
				return 200*i;
		   })
		   .attr("x", function(d, i) {
			   		return i * (w / dataset.length);
			   })
		   .attr("y", function(d) {
					return h - (d.pm * 4);
			   })
		   .attr("width", w / dataset.length - barPadding)
		   .attr("height", function(d) {
					return d.pm * 4;
			   })
		   .attr("fill", function(d) {
				   return blue_to_brown(d.pm);
				//return "rgb(0, 0, " + (d.pm * 10) + ")";
			   });
			svg.selectAll("rect") .on('mouseover', tip.show)
     		 .on('mouseout', tip.hide);
				   
			// 设置pm2.5的最小值
			tr.select("#min").text(d3.min(dataset,function(d){return parseFloat(d.pm);
				}));
			// 设置pm2.5的最大值
			tr.select("#max").text(d3.max(dataset,function(d){return parseFloat(d.pm);
				}));

<!--pm10的实现-->	
	// 调用x轴的数轴与tip提示
		svg_pm10.append("g")
			.attr("class","axis")
			.attr("transform", "translate("+ barPadding +","+ h +")")
			.call(xAxis_pm10)
			.call(tip_pm10);

		// 根据从data中读取的数据，创建rect元素
		svg_pm10.selectAll("rect")
		   .data(dataset)
		   .enter()
		   .append("rect")
		   .attr("fill","blue")
		   .transition()
    	   .delay(function(d,i){
				return 200*i;
		   })
		   .attr("x", function(d, i) {
			   		return i * (w / dataset.length);
			   })
		   .attr("y", function(d) {
					return h - (d.pm10/2);
			   })
		   .attr("width", w / dataset.length - barPadding)
		   .attr("height", function(d) {
					return d.pm10/2;
			   })
		   .attr("fill", function(d) {
				   return blue_to_brown(d.pm10);
				//return "rgb(0, 0, " + (d.pm * 10) + ")";
			   });
			// 鼠标事件处理   
			svg_pm10.selectAll("rect")
					.on('mouseover', tip_pm10.show)
    				.on('mouseout', tip_pm10.hide);
				   
			// 设置pm10的最小值
			tr.select("#min_pm10").text(d3.min(dataset,function(d){return parseFloat(d.pm10);
				}));
			// 设置pm10的最大值
			tr.select("#max_pm10").text(d3.max(dataset,function(d){return parseFloat(d.pm10);
				}));
				
<!--CO的实现-->	
	// 调用x轴的数轴与tip提示
		svg_co.append("g")
			.attr("class","axis")
			.attr("transform", "translate("+ barPadding +","+ h +")")
			.call(xAxis_co)
			.call(tip_co);

		// 根据从data中读取的数据，创建rect元素
		svg_co.selectAll("rect")
		   .data(dataset)
		   .enter()
		   .append("rect")
		   .attr("fill","blue")
		   .transition()
    	   .delay(function(d,i){
				return 200*i;
		   })
		   .attr("x", function(d, i) {
			   		return i * (w / dataset.length);
			   })
		   .attr("y", function(d) {
					return h - (d.CO*20);
			   })
		   .attr("width", w / dataset.length - barPadding)
		   .attr("height", function(d) {
					return d.CO*20;
			   })
		   .attr("fill", function(d) {
				   return blue_to_brown(d.CO);
				//return "rgb(0, 0, " + (d.pm * 10) + ")";
			   });
			// 鼠标事件处理   
			svg_co.selectAll("rect")
					.on('mouseover', tip_co.show)
    				.on('mouseout', tip_co.hide);
				   
			// 设置co的最小值
			tr.select("#min_co").text(d3.min(dataset,function(d){return parseFloat(d.CO);
				}));
			// 设置co的最大值
			tr.select("#max_co").text(d3.max(dataset,function(d){return parseFloat(d.CO);
				}));
				
<!--NO2的实现-->	
	// 调用x轴的数轴与tip提示
		svg_no2.append("g")
			.attr("class","axis")
			.attr("transform", "translate("+ barPadding +","+ h +")")
			.call(xAxis_no2)
			.call(tip_no2);

		// 根据从data中读取的数据，创建rect元素
		svg_no2.selectAll("rect")
		   .data(dataset)
		   .enter()
		   .append("rect")
		   .attr("fill","blue")
		   .transition()
    	   .delay(function(d,i){
				return 200*i;
		   })
		   .attr("x", function(d, i) {
			   		return i * (w / dataset.length);
			   })
		   .attr("y", function(d) {
					return h - (d.NO2/2);
			   })
		   .attr("width", w / dataset.length - barPadding)
		   .attr("height", function(d) {
					return d.NO2/2;
			   })
		   .attr("fill", function(d) {
				   return blue_to_brown(d.NO2);
				//return "rgb(0, 0, " + (d.pm * 10) + ")";
			   });
			// 鼠标事件处理   
			svg_no2.selectAll("rect")
					.on('mouseover', tip_no2.show)
    				.on('mouseout', tip_no2.hide);
				   
			// 设置no2的最小值
			tr.select("#min_no2").text(d3.min(dataset,function(d){return parseFloat(d.NO2);
				}));
			// 设置no2的最大值
			tr.select("#max_no2").text(d3.max(dataset,function(d){return parseFloat(d.NO2);
				}));
				
<!--O3/1的实现-->	
	// 调用x轴的数轴与tip提示
		svg_o31.append("g")
			.attr("class","axis")
			.attr("transform", "translate("+ barPadding +","+ h +")")
			.call(xAxis_o31)
			.call(tip_o31);

		// 根据从data中读取的数据，创建rect元素
		svg_o31.selectAll("rect")
		   .data(dataset)
		   .enter()
		   .append("rect")
		   .attr("fill","blue")
		   .transition()
    	   .delay(function(d,i){
				return 200*i;
		   })
		   .attr("x", function(d, i) {
			   		return i * (w / dataset.length);
			   })
		   .attr("y", function(d) {
					return h - (d.O31/2);
			   })
		   .attr("width", w / dataset.length - barPadding)
		   .attr("height", function(d) {
					return d.O31/2;
			   })
		   .attr("fill", function(d) {
				   return blue_to_brown(d.O31);
				//return "rgb(0, 0, " + (d.pm * 10) + ")";
			   });
			// 鼠标事件处理   
			svg_o31.selectAll("rect")
					.on('mouseover', tip_o31.show)
    				.on('mouseout', tip_o31.hide);
				   
			// 设置no2的最小值
			tr.select("#min_o31").text(d3.min(dataset,function(d){return parseFloat(d.O31);
				}));
			// 设置no2的最大值
			tr.select("#max_o31").text(d3.max(dataset,function(d){return parseFloat(d.O31);
				}));
				
<!--O3/8的实现-->	
	// 调用x轴的数轴与tip提示
		svg_o38.append("g")
			.attr("class","axis")
			.attr("transform", "translate("+ barPadding +","+ h +")")
			.call(xAxis_o38)
			.call(tip_o38);

		// 根据从data中读取的数据，创建rect元素
		svg_o38.selectAll("rect")
		   .data(dataset)
		   .enter()
		   .append("rect")
		   .attr("fill","blue")
		   .transition()
    	   .delay(function(d,i){
				return 200*i;
		   })
		   .attr("x", function(d, i) {
			   		return i * (w / dataset.length);
			   })
		   .attr("y", function(d) {
					return h - (d.O38/2);
			   })
		   .attr("width", w / dataset.length - barPadding)
		   .attr("height", function(d) {
					return d.O38/2;
			   })
		   .attr("fill", function(d) {
				   return blue_to_brown(d.O38);
				//return "rgb(0, 0, " + (d.pm * 10) + ")";
			   });
			// 鼠标事件处理   
			svg_o38.selectAll("rect")
					.on('mouseover', tip_o38.show)
    				.on('mouseout', tip_o38.hide);
				   
			// 设置no2的最小值
			tr.select("#min_o38").text(d3.min(dataset,function(d){return parseFloat(d.O38);
				}));
			// 设置no2的最大值
			tr.select("#max_o38").text(d3.max(dataset,function(d){return parseFloat(d.O38);
				}));
				
<!--SO2的实现-->	
	// 调用x轴的数轴与tip提示
		svg_so2.append("g")
			.attr("class","axis")
			.attr("transform", "translate("+ barPadding +","+ h +")")
			.call(xAxis_so2)
			.call(tip_so2);

		// 根据从data中读取的数据，创建rect元素
		svg_so2.selectAll("rect")
		   .data(dataset)
		   .enter()
		   .append("rect")
		   .attr("fill","blue")
		   .transition()
    	   .delay(function(d,i){
				return 200*i;
		   })
		   .attr("x", function(d, i) {
			   		return i * (w / dataset.length);
			   })
		   .attr("y", function(d) {
					return h - (d.SO2);
			   })
		   .attr("width", w / dataset.length - barPadding)
		   .attr("height", function(d) {
					return d.SO2;
			   })
		   .attr("fill", function(d) {
				   return blue_to_brown(d.SO2);
				//return "rgb(0, 0, " + (d.pm * 10) + ")";
			   });
			// 鼠标事件处理   
			svg_so2.selectAll("rect")
					.on('mouseover', tip_so2.show)
    				.on('mouseout', tip_so2.hide);
				   
			// 设置no2的最小值
			tr.select("#min_so2").text(d3.min(dataset,function(d){return parseFloat(d.SO2);
				}));
			// 设置no2的最大值
			tr.select("#max_so2").text(d3.max(dataset,function(d){return parseFloat(d.SO2);
				}));
				
				
	});
	
			