<?php

function get_nowCityIndex(){
	return '
	    	<div class="page-container">
		<div class="main-content">
			<!-- 这里添加主要内容		 -->
			<div class="row">
        <div class="col-sm-3">
          <div class="xe-widget xe-counter xe-counter-purple" data-count=".num" data-from="1" data-to="82.5"  data-duration="4" data-easing="false">
						<div class="xe-icon">
							<i class="fa-sun-o"></i>
						</div>
						<div class="xe-label">
							<strong class="num">&nbsp;&nbsp;&nbsp;1</strong>
							<span>空气质量指数</span>
						</div>
					</div>
			    <div class="xe-widget xe-counter" data-count=".num" data-from="1" data-to="153" data-duration="4" data-easing="false">
						<div class="xe-icon">
							<i class="fa-bar-chart"></i>
						</div>
						<div class="xe-label">
							<strong class="num">&nbsp;&nbsp;&nbsp;1</strong>
							<span>全国排名</span>
						</div>
			    </div>
			  	<div class="xe-widget  xe-progress-counter " >
						<div class="xe-background">
							<i class="linecons-cloud"></i>
						</div>
						<div class="xe-upper">
							<div class="xe-icon">
								<i class="linecons-cloud"></i>
							</div>
							<div class="xe-label" data-count=".num" data-from="0" data-to="25" data-suffix="℃" data-duration="4">
							<span class="num">0</span>
							</div>
						</div>
						<div class="xe-lower">
                                                                                         <span>AQI&nbsp;&nbsp;82.5</span> 
                                                                                        <span>PM2.5&nbsp;&nbsp;54</span>   
                                                                                         <span>PM10  &nbsp;&nbsp;250</span> 
                                                                                         <span>CO&nbsp;&nbsp;1.33</span> 
                                                                                        <span>CO2&nbsp;&nbsp; 12</span>
                                                                                          <span>O3/1&nbsp;&nbsp; 21</span>
                                                                                            <span>O3/8&nbsp;&nbsp; 10</span>
                                                                                         <span>SO2&nbsp;&nbsp; 7</span>
                                                                                     </div>
					</div>
        </div>
		    <div class="col-sm-5">
          <div class="panel panel-default" id="mapPlace" style="width: 720px; height: 500px; border:2px solid #000000">
        	</div>
			  </div>
<!-- 主要内容-->
				<div class="col-sm-4"  style="box-shadow:0 0 30px #999 inset;width:50%;">
					<table style="text-align:center;">
  <tr style="font-family:\'楷体\'">
    <td>成分</td>
    <td>条形图</td>
    <td style="width:50px;">min</td>
    <td>max</td>
  </tr>
  <tr>
    <td>AQI</td>
    <td id="td_aqi"></td>
    <td id="min_aqi">sdghfgj</td>
    <td id="max_aqi">min</td>
  </tr>
  <tr>
    <td>PM2.5</td>
    <td id="td_pm"></td>
    <td id="min">sdghfgj</td>
    <td id="max">min</td>
  </tr>
  <tr>
    <td>PM10</td>
    <td id="td_pm10"></td>
    <td id="min_pm10">sdghfgj</td>
    <td id="max_pm10">min</td>
  </tr>
  <tr>
    <td>CO</td>
    <td id="td_co"></td>
    <td id="min_co">sdghfgj</td>
    <td id="max_co">min</td>
  </tr>
  <tr>
    <td>NO2</td>
    <td id="td_no2"></td>
    <td id="min_no2">sdghfgj</td>
    <td id="max_no2">min</td>
  </tr>
  <tr>
    <td>O3/1</td>
    <td id="td_o31"></td>
    <td id="min_o31">sdghfgj</td>
    <td id="max_o31">min</td>
  </tr>
  <tr>
    <td>O3/8</td>
    <td id="td_o38"></td>
    <td id="min_o38">sdghfgj</td>
    <td id="max_o38">min</td>
  </tr>
  <tr>
    <td>SO2</td>
    <td id="td_so2"></td>
    <td id="min_so2">sdghfgj</td>
    <td id="max_so2">min</td>
  </tr>
</table>
				</div>
<!-- 主要内容结束-->
			 </div>		
			<footer class="main-footer sticky footer-type-1">
				<p class="copy-right">© 2015</p>
			</footer>		
		</div>
	</div>
    <script type="text/javascript" src="js/test.js"></script>

	<!--百度地图的添加-->
   <script src="http://webapi.amap.com/maps?v=1.2&key=8325164e247e15eea68b59e89200988b"></script>
    <script>
    !function(){
        var infoWindow, map, level = 10,
            center = {lng: 91.202251, lat: 29.677095},
            features = [{type: "Marker", name: "八廓街", desc: "", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 91.150818, lat: 29.683281}},
                {type: "Marker", name: "西藏大学", desc: "", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 91.200256, lat: 29.623609}}];
 
 
        function loadFeatures(){
            for(var feature, data, i = 0, len = features.length, j, jl, path; i < len; i++){
                data = features[i];
                switch(data.type){
                    case "Marker":
                        feature = new AMap.Marker({ map: map, position: new AMap.LngLat(data.lnglat.lng, data.lnglat.lat),
                            zIndex: 3, extData: data, offset: new AMap.Pixel(data.offset.x, data.offset.y), title: data.name,
                            content: \'<div class="icon icon-\' + data.icon + \' icon-\'+ data.icon +\'-\' + data.color +\'"></div>\' });
                        break;
                    case "Polyline":
                        for(j = 0, jl = data.lnglat.length, path = []; j < jl; j++){
                            path.push(new AMap.LngLat(data.lnglat[j].lng, data.lnglat[j].lat));
                        }
                        feature = new AMap.Polyline({ map: map, path: path, extData: data, zIndex: 2,
                            strokeWeight: data.strokeWeight, strokeColor: data.strokeColor, strokeOpacity: data.strokeOpacity });
                        break;
                    case "Polygon":
                        for(j = 0, jl = data.lnglat.length, path = []; j < jl; j++){
                            path.push(new AMap.LngLat(data.lnglat[j].lng, data.lnglat[j].lat));
                        }
                        feature = new AMap.Polygon({ map: map, path: path, extData: data, zIndex: 1,
                            strokeWeight: data.strokeWeight, strokeColor: data.strokeColor, strokeOpacity: data.strokeOpacity,
                            fillColor: data.fillColor, fillOpacity: data.fillOpacity });
                        break;
                    default: feature = null;
                }
                if(feature){ AMap.event.addListener(feature, "click", mapFeatureClick); } // 添加点击事件
            }
        }
 
 		// 点击事件实现
        function mapFeatureClick(e){
            if(!infoWindow){ infoWindow = new AMap.InfoWindow({autoMove: true}); }
            var extData = e.target.getExtData();
            infoWindow.setContent("<h5>" + extData.name + "</h5><div>" + extData.desc + "</div>");
            infoWindow.open(map, e.lnglat);
        }
 		// 创建地图
        map = new AMap.Map("mapPlace", {center: new AMap.LngLat(center.lng, center.lat), level: level, doubleClickZoom: false});
         
        loadFeatures(); // 加载监测点信息
        map.plugin(["AMap.Scale"], function(){
            map.addControl(new AMap.Scale);
        });
    }();
    </script>
	
	';
}

?>