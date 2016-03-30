<?php

function get_airQualityChange(){
	return '
<div class="page-container">
    <div class="main-content">
      <div class="">
  <!-- 主要内容实现-->
        <div id="example" class="parcoords">
        <!--水平坐标-->
        </div>
        <br>
        <div style="height:60px; border-bottom:solid thin #CCC;" id="param"> 
        各参数一年的空气质量信息的变化图
        <button onMouseOver="this.style.backgroundColor=\'#EEAEEE\'" onMouseOut="this.style.backgroundColor=\'\'" class="btn_aqi" style="margin-left:10%;">AQI</button>
        <button onMouseOver="this.style.backgroundColor=\'#EEAEEE\'" onMouseOut="this.style.backgroundColor=\'\'"  class="btn_pm2">PM2.5</button>
        <button onMouseOver="this.style.backgroundColor=\'#EEAEEE\'" onMouseOut="this.style.backgroundColor=\'\'"  class="btn_pm10">PM10</button>
        <button onMouseOver="this.style.backgroundColor=\'#EEAEEE\'" onMouseOut="this.style.backgroundColor=\'\'"  class="btn_co">CO</button>
        <button onMouseOver="this.style.backgroundColor=\'#EEAEEE\'" onMouseOut="this.style.backgroundColor=\'\'"  class="btn_no2">NO2</button>
        <button onMouseOver="this.style.backgroundColor=\'#EEAEEE\'" onMouseOut="this.style.backgroundColor=\'\'"  class="btn_o3">O3</button>
        <button onMouseOver="this.style.backgroundColor=\'#EEAEEE\'" onMouseOut="this.style.backgroundColor=\'\'"  class="btn_so2" onClick="displayYear()">SO2</button>
        </div>
        <br>
        <div id="grid" class="col-sm-7">
         <!-- 表格-->
        </div>
 <!-- 主要内容实现结束-->
      </div>
    </div>
  </div>
  <footer class="main-footer sticky footer-type-1">
        <p class="copy-right">© 2015</p>
  </footer> 

	';
}

?>