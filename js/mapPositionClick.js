/* �����¼�ʵ�ִ��� */
function closeAQIWindow(e){
	document.getElementById('light').style.display='none';
}
		function mapFeatureClick(e){
			
			document.getElementById('light').style.display="block";
			var cityData = e.target.getExtData();
			d3.selectAll("text").text(""); // ���text�е�����
			// ��ʾ������������λ���Լ���������ʾ��ʽ			
			d3.select("#cityname")
				.append("text")
				.text(cityData.name)
				.style("font-family","�����п�")
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
							500, 82, 115, 90, 108, 117, 66, 78, 83, 95,100,240,202,65 ]; // �������飨����ʱ��Ҫ�����ݿ��ȡ�ģ�
	var body = d3.select("#container");
	var table = body.select("#tablecont").select("table");
	var tr = table.selectAll("tr");
			
	tr.select("#min").text(d3.min(mapdataAQI)); // ��������ֵʵ��
	tr.select("#max").text(d3.max(mapdataAQI)); // �������Сֵʵ��
			
			
			
	var	td3 = tr.select("#td3");		
			
	//����svgԪ��
	var svg = td3.append("svg")
				.attr("width", w)
				.attr("height", h);
						
	//����һ��x������ű����� 
	var xScale = d3.scale.linear()
					.domain([0,mapdataAQI.length])
					.range([0,w-3]);
	// ��ɫ���ű�����:AQI��ֵ��0-500����ɫ����ɫ����ɫ�𽥱任
	var mapdataAQIColor = d3.scale.linear()
								.domain([0,500])
								.range(["blue","red"]);			
	
	// ����һ�����᣺��x�����ű��������ʹ�ã����ǩ��ʾ�ڵײ���
	var xAxis = d3.svg.axis()
					.scale(xScale)
					.orient("top");
	// ���ÿ̶��ߵ������ͳ���
	xAxis.ticks(5)
		.tickSize(100);
	// ����x�������
	svg.append("g")
		.attr("class","axis")
		.attr("transform", "translate("+ barPadding +","+ h +")")
		.call(xAxis);

	// ����ͼʵ��
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