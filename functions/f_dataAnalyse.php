<?php

function get_dataAnalyse(){
  return '
<div class="page-container">
    <div class="main-content">
      <!-- 这里添加主要内容    -->
      <div class="row">      
      <div id="mapBAR"> 
       <font face="华文行楷">地图</font>      
          <div id="map"> </div>
      <div id="map_bar"> </div>
      </div>
  <br>
  
     <center><div id="stack"> <font face="华文行楷">一天内几个城市AQI的值</font><br> </div></center>
     <div style="text-align:center; margin-top:25px;">AQI与人口数量的关系对比</div>
    <center><div id="populationAQI">  
      <button onclick="displayPopAQIRect()" style="width:48%; height:50px; margin-left:1%" >Rect</button>
    <button onclick="displayPopAQICircle()" style="width:48%; height:50px">Circle</button>  
    
   </div></center>
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