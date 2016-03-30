<?php

function get_ranking(){
	return '
 <div class="page-container">
    <div class="main-content">
      <!-- 这里添加主要内容    -->
      <form class="form-inline">
        <div class="form-group">
          <label for="year">Year</label>
          <select class="form-control" id="year">
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
          </select>
        </div>
      </form>
      <div id="lugui-wrapper" class="table-responsive rank-table">
        <!--城市空气质量排名d3实现-->
        
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