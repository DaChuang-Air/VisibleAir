<?php

function get_airIndexChange(){
	return '
	 <div class="page-container">
    <div class="main-content">
      <!-- 这里添加主要内容    -->
      <div class="row">
        <div class="col-sm-3">
          <ul class="param-list">
            <li class="bg-color-1" ><a id="pmTwoParam" data-paramValue="PM2" href="">PM25</a></li>
            <li class="bg-color-2" ><a id="coParam" data-paramValue="CO" href="">CO</a></li>
            <li class="bg-color-3" ><a id="oParam" data-paramValue="O3" href="">O31H</a></li>
            <li class="bg-color-3" ><a id="oParam" data-paramValue="O3" href="">O38H</a></li>
            <li class="bg-color-4" ><a id="soParam" data-paramValue="SO2" href="">SO2</a></li>
            <li class="bg-color-5" ><a id="aqiParam" data-paramValue="AQI" href="">AQI</a></li>
            <li class="bg-color-6" ><a id="pmTenParam" data-paramValue="PM10" href="">PM10</a></li>
          </ul>
        </div>
        <div class="col-sm-9">
          <form class="form-inline">
            <div class="form-group">
              <select class="form-control" id="year">
                <option value="2015">2015年</option>
                <option value="2014">2014年</option>
                <option value="2013">2013年</option>
                <option value="2012">2012年</option>
              </select>
            </div>
            <div class="form-group">
              <select class="form-control" id="month">
                <option value="1">1月</option>
                <option value="2">2月</option>
                <option value="3">3月</option>
                <option value="4">4月</option>
                <option value="5">5月</option>
                <option value="6">6月</option>
                <option value="7">7月</option>
                <option value="8">8月</option>
                <option value="9">9月</option>
                <option value="10">10月</option>
                <option value="11">11月</option>
                <option value="12">12月</option>
              </select>
            </div>
          </form>
    <!--主要内容-->
          <div class="air-display" id="d1" style="width:960px; height:500px;">
    <!--主要内容结束 -->     
          </div>
        </div>
      </div> 
      
    </div>
  </div>
  <footer class="main-footer sticky footer-type-1">
        <p class="copy-right">© 2015</p>
  </footer> 

	';
}

?>