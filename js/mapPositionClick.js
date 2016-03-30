/* 监听事件实现代码 */
function closeAQIWindow(e){
	document.getElementById('light').style.display='none';
}
		function mapFeatureClick(e){
			
			document.getElementById('light').style.display="block";
			var cityData = e.target.getExtData();
			d3.selectAll("text").text(""); // 清空text中的内容
			// 显示城市名、地理位置以及设置其显示格式			
			d3.select("#cityname")
				.append("text")
				.text(cityData.name)
				.style("font-family","华文行楷")
				.style("font-size","18px")
				.style("font-weight","bold")
				.style("color","#333");
			d3.select("#lnglat")
				.append("text")
				.text("			"+cityData.lnglat.lng+" "+cityData.lnglat.lat)
				.attr("font-size","10px");

			//Width and height
	var w = 500;
	var h = 130;
	var barPadding = 1;
			
	var mapdataAQI = [ 155, 20, 103, 190, 221,85, 22, 98, 195, 103,
							500, 82, 115, 90, 108, 117, 66, 78, 83, 95,100,240,202,65 ]; // 数据数组（交互时需要从数据库获取的）
	var body = d3.select("#container");
	var table = body.select("#tablecont").select("table");
	var tr = table.selectAll("tr");
			
	tr.select("#min").text(d3.min(mapdataAQI)); // 表格中最大值实现
	tr.select("#max").text(d3.max(mapdataAQI)); // 表格中最小值实现
			
			
			
	var	td3 = tr.select("#td3");		
			
	//创建svg元素
	var svg = td3.append("svg")
				.attr("width", w)
				.attr("height", h);
						
	//创建一个x轴的缩放比例尺 
	var xScale = d3.scale.linear()
					.domain([0,mapdataAQI.length])
					.range([0,w-3]);
	// 颜色缩放比例尺:AQI的值从0-500，颜色从蓝色到红色逐渐变换
	var mapdataAQIColor = d3.scale.linear()
								.domain([0,500])
								.range(["blue","red"]);			
	
	// 创建一个数轴：与x轴缩放比例尺配合使用，其标签显示在底部。
	var xAxis = d3.svg.axis()
					.scale(xScale)
					.orient("top");
	// 设置刻度线的条数和长度
	xAxis.ticks(5)
		.tickSize(100);
	// 调用x轴的数轴
	svg.append("g")
		.attr("class","axis")
		.attr("transform", "translate("+ barPadding +","+ h +")")
		.call(xAxis);

	// 条形图实现
	svg.selectAll("rect")
		.data(mapdataAQI)
		.enter()
		.append("rect")
		.attr("x", function(d, i) {
		   		return i * (w / mapdataAQI.length);
		   })
		.attr("y", function(d) {
		   		return h - (d / 5);
		   })
		.attr("width", w / mapdataAQI.length - barPadding)
		.attr("height", function(d) {
		   		return d / 5;
		   })
		.attr("fill", function(d) {
				return mapdataAQIColor(d);
		   });
			
			}