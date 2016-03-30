<?php

function get_nowCityIndex(){
	return '
  <div class="page-container">
    <div class="main-content">
     <!-- 这里添加主要内容-->
     <div class="row">
      <div class="col-sm-3">
        <div class="xe-widget xe-counter xe-counter-purple" data-count=".num" data-from="1" data-to="94.1"  data-duration="4" data-easing="false">
          <div class="xe-icon">
           <i class="fa-sun-o"></i>
         </div>
         <div class="xe-label">
           <strong class="num">&nbsp;&nbsp;&nbsp;1</strong>
           <span>空气质量指数</span>
         </div>
       </div>
       <div class="xe-widget xe-counter" data-count=".num" data-from="1" data-to="170" data-duration="4" data-easing="false">
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
      <div class="xe-label" data-count=".num" data-from="0" data-to="20" data-suffix="℃" data-duration="4">
       <span class="num">0</span>
     </div>
   </div>
   <div class="xe-lower">
   <span>AQI&nbsp;&nbsp;94.1</span> 
     <span>PM2.5&nbsp;&nbsp;24</span>   
     <span>PM10  &nbsp;&nbsp;300</span> 
     <span>CO&nbsp;&nbsp;2.33</span> 
     <span>CO2&nbsp;&nbsp; 22</span>
     <span>O3/1&nbsp;&nbsp; 41</span>
     <span>O3/8&nbsp;&nbsp; 21</span>
     <span>SO2&nbsp;&nbsp; 13</span>
   </div>
 </div>
</div>
<div class="col-sm-9">
 <div class="panel panel-default" id="mapPlace" style="width: 720px; height: 500px; border:2px solid #000000">
 </div>
</div>
 
</div>
 <!-- 主要内容-->
<div style="margin: 0px auto; text-align: center;">
 <table style="text-align:center; margin: 20px auto;">
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
    center = {lng: 109.124451, lat: 34.418239},
    features = [{type: "Marker", name: "纺织城", desc: "", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 109.138184, lat: 34.3389}},
    {type: "Marker", name: "小寨", desc: "", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 108.970642, lat: 34.225429}},
    {type: "Marker", name: "长安区", desc: "", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 108.937683, lat: 34.157273}},
    {type: "Marker", name: "阎良区", desc: "", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 109.250793, lat: 34.655804}},
    {type: "Marker", name: "临潼区", desc: "", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 109.228821, lat: 34.357042}},
    {type: "Marker", name: "草滩", desc: "", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 109.069519, lat: 34.261757}},
    {type: "Marker", name: "广运潭", desc: "", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 109.068146, lat: 34.315084}},
    {type: "Marker", name: "高压开关厂", desc: "", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 108.917084, lat: 34.270836}},
    {type: "Marker", name: "兴庆小区", desc: "", color: "red", icon: "cir", offset: {x: -9, y: -31}, lnglat: {lng: 109.006348, lat: 34.264026}}];

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
  var searchData = {};
  searchData["position"] = extData.name;
  $.post("/VisibleAir/response/index_r.php", searchData, function(data) {
      location.reload();
    });
  console.log(extData.name);
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