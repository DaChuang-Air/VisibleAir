<?php

function get_mapPosition(){
  return '
 <div class="page-container">
    <div class="main-content">
      <!-- 这里添加主要内容    -->
      
     <div id="wrap" class="my-map">
    <div id="mapContainer"></div>
   </div>
    
    
<div id="light" class="white_content">  
  <div id="container">
    <div id="table_head"> <span id="cityname"></span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id="lnglat"></span> </div>
    <div id="tablecont" >
      <table style="text-align:center;">
        <tr>
          <td>成分</td>
          <td>条形图</td>
          <td style="width:10%;">min</td>
          <td>max</td>
        </tr>
        <tr>
          <td>AQI</td>
          <td id="td3"></td>
          <td id="min">sdghfgj</td>
          <td id="max">min</td>
        </tr>
      </table>
    </div>
  </div>
    <a href="/VisibleAir/index1.php">详细信息</a> <!--链接到当前选中城市的首页--> 
  <a href="javascript:void(0)" onclick="closeAQIWindow() "> Close</a> 
  </div>
    
     
      <footer class="main-footer sticky footer-type-1">
        
        <div class="footer-inner">
        
          <!-- Add your copyright text here -->
          <div class="footer-text">
            © 2015
          </div>
          <!-- Go to Top Link, just add rel="go-top" to any link to add this functionality -->
          <div class="go-up">
            <a href="#" rel="go-top">
              <i class="fa-angle-up"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
        
  </div>
  ';
}

?>
